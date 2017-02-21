import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const CPU = new Mongo.Collection('cpu');

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
