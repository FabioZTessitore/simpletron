package com.fzt.app.simpletron;

import java.util.Arrays;

public class Memory
{
  private int m[];
  private int size;

  public Memory(int size)
  {
    this.size = size;
    this.m = new int[this.size];
    Arrays.fill(this.m, 0);
  }

  public int get(int index)
  {
    return this.m[index];
  }

  public void set(int index, int value)
  {
    this.m[index] = value;
  }

  public void dump()
  {
    System.out.println("MEMORY:");

    System.out.print("    ");
    for (int col = 0; col < 10; col++) {
      System.out.printf(" %5d", col);
    }
    System.out.print("\n");

    for (int row = 0; row < this.size/10; row++) {
      System.out.printf("%04d", row*10);
      for (int col = 0; col < 10; col++) {
        System.out.printf(" %+05d", this.m[row*10+col]);
      }
      System.out.print("\n");
    }
  }
};
