const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Document Schema
 * Top-level container. Points to the root block of its AST tree.
 */
const documentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    collaborators: {
      type: [Schema.Types.ObjectId],
      ref: 'User',
      default: [], // for future sharing/permissions
    },
    rootBlockId: {
      type: Schema.Types.ObjectId,
      ref: 'Block',
      default: null, // set once the first root block is created
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Document', documentSchema);