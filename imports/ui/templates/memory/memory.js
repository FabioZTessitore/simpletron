import { Template } from 'meteor/templating';

import { MemoryCell } from '../../../api/memory-cell/memory-cell.js';
import { Memory } from '../../../api/memory/memory.js';

import './memory.html';

Template.Memory.onCreated( function () {
  const _this = this;
  this.autorun( function () {
    _this.subscribe('memory');
    _this.subscribe('memorycell');
  });
});

Template.Memory.helpers({
  memory () {
    //console.log(Memory.findOne({ userId: Meteor.userId() }));
    return Memory.findOne({ userId: Meteor.userId() });
  },

  memorycell () {
    return MemoryCell.find({ userId: Meteor.userId() }, { sort: { index: 1 } });
  },

  cell: function (index) {
    return "cell"+(index);
  },

  cellformat: function (value) {
    return ("0000"+value).substr(-4, 4);
  },
});
