const toDoList=document.querySelector(".toDoList");
const tasks=[];
const doneTasks=[];

function addTask(name_value){
    const taskWrapper=document.createElement("div");
    taskWrapper.classList.add("taskWrapper");
    const task=document.createElement("div");
    task.classList.add("task");
    const circle=document.createElement("button");
    circle.classList.add("circle");
    const name=document.createElement("div");
    name.classList.add("name");
    const sep=document.createElement("div");
    sep.classList.add("sep");

    name.innerHTML=name_value;

    circle.addEventListener("click",taskDone);

    task.appendChild(circle);
    task.appendChild(name);
    taskWrapper.appendChild(task);
    taskWrapper.appendChild(sep);

    tasks.push(taskWrapper);

    showTasks();
}

function getNameAndAddTask(){
    const popUp=document.createElement("form");
    popUp.classList.add("popUp");
    const label=document.createElement("label");
    label.innerHTML="Enter the task name :";
    const input=document.createElement("input");
    input.type="text";
    popUp.appendChild(label);
    popUp.appendChild(input);

    const body =document.querySelector("body");
    body.appendChild(popUp);
    
    popUp.addEventListener("submit",(e)=> closeAndAddtask(e,input.value))
}

function closeAndAddtask(e,taskName){
    e.preventDefault();
    e.target.remove();
    addTask(taskName);
    
}

function showTasks(){
    tasks.forEach((task) => toDoList.appendChild(task));
    doneTasks.forEach((task) => toDoList.appendChild(task));
}

function taskDone(e){
    const index=tasks.indexOf(e.target.parentElement.parentElement);
    doneTasks.push(tasks[index]);
    tasks.splice(index,1);
    const text=e.target.parentElement.childNodes[1];
    text.innerHTML=`<del>${text.innerHTML}</del>`;
    showTasks();
}

const addTaskButton=document.querySelector(".addTask");
addTaskButton.addEventListener("click",getNameAndAddTask);

