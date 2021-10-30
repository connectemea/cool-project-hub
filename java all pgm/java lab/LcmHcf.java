import java.util.*;
 
class LcmHcf
{
 public static void main(String args[])
 {
     	int n1,n2;
     	int hcf,lcm,remainder,numerator,denominator;
 Scanner sc = new Scanner(System.in);
     	System.out.println("Enter two Numbers");
     	n1=sc.nextInt();
 n2=sc.nextInt();
     	if (n1>n2)
 { 
         numerator=n1;
         denominator=n2;
     }
     else
     {
       numerator=n2;
       denominator=n1;
     	}
     	remainder=numerator%denominator;
     while(remainder!=0)
     {
    	   numerator=denominator;
        denominator=remainder;
       remainder=numerator%denominator;
     }
     hcf = denominator;
     lcm = n1*n2/hcfjavac ;
     System.out.println("HCF of "+n1+" and "+n2+" = "+hcf);
     System.out.println("LCM of "+n1+" and "+n2+" = "+lcm);
 }
}