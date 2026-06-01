function solution(park, routes) {
    const answer = [];
    const map = [];
    const sizeX = park.length;
    const sizeY = park[0].length;
    let curX, curY;
    for(let i = 0 ; i < park.length ; i++) {
        map.push(park[i].split(""));
    }
    
    for(let i = 0 ; i < map.length ; i++) {
        for(let j = 0 ; j < map[0].length ; j++) {
            if(map[i][j] === "S") {
                curX = i;
                curY = j;
                break;
            }
        }
    }
    
    for(let i = 0 ; i < routes.length ; i++) {
        let [op, n] = routes[i].split(" ");
        n = Number(n);
        let prevX = curX;
        let prevY = curY;
        
        if(op === "N") {
            if(curX - n >= 0) {
                while(n > 0) {
                    curX--;
                    n--;
                    if(park[curX][curY] === "X") {
                        curX = prevX;
                        break;
                    }
                }
            }
        } else if(op === "S") {
            if(curX + n < sizeX) {
                while(n > 0) {
                    curX++;
                    n--;
                    if(park[curX][curY] === "X") {
                        curX = prevX;
                        break;
                    }
                }
            }
        } else if(op === "W") {
            if(curY - n >= 0) {
                while(n > 0) {
                    curY--;
                    n--;
                    if(park[curX][curY] === "X") {
                        curY = prevY;
                        break;
                    }
                }
            }
        } else if(op === "E") {
            if(curY + n < sizeY) {
                while(n > 0) {
                    curY++;
                    n--;
                    if(park[curX][curY] === "X") {
                        curY = prevY;
                        break;
                    }
                }
            }
        }
    }
    
    return [curX, curY];
}