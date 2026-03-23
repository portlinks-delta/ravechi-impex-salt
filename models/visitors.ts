import mongoose, { Schema, Document } from "mongoose";

export interface IVisitor extends Document {
  count: number;
}

const VisitorSchema = new Schema<IVisitor>(
  {
    count: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const VisitorModel =
  mongoose.models.Visitor || mongoose.model<IVisitor>("Visitor", VisitorSchema);

export default VisitorModel;
