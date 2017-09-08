import java.util.Scanner;

import cpu.Cpu;
import memory.Memory;

public class Simpletron
{
  public static void main(String[] args) {
    System.out.println("*** Welcome to Simpletron! ***");
    System.out.println("*** Please enter your program one istruction    ***");
    System.out.println("*** (or data word) at a time. I will display    ***");
    System.out.println("*** the location number and a question mark (?) ***");
    System.out.println("*** You the type the word for that location.    ***");
    System.out.println("*** Type -99999 to stop entering your program.  ***");

    Scanner keyboard = new Scanner(System.in);
    Cpu cpu = new Cpu(new Memory(), keyboard);

    int istruction = -1;
    int index = 0;

    while (istruction != -99999) {
      System.out.printf(" %02d ? ", index);
      istruction = keyboard.nextInt();

      if (istruction != -99999) {
        cpu.storeInMemory(index++, istruction);
      }
    }

    System.out.println("*** Program loading completed ***");

    /*int testProgram[] = {
      1009,
      1010,
      2009,
      3110,
      4107,
      1109,
      4300,
      1110,
      4300,
      0000,
      0000,
      -99999
    };*/


    //cpu.loadProgram(testProgram);

    System.out.println("*** Program execution begins ***");

    cpu.run();
    cpu.dump();
  }
}
