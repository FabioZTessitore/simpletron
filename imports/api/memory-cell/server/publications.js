import { Meteor } from 'meteor/meteor';
import { MemoryCell } from '../memory-cell.js';

Meteor.publish('memorycell', function () {
  return MemoryCell.find({ userId: this.userId });
});
