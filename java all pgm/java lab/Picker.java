import java.util.Scanner;
class Picker{
public static void main (String args[]){
Scanner scan=new Scanner(System.in);
System.out.print("Enter the number of elements in an array: ");
int min,max,secondLarge;
int n=scan.nextInt();//get input from user for array length
int arr[]=new int[n]; //declaring an array of n elements


for(int i=0; i<n; i++){
   System.out.print("Enter the element "+(i+1)+": ");
   arr[i]=scan.nextInt();//takes input from user for array
   }
   min=arr[0];
   max=arr[0];
   secondLarge=arr[0];
   for(int i=0; i<n; i++){
     if(min>arr[i]){
       min=arr[i];
     }
     
     if(max<arr[i]){
       max=arr[i]; 
       secondLarge=arr[n-2]; 
     }
   }
   System.out.print("\nThe smallest value is: "+min);
   System.out.print("\nThe largest value is: "+max);
   System.out.print("\nThe second largest value is: "+secondLarge);
}
}