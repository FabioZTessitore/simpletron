package cpu;

import simpletron.Simpletron;
import cpu.OpCodes;
import memory.Memory;

public class Cpu
{
  private int accumulator;
  private int opcode;
  private int operand;
  private int instructionCounter;
  private int instructionRegister;

  private Simpletron simpletronRef;
  private Memory memRef;

  public Cpu(Simpletron simpletron, Memory memRef)
  {
    this.accumulator = 0;
    this.opcode = 0;
    this.operand = 0;
    this.instructionCounter = 0;
    this.instructionRegister = 0;

    this.simpletronRef = simpletron;
    this.memRef = memRef;
  }

  public void dump()
  {
    System.out.println("\n\nREGISTERS:");
    System.out.printf("accumulator\t\t%+05d\n", this.accumulator);
    System.out.printf("instructionCounter\t   %02d\n", this.instructionCounter);
    System.out.printf("instructionRegister\t%+05d\n", this.instructionRegister);
    System.out.printf("operationCode\t\t   %02d\n", this.opcode);
    System.out.printf("operand\t\t\t   %02d\n", this.operand);
  }

  public void run()
  {
    Boolean halt = false;

    while (!halt) {
      this.fetch();
      halt = this.execute();
    }
  }

  public void fetch()
  {
    this.instructionRegister = this.memRef.get(this.instructionCounter);
    this.opcode = this.instructionRegister / 100;
    this.operand = this.instructionRegister % 100;

    this.instructionCounter++;
  }

  public Boolean execute()
  {
    Boolean halt = false;

    switch (this.opcode) {
      case OpCodes.READ:
        System.out.print("Enter an integer\n\t? ");
        this.memRef.set(this.operand, this.simpletronRef.readFromStdin());
        break;
      case OpCodes.WRITE:
      System.out.printf("--> %d\n", this.memRef.get(this.operand));
        break;
      case OpCodes.LOAD:
        this.accumulator = this.memRef.get(this.operand);
        break;
      case OpCodes.STORE:
        this.memRef.set(this.operand, this.accumulator);
        break;
      case OpCodes.ADD:
        this.accumulator += this.memRef.get(this.operand);
        break;
      case OpCodes.SUB:
        this.accumulator -= this.memRef.get(this.operand);
        break;
      case OpCodes.MUL:
        this.accumulator *= this.memRef.get(this.operand);
        break;
      case OpCodes.DIV:
        this.accumulator /= this.memRef.get(this.operand);
        break;
      case OpCodes.BRANCH:
        this.instructionCounter = this.operand;
        break;
      case OpCodes.BRANCHNEG:
        if (this.accumulator < 0) this.instructionCounter = this.operand;
        break;
      case OpCodes.BRANCHZERO:
        if (this.accumulator == 0) this.instructionCounter = this.operand;
        break;
      case OpCodes.HALT:
        System.out.println("*** Simpletron execution terminated ***");
        halt = true;
        break;
      default:
        System.out.println("*** Simpletron runtime error, opcode not valid! ***");
        halt = true;
        break;
    }

    return halt;
  }
};
