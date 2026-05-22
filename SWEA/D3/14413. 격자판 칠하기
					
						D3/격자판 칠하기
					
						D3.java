import java.util.Scanner;
//import java.io.FileInputStream;

class Solution
{
    public static void main(String args[]) throws Exception
    {
//        System.setIn(new FileInputStream("src/input.txt"));

		/*
		   표준입력 System.in 으로부터 스캐너를 만들어 데이터를 읽어옵니다.
		 */
        Scanner sc = new Scanner(System.in);
        int T;
        T=sc.nextInt();
		/*
		   여러 개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
		*/

        for(int test_case = 1; test_case <= T; test_case++)
        {
            int N = sc.nextInt();
            int M = sc.nextInt();
            sc.nextLine();
            boolean possible = true;
            boolean first = true;
            int white = 0;
            for(int i = 0; i < N; i++) {
                String line = sc.next();
                for(int j = 0; j < M; j++) {
                    String grid = Character.toString(line.charAt(j));
                    if(first) {
                        if(grid.equals("#")) {
                            white = (i + j + 1) % 2;
                            first = false;
                        } else if(grid.equals(".")) {
                            white = (i + j) % 2;
                            first = false;
                        }
                    } else {
                        if(grid.equals("#")) {
                            if((i + j) % 2 == white) {
                                possible = false;
                            }
                        } else if(grid.equals(".")) {
                            if((i + j) % 2 != white) {
                                possible = false;
                            }
                        }
                    }
                }
            }
            System.out.println("#" + test_case+ " " + (possible ? "possible" : "impossible"));
        }
    }
}