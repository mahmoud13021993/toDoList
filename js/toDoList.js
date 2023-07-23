let addTask = document.getElementById("addTask");
let addBtn = document.getElementById("addBtn");
let messageEmpty = document.getElementById("message-empty");
let taskList;
if (localStorage.getItem("task") === null) {
    taskList = [];
} else {
   taskList= JSON.parse(localStorage.getItem("task"));
   console.log(taskList)
}


addBtn.onclick=function() {
    if(taskValidation() === true) {
        let tasks = {
            task:addTask.value
        }
        taskList.push(tasks);
        localStorage.setItem("task" , JSON.stringify(taskList));
        display();
        reset();
    }
  
}
function taskValidation() {
    let rgex = /^[a-zA-Z0-9]$/
    let taskValidat = addTask.value;
    if(rgex.test(taskValidat)) {
        console.log("match")
        messageEmpty.innerHTML="";
        return true;
    }else {
        console.log("No match")
        messageEmpty.innerHTML= "please Enter Your Task !!"
        return false; 
    }
}
function display() {
    let trs = "";
    for(let i =0; i<taskList.length; i++) {
        trs += `
        <tr class="row mb-3">
        <td class="col-sm-12 col-md-10 col-lg-6 m-auto d-flex justify-content-around align-items-baseline py-2 px-4 bg-light rounded-pill position-relative"><p class="fw-bolder fs-4 fs-sm-5 m-0 p-0 ">${taskList[i].task}</p><div class="icon position-absolute end-0 p-2 px-4"><i class="fa-solid fa-trash-can " onclick="delteTask(${i})"></i></div></td>
      </tr>
        `
    }
    document.getElementById("tbody").innerHTML = trs;
}
display();

function delteTask(index) {
    taskList.splice(index,1);
    localStorage.setItem("task" , JSON.stringify(taskList));
    display()
}

function reset() {
    addTask.value = ""
}








