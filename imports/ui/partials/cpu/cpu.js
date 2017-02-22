import { Template } from 'meteor/templating';

import { CPU } from './client/cpu.js';

import './cpu.html';

Template.Cpu.onCreated( function () {
  CPU.cpuCreate(Meteor.userId());
});

Template.Cpu.helpers({
  theCpu () {
    const userId = Meteor.userId();
    return CPU.find({ userId });
  },
});
