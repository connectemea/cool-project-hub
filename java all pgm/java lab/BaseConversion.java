import java.util.Scanner;

 public class BaseConversion{
  public static void main(String[] args) {
 int in;
  Scanner sc = new Scanner(System.in);
  
 System.out.println("Enter Integer: ");

  in = sc.nextInt();
   
  //integer to binary
  String by = Integer.toBinaryString(in);
  System.out.println("Byte: " + by);
  //integer to hexadecimal
  String hex = Integer.toHexString(in);
  System.out.println("Hexa decimal: " + hex);
  //integer to octal
  String oct = Integer.toOctalString(in);
  System.out.println("Octal: " + oct);
  }
}