import { Template } from 'meteor/templating';

import CPU from '../../../libs/cpu/cpu.js';

import './cpu.html';

Template.Cpu.onCreated( function () {
  const cpu = new CPU();
  this.cpu = new ReactiveVar(cpu);
});

Template.Cpu.helpers({
  accumulator () {
    const instance = Template.instance();
    return instance.cpu.get().accumulator;
  },

  instructionCounter () {
    const instance = Template.instance();
    return instance.cpu.get().instructionCounter;
  },

  instructionRegister () {
    const instance = Template.instance();
    return instance.cpu.get().instructionRegister;
  },

  operationCode () {
    const instance = Template.instance();
    return instance.cpu.get().operationCode;
  },

  operand () {
    const instance = Template.instance();
    return instance.cpu.get().operand;
  },
});

Template.Cpu.onRendered( function() {
  /*const container = $('#memory');
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
  }*/
});
