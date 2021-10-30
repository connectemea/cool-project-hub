import java.util.*;
import java.io.*;

public class ArithmaticOperation
{
 public static void main(String[] args)
 {
  Scanner sc = new Scanner(System.in);
  int n1,n2,opt;
  System.out.println("enter 2 numbers");

  n1=Integer.parseInt(args[0]);
  n2=Integer.parseInt(args[1]);

  System.out.println("enter your choice \n1.sum \n2.difference \n3.product \n4.quotient \n5.remainder");
  opt=sc.nextInt();

  switch(opt)
  {
   case 1: System.out.println(n1+n2);
               break;
   case 2: System.out.println(n1-n2);
               break;
   case 3: System.out.println(n1*n2);
               break;
   case 4: System.out.println(n1/n2);
               break;
   case 5: System.out.println(n1%n2);
               break;
         default: System.out.println("invalid");
  }
 }
}