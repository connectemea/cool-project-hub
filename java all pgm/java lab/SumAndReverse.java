import java.util.Scanner;

class SumAndReverse {

    int n, rev = 0, r,sum= 0;
    Scanner sc = new Scanner(System.in);

    void input() {
        System.out.print("Enter a number:");
        n = sc.nextInt();
    }

    
    void sum() {
        System.out.println("Sum:" + sum);
    }

    void reverse() {
        while (n > 0) {
            r = n % 10;
            rev = rev * 10 + r;
            sum = sum + r;
            n = n / 10;
        }
        System.out.println("Reverse number:" + rev);
    }

    public static void main(String args[]) {
        SumAndReverse sumreverse = new SumAndReverse();
        sumreverse.input();
        sumreverse.reverse();
         sumreverse.sum();
    }
}