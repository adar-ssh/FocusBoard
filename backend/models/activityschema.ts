import mongoose, { Document, Schema } from 'mongoose';

export interface IActivity extends Document {
    userId: mongoose.Types.ObjectId;
    windowTitle: string;
    appName: string;
    startTime: Date;
    endTime: Date;
    duration: number; 
    idleTime: number;
    timestamp: Date;
    url?: string;
    category: string;
}

const ActivitySchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    windowTitle: { type: String, required: true },
    appName: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    duration: { type: Number, required: true },
    idleTime: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
    url: { type: String },
    category: { type: String, required: true, default: 'neutral' },
});

export const Activity = mongoose.model<IActivity>('Activity', ActivitySchema);

