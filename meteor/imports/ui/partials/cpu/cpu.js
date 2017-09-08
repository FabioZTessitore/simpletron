import { Template } from 'meteor/templating';

import { CPU } from './client/cpu.js';
import { MemoryCell } from '../memory/client/memory_cell.js';

import './cpu.html';

const READ = 10;
const WRITE = 11;

const LOAD = 20;
const STORE = 21;

const ADD = 30;
const SUB = 31;
const DIV = 32;
const MUL = 33;

const BRANCH = 40;
const BRANCHNEG = 41;
const BRANCHZERO = 42;
const HALT = 43;

Template.Cpu.onCreated( function () {
  CPU.cpuCreate(Meteor.userId());
  this.step = new ReactiveVar('fetch');
});

Template.Cpu.helpers({
  theCpu () {
    const userId = Meteor.userId();
    return CPU.find({ userId });
  },
});

Template.Cpu.events({
  "click .resetIC": function (e, instance) {
    e.preventDefault();

    const userId = Meteor.userId();
    let cpu = CPU.findOne({ userId });
    cpu.instructionCounter = 0;
    CPU.update(cpu._id, { $set: cpu });

    instance.step.set('fetch');
  },

  "click .step": function (e, instance) {
    e.preventDefault();

    let step = instance.step.get();

    const userId = Meteor.userId();
    let cpu = CPU.findOne({ userId });

    console.log(step);

    if (step == 'fetch') {
      let memCell = MemoryCell.findOne({ userId: Meteor.userId(), index: cpu.instructionCounter});
      cpu.instructionRegister = memCell.value;
      cpu.operationCode = Math.trunc(cpu.instructionRegister / 100);
      cpu.operand = cpu.instructionRegister % 100;
    } else if (step == 'updatePC') {
      cpu.instructionCounter++;
    } else if (step == 'execute') {
      let memCell = MemoryCell.findOne({ userId: Meteor.userId(), index: cpu.operand});
      console.log(memCell);
      switch (cpu.operationCode) {
        case READ:
          break;
        case WRITE:
          break;
        case LOAD:
          cpu.accumulator = memCell.value;
          break;
        case STORE:
          memCell.value = cpu.accumulator;
          MemoryCell.update(memCell._id, { $set: { value: memCell.value }});
          break;
        case ADD:
          cpu.accumulator += memCell.value;
          break;
        case SUB:
          cpu.accumulator -= memCell.value;
          break;
        case MUL:
          cpu.accumulator *= memCell.value;
          break;
        case DIV:
          cpu.accumulator /= memCell.value;
          cpu.accumulator = Math.trunc(cpu.accumulator);
          break;
        case BRANCH:
          cpu.instructionCounter = memCell.value;
          break;
        case BRANCHNEG:
          if (cpu.accumulator < 0) {
            cpu.instructionCounter = memCell.value;
          }
          break;
        case BRANCHZERO:
          if (cpu.accumulator == 0) {
            cpu.instructionCounter = memCell.value;
          }
          break;
        case HALT:
          break;
      }
    }
    CPU.update(cpu._id, { $set: cpu });

    if (step == 'fetch') step = 'updatePC';
    else if (step == 'updatePC') step = 'execute';
    else if (step == 'execute') step = 'fetch';
    instance.step.set(step);
  },
});
