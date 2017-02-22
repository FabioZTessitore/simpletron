import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const MemoryCell = new Mongo.Collection(null);

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

MemoryCell.create = function (userId, index) {
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
}
