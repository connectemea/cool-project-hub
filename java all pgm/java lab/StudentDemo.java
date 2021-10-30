import java.io.*;

import java.util.*;

class Student

{

   Scanner sc=new Scanner(System.in);

   int RegNo,Total=0,subjects;
   float Avg;
   String name;

   int marks[];

   Student()

   {

      System.out.print("Enter Registration No.: ");

      RegNo=sc.nextInt();

      System.out.print("Enter Student Name: ");

      name=sc.next();;

      getDisMarks();

   }

   public void getDisMarks()

   {

       marks=new int[5];

       System.out.print("Enter marks of Physics: ");

       marks[0]=sc.nextInt();

       System.out.print("Enter marks of Chemistry: ");

       marks[1]=sc.nextInt();

       System.out.print("Enter marks of Maths: ");

       marks[2]=sc.nextInt();
       System.out.print("Enter marks of  Englisgh: ");

       marks[3]=sc.nextInt();
      System.out.print("Enter marks of Language: ");

       marks[4]=sc.nextInt();

       for(int i=0;i<5;i++)

       {

          Total+=marks[i];
       }
       Avg = Total/5;
System.out.println("Student Name: "+name);
System.out.println("Register Number:"+RegNo);
       System.out.println("Total Marks of student "+name+": " +Total);
       System.out.println("Average of  "+name+": " +Avg);

   }

}

class StudentDemo

{

    public static void main(String args[])

    {

        Student student=new Student();

        

       
}
    

}