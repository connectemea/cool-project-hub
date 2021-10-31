import java.util.*;

class Fibonacci {
  public static void main(String[] args) {

    Scanner keyboard = new Scanner(System.in);

    int n , firstTerm = 0, secondTerm = 1;
    System.out.println("Enter th limit:");
    n=keyboard.nextInt();
        
    System.out.println("Fibonacci Series Upto " + n + ": ");
    
    while (firstTerm <= n) {
      System.out.print(firstTerm + ", ");

      int nextTerm = firstTerm + secondTerm;
      firstTerm = secondTerm;
      secondTerm = nextTerm;

    }
  }
}