'use strict'

// models/Post.model.ts

import { Schema, model, Document } from 'mongoose';

interface IPost extends Document {
  title: string;
  content: string;
  createdAt: Date;
}

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = model<IPost>('Post', postSchema);

export default Post;
