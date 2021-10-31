package Array;

//Question-Reverse the Array

public class Reverse_Array {

	public static void Reverse(int[] arr) {
		for(int i=arr.length-1;i>=0;i--) {
		System.out.println(arr[i]);
		}
		
	}
			
	
	public static void main(String[] args) {
		
		
		int[] arr= {1,2,3,4,5};
		Reverse(arr);
	
	

	}

}
