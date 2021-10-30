import java.util.Scanner;

public class MergeArray{

    public static void main(String[] args) {

    
        int array1_size, array2_size;
         int arr1[], arr2[], result[];
         Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the size of the first array : ");   
        array1_size = scanner.nextInt();
        System.out.print("Enter the size of the second array : ");
        array2_size = scanner.nextInt();
        arr1 = new int[array1_size];
        arr2 = new int[array2_size];
        result = new int[array1_size + array2_size];

       System.out.println("Enter elements for the first array :");

        for (int i = 0; i < array1_size; i++) {
            System.out.println("Enter element " + (i + 1) + " : ");
            arr1[i] = scanner.nextInt();
        }

        System.out.println("Enter elements for the second array :");

        for (int i = 0; i < array2_size; i++) {
            System.out.println("Enter element " + (i + 1) + " : ");
            arr2[i] = scanner.nextInt();
        }

        for (int i = 0; i < array1_size + array2_size; i++) {
            //11
            if (i < array1_size) {
                result[i] = arr1[i];
            } else {
                result[i] = arr2[i - array1_size];
            }
        }

        System.out.println("Final array after merged : ");

        for (int i = 0; i < array1_size + array2_size; i++) {
            System.out.print(result[i] + " ");
        }
    }

}