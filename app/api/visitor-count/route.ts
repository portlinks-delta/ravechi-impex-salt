import dbConnect from "@/lib/db";
import VisitorModel from "@/models/visitors";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const visitorCount = await VisitorModel.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { upsert: true, new: true },
    );

    return NextResponse.json({ count: visitorCount.count }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Something went wrong" + error?.message },
      { status: 400 },
    );
  }
}

export async function GET() {
  try {
    const visitorCount = await VisitorModel.find();
    return NextResponse.json({ visitorCount }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Something went wrong" + error?.message },
      { status: 400 },
    );
  }
}
