import { Meteor } from 'meteor/meteor';

import { MemoryCell } from './memory-cell.js';

Meteor.methods({
  "memorycell.create": function (userId, index) {
    const memoryCellAttributes = {
      userId,
      index,
    };

    memoryCellId = MemoryCell.insert(memoryCellAttributes, function (err, result) {
      if (err) {
        throw new Meteor.Error(err.reason);
      }
    });

    return {
      _id: memoryCellId,
    };
  },
})
