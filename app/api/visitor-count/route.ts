import dbConnect from "@/lib/db";
import VisitorModel from "@/models/visitors";
import { NextRequest, NextResponse } from "next/server";
import Visitor from "@/models/visitors";

const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    let ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (ip === "::1") ip = "127.0.0.1";

    const now = new Date();

    let visitor = await Visitor.findOne({ ip });

    let counted = false;

    if (!visitor) {
      await Visitor.create({
        ip,
        lastVisitedAt: now,
        visitCount: 1,
      });

      counted = true;
    } else {
      const diff = now.getTime() - new Date(visitor.lastVisitedAt).getTime();

      if (diff > SESSION_TIMEOUT) {
        visitor.lastVisitedAt = now;
        visitor.visitCount += 1;

        await visitor.save();

        counted = true;
      }
    }

    const total = await Visitor.aggregate([
      {
        $group: {
          _id: null,
          totalVisits: { $sum: "$visitCount" },
        },
      },
    ]);

    const totalVisits = total[0]?.totalVisits || 0;

    return NextResponse.json(
      {
        counted,
        totalVisits,
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error: " + error.message },
      { status: 400 },
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const uniqueVisitors = await Visitor.countDocuments();

    const total = await Visitor.aggregate([
      {
        $group: {
          _id: null,
          totalVisits: { $sum: "$visitCount" },
        },
      },
    ]);

    const totalVisits = total[0]?.totalVisits || 0;

    return NextResponse.json(
      {
        totalVisits,
        uniqueVisitors,
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error: " + error.message },
      { status: 400 },
    );
  }
}
