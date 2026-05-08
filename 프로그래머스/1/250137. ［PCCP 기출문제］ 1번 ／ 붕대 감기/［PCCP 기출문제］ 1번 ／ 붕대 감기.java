class Solution {
    public int solution(int[] bandage, int health, int[][] attacks) {
        int time = 0; // 현재 시간
        int stamina = health;
        
        for(int[] attack:attacks) {
            int t = attack[0]; // 공격 시간
            int damage = attack[1]; // 피해량
            
            stamina += (t - time - 1) * bandage[1]; // 회복량
            stamina += Math.floor((t - time - 1) / bandage[0]) * bandage[2]; // 추가 회복량
            stamina = Math.min(health, stamina);
            
            time = t;
            stamina -= damage;
            
            if(stamina <= 0) {
                return -1;
            }
        }
        return stamina;
    }
}