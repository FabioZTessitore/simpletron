import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const MemoryCell = new Mongo.Collection('memorycell');

const MemoryCellSchema = new SimpleSchema({
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },

  index: {
    type: Number,
  },

  value: {
    type: Number,
    defaultValue: 0,
  },
});

MemoryCell.attachSchema(MemoryCellSchema);
