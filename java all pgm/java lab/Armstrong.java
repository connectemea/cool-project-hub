import java.util.Scanner;
public class Armstrong{
   public static void main(String args[]){
      int n1, n2;
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the first number ::");
      n1 = sc.nextInt();
      System.out.println("Enter the second number ::");
      n2 = sc.nextInt();

      for (int i = n1; i<n2; i++){
         int temp,rem, sum = 0;
         temp= i;
         while(temp != 0) {
            rem = temp % 10;
            sum = sum + (rem * rem * rem);
            temp = temp / 10;
         }
         if(sum == i){
            System.out.println(""+i+" is an Armstrong number.");
         }
      }
   }
}