function solution(phone_book) {
    const map = new Map();
    
    for(let i = 0 ; i < phone_book.length ; i++) {
        map.set(phone_book[i], true);
    }
    
    for(const num of phone_book) {
        for(let j = 1 ; j < num.length ; j++) {
            if(map.has(num.slice(0, j))) {
                return false;
            }
        }
    }
    return true;
}