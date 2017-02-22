import { Template } from 'meteor/templating';

import { MemoryCell } from './client/memory_cell.js';
import { Memory } from './client/memory.js';

import './memory.html';

Template.Memory.onCreated( function () {
  Memory.create(Meteor.userId());
});

Template.Memory.helpers({
  memory () {
    return Memory.findOne({ userId: Meteor.userId() });
  },

  memorycell () {
    return MemoryCell.find({ userId: Meteor.userId() }, { sort: { index: 1 } });
  },

  cell: function (index) {
    return "cell"+(index);
  },

  cellformat: function (value) {
    let sign = '+';
    if (value < 0) {
      sign = '-';
      value = -value;
    }
    return sign+("0000"+value).substr(-4, 4);
  },
});
