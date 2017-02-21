import { Template } from 'meteor/templating';

import { CPU } from '../../../api/cpu/cpu.js';

import './cpu.html';

Template.Cpu.onCreated( function () {
  const _this = this;
  this.autorun( function () {
    _this.subscribe('cpu');
  });
});

Template.Cpu.helpers({
  theCpu () {
    const userId = Meteor.userId();
    return CPU.find({ userId });
  },
});
