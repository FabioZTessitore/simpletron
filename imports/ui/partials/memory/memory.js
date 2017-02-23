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

  cellformat: function (value) {
    let sign = '+';
    if (value < 0) {
      sign = '-';
      value = -value;
    }
    return sign+("0000"+value).substr(-4, 4);
  },
});

Template.Memory.events({
  "change input": function (e) {
    e.preventDefault();

    $(e.target)[0].blur();

    const cellId = $(e.target)[0].id;
    let value = parseInt($(e.target)[0].value);
    if (isNaN(value) || Math.abs(value) > 9999) {
      value = 0;
    }

    //console.log('cellId: ', cellId);
    //console.log('value: ', value);

    MemoryCell.update(cellId, { $set: { value: value } });
    //let mId = MemoryCell.find(cellId).fetch();
    //console.log(mId);
  },
});
