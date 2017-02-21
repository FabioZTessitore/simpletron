import { Meteor } from 'meteor/meteor';
import { Memory } from '../memory.js';

Meteor.publish('memory', function () {
  return Memory.find({ userId: this.userId });
});
