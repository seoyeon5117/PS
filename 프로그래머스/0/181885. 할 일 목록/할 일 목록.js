function solution(todo_list, finished) {
    const todo = [];
    for(let i = 0 ; i < todo_list.length ; i++) {
        if(!finished[i]) todo.push(todo_list[i]);
    }
    return todo;
}