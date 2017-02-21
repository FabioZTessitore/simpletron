import { Template } from 'meteor/templating';

import Tabular from 'meteor/aldeed:tabular';

import { Memory } from '../../../api/memory/memory';

import './memory.html';

new Tabular.Table({
  name: "Memory",
  collection: Memory,
  columns: [
    //{data: "title", title: "Title"},
    //{data: "author", title: "Author"},
    //{data: "copies", title: "Copies Available"},
    /*{
      data: "lastCheckedOut",
      title: "Last Checkout",
      render: function (val, type, doc) {
        if (val instanceof Date) {
          return moment(val).calendar();
        } else {
          return "Never";
        }
      }
    },*/
    /*{data: "summary", title: "Summary"},
    {
      tmpl: Meteor.isClient && Template.bookCheckOutCell
    }*/
  ]
});

Template.Memory.onCreated( function () {
  const _this = this;
  this.autorun( function () {
    _this.subscribe('memory');
  });
});
