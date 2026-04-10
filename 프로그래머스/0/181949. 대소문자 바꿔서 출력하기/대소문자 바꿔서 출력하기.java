import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        char[] arr = str.toCharArray();
        
        for(int i = 0 ; i < str.length() ; i++) {
            if(Character.isUpperCase(arr[i])) {
                arr[i] = Character.toLowerCase(arr[i]);
            } else {
                arr[i] = Character.toUpperCase(arr[i]);
            }
        }
        
        System.out.println(new String(arr));
    }
}