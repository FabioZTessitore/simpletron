import { Meteor } from 'meteor/meteor';

import { Memory } from './memory.js';

Meteor.methods({
  "memory.create": function (userId) {
    const memoryAttributes = {
      userId,
      m: new Array(this.size).fill(0),
    };

    let memoryId = Memory.findOne({ userId: Meteor.userId() });

    if (memoryId) {
      Memory.update(memoryId, { $set: memoryAttributes });
    } else {
      memoryId = Memory.insert(memoryAttributes, function (err, result) {
        if (err) {
          throw new Meteor.Error(err.reason);
        }
      });
    }

    return {
      _id: memoryId,
    };
  },
})
