package simpletron;

import java.util.Scanner;

import cpu.Cpu;
import memory.Memory;

public class Simpletron
{
  private Memory memory;
  private Cpu cpu;

  Scanner keyboard;

  public Simpletron(int memorySize)
  {
    this.memory = new Memory(memorySize);
    this.cpu = new Cpu(this, this.memory);

    keyboard = new Scanner(System.in);
  }

  public void enterProgram()
  {
    int istruction = -1;
    int index = 0;

    while (istruction != -99999) {
      System.out.printf(" %02d ? ", index);
      istruction = keyboard.nextInt();

      if (istruction != -99999) {
        this.memory.set(index++, istruction);
      }
    }

    System.out.println("*** Program loading completed ***");
  }

  public void execProgram()
  {
    System.out.println("*** Program execution begins ***");

    this.cpu.run();

    this.cpu.dump();
    System.out.println();
    this.memory.dump();
  }

  public int readFromStdin()
  {
    return keyboard.nextInt();
  }
}
