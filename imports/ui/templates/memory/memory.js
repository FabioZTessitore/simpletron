import { Template } from 'meteor/templating';

import Memory from '../../../libs/memory/memory';

import './memory.html';

Template.Memory.onCreated( function () {
  const m = new Memory(100);
  this.memory = new ReactiveVar(m);
});

Template.Memory.onRendered( function() {
  const container = $('#memory');
  let item;
  let col = 0;
  let row = 0;
  const m = this.memory.get();
  for (let i = 0; i < m.size; i++) {
    if(col==11) {
      item = $('<div class="col s1">').text("_");
      container.append(item);
      col = 0;
      row++;
    }
    if (col==0) {
      item = $('<div class="col s1">').text(row);
      container.append(item);
      col++;
    }

    item = $('<div class="col s1">').text(m.m[i]);
    container.append(item);
    col++;
  }
});
