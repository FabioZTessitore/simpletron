import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Ground } from 'meteor/ground:db';

import { MemoryCell } from './memory_cell.js';

export const Memory = Ground.Collection('memory', {connection: null});

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

Memory.create = function (userId) {
  const memoryAttributes = {
    userId,
  };

  let memoryId = Memory.findOne({ userId });
  if (memoryId) {
    MemoryCell.remove({ userId });
    Memory.remove({ userId });
  }

  memoryId = Memory.insert(memoryAttributes, function (err, result) {
    if (err) {
      throw new Meteor.Error(err.reason);
    }
    for (let i = 0; i < memoryAttributes.size; i++) {
      MemoryCell.create(userId, i);
    }
  });

  return {
    _id: memoryId,
  };
}
