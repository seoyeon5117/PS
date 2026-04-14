class Solution {
    public int solution(int[][] dots) {
        
        int[][] pairs = {
            {0, 1, 2, 3},
            {0, 2, 1, 3},
            {0, 3, 1, 2}
        };
        
        for(int[] p : pairs) {
            if(isParallel(dots[p[0]], dots[p[1]], dots[p[2]], dots[p[3]])) {
                return 1;
            }
        }
        
        return 0;
    }
            
    private boolean isParallel(int d1[], int d2[], int d3[], int d4[]) {
        int dx = d1[0] - d2[0];
        int dy = d1[1] - d2[1];

        int lx = d3[0] - d4[0];
        int ly = d3[1] - d4[1];
        return (dx * ly) == (dy * lx);
    }
}