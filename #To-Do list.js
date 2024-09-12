// #To-Do list
let todo=[ ];
let req=prompt("Please enter your request")
while (true){
    if(req=="quit"){
        console.log("quitting to-do");
        break;
    }
    if(req=="list"){
        console.log("--------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
    }
    else if(req=="add"){
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req="delete"){
        let idx=prompt("Please enter task index")
        todo.splice(idx,1)
        console.log("task deleted")
    }
    req=prompt("Please enter your request")
}