import cpu.Cpu;
import memory.Memory;

public class Simpletron
{
  public static void main(String[] args) {
    System.out.println("*** Welcome to Simpletron! ***");
    System.out.println("*** Please enter your program one istruction ***");
    System.out.println("*** (or data word) at a time. I will type the ***");
    System.out.println("*** location number and a question mark (?). ***");
    System.out.println("*** You the type the word for that location. ***");
    System.out.println("*** Type the sentinel -99999 to stop entering ***");
    System.out.println("*** your program. ***");

    int testProgram[] = {
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
    };

    Cpu cpu = new Cpu(new Memory());

    cpu.loadProgram(testProgram);

    System.out.println("*** Program loading completed ***");
    System.out.println("*** Program execution begins ***");

    Boolean halt = false;
    while (!halt) {
      cpu.fetch();
      halt = cpu.execute();
    }
    cpu.dump();
  }
}
