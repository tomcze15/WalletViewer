import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const walletSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Wallet', walletSchema);
