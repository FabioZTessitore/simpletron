import { Meteor } from 'meteor/meteor';

import { MemoryCell } from '../memory-cell/memory-cell.js';
import { Memory } from './memory.js';

Meteor.methods({
  "memory.create": function (userId) {
    const memoryAttributes = {
      userId,
    };

    let memoryId = Memory.findOne({ userId });

    if (memoryId) {
      Memory.update(memoryId, { $set: memoryAttributes });
    } else {
      memoryId = Memory.insert(memoryAttributes, function (err, result) {
        if (err) {
          throw new Meteor.Error(err.reason);
        }
        MemoryCell.remove({ userId });
        for (let i = 0; i < memoryAttributes.size; i++) {
          Meteor.call("memorycell.create", userId, i);
        }
      });
    }

    return {
      _id: memoryId,
    };
  },
})
