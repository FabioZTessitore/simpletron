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

  m: {
    type: Array,
    /*default: function () {
      return Array(this.size).fill(0);
    },*/
  },
  'm.$': {
    type: Number,
  },
});

Memory.attachSchema(MemorySchema);
