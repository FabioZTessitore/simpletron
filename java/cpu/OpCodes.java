package cpu;

public class OpCodes {
  public static final int READ = 10;
  public static final int WRITE = 11;

  public static final int LOAD = 20;
  public static final int STORE = 21;

  public static final int ADD = 30;
  public static final int SUB = 31;
  public static final int DIV = 32;
  public static final int MUL = 33;
  public static final int REMAINDER = 34;
  public static final int IPOW = 35;

  public static final int BRANCH = 40;
  public static final int BRANCHNEG = 41;
  public static final int BRANCHZERO = 42;
  public static final int HALT = 43;
};
