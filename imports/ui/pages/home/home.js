import { Template } from 'meteor/templating';

import '../../templates/cpu/cpu.js';
import '../../templates/memory/memory.js';
import './home.html';

Template.Home.onCreated( function () {
  const _this = this;
  this.autorun( function () {
    //_this.subscribe('bus-services');
  });
});

Template.Home.helpers({
});

Template.Home.events({
});
