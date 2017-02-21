import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Memory = new Mongo.Collection('memory');

const MemorySchema = new SimpleSchema({
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },

  size: {
    type: Number,
    defaultValue: 100,
  },
});

Memory.attachSchema(MemorySchema);
