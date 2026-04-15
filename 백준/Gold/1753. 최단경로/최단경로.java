import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] parts = br.readLine().split(" ");
        int V = Integer.parseInt(parts[0]);
        int E = Integer.parseInt(parts[1]);
        int K = Integer.parseInt(br.readLine());

        ArrayList<int[]>[] graph = new ArrayList[V + 1];
        for(int i = 1 ; i <= V ; i++) {
            graph[i] = new ArrayList<>();
        }

        for(int i = 0 ; i < E ; i++) {
            String[] edge = br.readLine().split(" ");
            int u = Integer.parseInt(edge[0]);
            int v = Integer.parseInt(edge[1]);
            int w = Integer.parseInt(edge[2]);
            graph[u].add(new int[]{v, w});
        }

        int[] dist = new int[V+1]; // K에서 해당 정점까지의 거리
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[K] = 0; // K부터 K까지의 거리

        PriorityQueue<int[]> minPQ = new PriorityQueue<>((a, b) -> a[0] - b[0]); // 최소 힙 { 거리, 노드 }

        minPQ.offer(new int[]{0, K});

        while(!minPQ.isEmpty()) {
            int[] cur = minPQ.poll();
            int distance = cur[0];
            int node = cur[1];

            if(distance > dist[node]) continue;

            for(int[] next: graph[node]) {
                int v = next[0];
                int w = next[1];

                if(distance + w < dist[v]) {
                    dist[v] = distance + w;
                    minPQ.offer(new int[]{dist[v], v});
                }
            }
        }

        for(int i = 1 ; i <= V ; i++) {
            if(dist[i] == Integer.MAX_VALUE) {
                System.out.println("INF");
            } else {
                System.out.println(dist[i]);
            }
        }
    }
}