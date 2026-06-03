function solution(wallpaper) {
    let x1 = 50, y1 = 50, x2 = 0, y2 = 0;
    for(let i = 0 ; i < wallpaper.length ; i++) {
        const grids = wallpaper[i].split("");
        for(let j = 0 ; j < grids.length ; j++) {
            if(grids[j] === "#") {
                x1 = Math.min(x1, i);
                y1 = Math.min(y1, j);
                x2 = Math.max(x2, i);
                y2 = Math.max(y2, j);
            }
        }
    }
    return [x1, y1, x2+1, y2+1];
}