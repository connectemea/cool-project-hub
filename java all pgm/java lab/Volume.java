class Overload {

   double area(float l, float w, float h) {

       return l * w * h;

   }

   double area(float l) {

       return l * l * l;

   }

   double area(float r, float h) {

       return 3.1416 * r * r * h;

   }

}

public class Volume {

   public static void main(String args[]) {

       Overload overload = new Overload();

       double rectangleBox = overload.area(5, 8, 9);

       System.out.println("Area of ractangular box is " + rectangleBox);

       System.out.println("");

       double cube = overload.area(5);

       System.out.println("Area of cube is " + cube);

       System.out.println("");

       double cylinder = overload.area(6, 12);

       System.out.println("Area of cylinder is " + cylinder);

   }

} 