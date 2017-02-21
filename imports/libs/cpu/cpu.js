import Memory from '../memory/memory.js';

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

class CPU {
  constructor () {
    this.accumulator = 0;
    this.instructionRegister = 0;
    this.instructionCounter = 0;
    this.operationCode = 0;
    this.operand = 0;
  }

  fetch (memory) {
    this.instructionRegister = memory.m[this.instructionCounter];
    this.operationCode = Math.trunc(this.instructionRegister / 100);
    this.operand = this.instructionRegister % 100;
  }

  execute (memory) {
    switch (this.operationCode) {
      case READ:
        break;
      case WRITE:
        break;
      case LOAD:
        this.accumulator = memory.m[this.operand];
        break;
      case STORE:
        memory.m[this.operand] = this.accumulator;
        break;
      case ADD:
        this.accumulator += memory.m[this.operand];
        break;
      case SUB:
        this.accumulator -= memory.m[this.operand];
        break;
      case MUL:
        this.accumulator *= memory.m[this.operand];
        break;
      case DIV:
        this.accumulator /= memory.m[this.operand];
        this.accumulator = Math.trunc(this.accumulator);
        break;
      case BRANCH:
        this.instructionCounter = memory.m[this.operand];
        break;
      case BRANCHNEG:
        if (this.accumulator < 0) {
          this.instructionCounter = memory.m[this.operand];
        }
        break;
      case BRANCHZERO:
        if (this.accumulator == 0) {
          this.instructionCounter = memory.m[this.operand];
        }
        break;
      case HALT:
        break;
    }
  }
}

export default CPU;
