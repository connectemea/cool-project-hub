import java.util.*;
class vowel
{
void removeVowel(String str)
{
System.out.println(str.replaceAll("[aeiouAEIOU]",""));
}
}
class vowelMain
{
public static void main(String args[])
{String str;
Scanner sc=new Scanner(System.in);
System.out.println("Enter the string");
str=sc.next();
vowel ob=new vowel();
ob.removeVowel(str);
}}