const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Block Schema
 * Represents a single node in the document AST.
 * Tree structure via parentId reference — flat collection, not embedded —
 * so individual blocks can be synced independently via Yjs later.
 */
const blockSchema = new Schema(
  {
    documentId: {
      type: Schema.Types.ObjectId,
      ref: 'Document',
      required: true,
      index: true,
    },
    parentId: {
      type: Schema.Types.ObjectId,
      ref: 'Block',
      default: null, // null = root-level block
      index: true,
    },
    type: {
      type: String,
      enum: [
        'paragraph',
        'heading',
        'list',
        'listItem',
        'table',
        'tableRow',
        'tableCell',
        'codeBlock',
        'quote',
        'embed',
      ],
      required: true,
    },
    content: {
      type: Schema.Types.Mixed, // shape depends on type - see model docs
      default: null,
    },
    order: {
      type: Number,
      default: 0, // sibling order under the same parent
    },
    depth: {
      type: Number,
      default: 0, // calculated by pre-save hook, not set manually
    },
    path: {
      type: [Schema.Types.ObjectId], // ancestor chain, root -> ... -> immediate parent
      default: [],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    lastEditedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Block', blockSchema);