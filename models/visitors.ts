import mongoose, { Schema, Document } from "mongoose";

export interface IVisitor extends Document {
  ip: string;
  lastVisitedAt: Date;
  visitCount: number;
}

const VisitorSchema = new Schema<IVisitor>(
  {
    ip: { type: String, required: true, unique: true },
    lastVisitedAt: { type: Date, default: Date.now },
    visitCount: { type: Number, default: 1 },
  },
  { timestamps: true },
);

export default mongoose.models.Visitor ||
  mongoose.model<IVisitor>("Visitor", VisitorSchema);
