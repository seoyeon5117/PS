import java.util.Arrays;

class Solution {
    public int[][] solution(int[][] data, String ext, int val_ext, String sort_by) {
        int idx1 = 0;
        int idx2 = 0;
        
        if(ext.equals("code")) {
            idx1 = 0;
        } else if(ext.equals("date")) {
            idx1 = 1;
        } else if(ext.equals("maximum")) {
            idx1 = 2;
        } else {
            idx1 = 3;
        }
        
        if(sort_by.equals("code")) {
            idx2 = 0;
        } else if(sort_by.equals("date")) {
            idx2 = 1;
        } else if(sort_by.equals("maximum")) {
            idx2 = 2;
        } else {
            idx2 = 3;
        }
        
        final int extIdx = idx1;
        final int sortIdx = idx2;
        
        int[][] answer = Arrays.stream(data)
            .filter(row -> row[extIdx] < val_ext)
            .sorted((a, b) -> a[sortIdx] - b[sortIdx])
            .toArray(int[][]::new);
        
        return answer;
    }
}