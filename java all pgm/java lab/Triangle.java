    import java.util.*;
    class Triangle
    {
        public static void main(String args[])
        {
            Scanner sc=new Scanner(System.in);
            int a,b,c;
            System.out.println("Enter 3 sides:");
            a=sc.nextInt();
            b=sc.nextInt();
            c=sc.nextInt();
            int s=(a+b+c)/2;
            if(a<b+c && b<a+c && c<a+b)
            {
                if(a==b && b==c)
	{
	     System.out.println("Equilateral triangle");
	      double area=Math.sqrt(3)/4*a*a;
	      System.out.println("Area of Triangle is: " + area);
	}
                else if(a==b || b==c || c==a)
	 {
                    System.out.println("Isosceles triangle");
	     
                    double  area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
                   System.out.println("Area of Triangle is: " + area);
               }

	 else
	  {
                    System.out.println("Scalene triangle");
	     double  area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
                   System.out.println("Area of Triangle is: " + area);
	}
            }
            else
            System.out.println("Cannot form a triangle");

            
        }
    }
