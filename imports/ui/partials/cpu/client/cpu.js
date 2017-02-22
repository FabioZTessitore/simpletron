import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const CPU = new Mongo.Collection(null);

const CPUSchema = new SimpleSchema({
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },

  accumulator: {
    type: Number,
    defaultValue: 0,
  },

  instructionRegister: {
    type: Number,
    defaultValue: 0,
  },

  instructionCounter: {
    type: Number,
    defaultValue: 0,
  },

  operationCode: {
    type: Number,
    defaultValue: 0,
  },

  operand: {
    type: Number,
    defaultValue: 0,
  },
});

CPU.attachSchema(CPUSchema);

CPU.cpuCreate = function (userId) {
  const cpuAttributes = {
    userId,
  };

  let cpuId = CPU.findOne({ userId: Meteor.userId() });
  if (cpuId) {
    CPU.remove(cpuId);
  }

  cpuId = CPU.insert(cpuAttributes, function (err, result) {
    if (err) {
      throw new Meteor.Error(err.reason);
    }
  });

  return {
    _id: cpuId,
  };
}
