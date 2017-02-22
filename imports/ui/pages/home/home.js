import { Template } from 'meteor/templating';

import '../../partials/cpu/cpu.js';
import '../../partials/memory/memory.js';
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
