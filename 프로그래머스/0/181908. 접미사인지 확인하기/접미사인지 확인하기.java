class Solution {
    public int solution(String my_string, String is_suffix) {
        String[] my_array = my_string.split("");
        String[] suffix = is_suffix.split("");
        
        int len1 = my_array.length - 1;
        int len2 = suffix.length - 1;
        
        if(len1 < len2) return 0;
        
        for(int i = 0 ; i < suffix.length ; i++) {
            if(!my_array[len1 - i].equals(suffix[len2 - i])) return 0;
        }
        
        return 1;
    }
}