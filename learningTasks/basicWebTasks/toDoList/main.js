const toDoList=document.querySelector(".toDoList");
const taskWrapper_copy=document.querySelector(".taskWrapper").cloneNode(true);

function addTask(){
    const name=prompt("Enter the task name");
    const taskWrapper=taskWrapper_copy.cloneNode(true);
    taskWrapper.childNodes[1].childNodes[3].innerHTML=name;
    toDoList.appendChild(taskWrapper)
}

function taskDone(e){
    e.parentElement.parentElement.remove();
}