function solution(s) {
    const arr = s.split(" ");
    let string = "";
    
    for(let j = 0 ; j < arr.length ; j++) {
        const alph = arr[j].split("");
        for(let i = 0 ; i < alph.length ; i++) {
            if(i % 2 === 0) string += alph[i].toUpperCase();
            else string += alph[i].toLowerCase();
        }
        if(j < arr.length - 1) string += " ";
    }
    
    return string;
}