import simpletron.Simpletron;

public class SimpletronApp
{
  public static void main(String[] args)
  {
    System.out.println("*** Welcome to Simpletron! ***");
    System.out.println("*** Please enter your program one istruction    ***");
    System.out.println("*** (or data word) at a time. I will display    ***");
    System.out.println("*** the location number and a question mark (?) ***");
    System.out.println("*** You the type the word for that location.    ***");
    System.out.println("*** Type -99999 to stop entering your program.  ***");

    final int memorySize = 1000;
    Simpletron simpletron = new Simpletron(memorySize);

    simpletron.enterProgram();

    simpletron.execProgram();
  }
}
