package com.fzt.app.simpletron;

import com.fzt.app.simpletron.Simpletron;

public class SimpletronApp
{
  public static void main(String[] args)
  {
    final int memorySize = 100;

    Simpletron simpletron = new Simpletron(memorySize);

    simpletron.welcome();

    simpletron.enterProgram();

    simpletron.execProgram();
  }
}
