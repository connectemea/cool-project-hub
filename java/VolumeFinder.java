import java.util.*;
class shape
{
double v;
void volume(double a)
{
v=a*a*a;
System.out.println("The volume of cube is"+v);
}
void volume(double l,double b,double h)
{
v=l*b*h;
System.out.println("The volume of rectangular box is"+v);
}
void volume(double r,double h)
{
v=3.14*r*r*h;
System.out.println("The volume of cylinder is"+v);
}
}
class shapemain
{
public static void main(String args[])
{
double a,l,b,h,r;
shape ob=new shape();
Scanner sc=new Scanner(System.in);
System.out.println("The volume of cube is");
System.out.println("Enter the side of cube");
a=sc.nextInt();
ob.volume(a);
System.out.println("The volume of rectangular box");
System.out.println("Enter length,breadth and height of rectangular box");
l=sc.nextInt();
b=sc.nextInt();
h=sc.nextInt();
ob.volume(l,b,h);
System.out.println("The volume of cylinder is");
System.out.println("Enter radius and height of cylinder");
r=sc.nextInt();
h=sc.nextInt();
ob.volume(r,h);
}
}
