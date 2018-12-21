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

  public void welcome()
  {
    System.out.println("*** Welcome to Simpletron! ***");
    System.out.println("*** Please enter your program one istruction    ***");
    System.out.println("*** (or data word) at a time. I will display    ***");
    System.out.println("*** the location number and a question mark (?) ***");
    System.out.println("*** You the type the word for that location.    ***");
    System.out.println("*** Type -99999 to stop entering your program.  ***\n\n");    
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
