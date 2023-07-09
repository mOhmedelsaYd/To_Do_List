// // let input = document.querySelector(".input");
// // let submit = document.querySelector(".add");
// // let TasksDiv = document.querySelector(".tasks");
// // let arrayOfTasks = [];

// // // check if there tasks in local storage
// // if (window.localStorage.getItem("tasks")) {
// //     arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"));
// // }

// // // get tasks from local storage
// // getFromLocalStorage();
// // // add task
// // submit.onclick = function () {
// //     if (input.value !== "") {
// //         // add tasks to array
// //         addTasksToArray(input.value);
// //         input.value = "";
// //     }
// // }

// // function addTasksToArray(taskText) {
// //     const task = {
// //         id: Date.now(),
// //         title: taskText,
// //         completed : false,
// //     }
// //     arrayOfTasks.push(task);

// //     addElementsToPage(arrayOfTasks);

// //     addToLocalStorageFrom(arrayOfTasks);
// // }

// // function addElementsToPage(arrayOfTasks) {
// //     TasksDiv.innerHTML = "";
// //     // looping task of array
// //     arrayOfTasks.forEach((task) => {
// //         // create div
// //         let div = document.createElement("div");
// //         div.className = "task";
// //         if (task.completed) {
// //             div.className = "task done";
// //         }
// //         div.setAttribute("data-id", task.id);
// //         div.appendChild(document.createTextNode(task.title));

// //         // create delete button

// //         let span = document.createElement("span");
// //         span.className = "del";
// //         span.appendChild(document.createTextNode("Delete"));
// //         // append button to div
// //         div.appendChild(span);
// //         // append div array to tasks div
// //         TasksDiv.appendChild(div);


// //     });
// // }

// // function addToLocalStorageFrom(arrayOfTasks) {
// //     window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
// // }

// // function getFromLocalStorage() {
// //     let data = window.localStorage.getItem("tasks");
// //     if (data) {
// //         let tasks = JSON.parse(data);
// //         addElementsToPage(tasks);
// //     }
// // };




// let input = document.querySelector(".input");
// let sumbit = document.querySelector(".add");
// let tasksDiv = document.querySelector(".tasks");

// let arrayOfTasks = []
// if (window.localStorage.getItem("tasks")) {
//     arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"))
// }
// getFromLocalStorage();

// tasksDiv.addEventListener("click", (e) => {
//     if (e.target.classList.contains("del")) {
//         deleteFromLocalStorage(e.target.parentElement.getAttribute("data-id"))
//         e.target.parentElement.remove();
//     }
//     if (e.target.classList.contains("task")) {
//         toggleWithLocalStorage(e.target.getAttribute("data-id"));
//         e.target.classList.toggle("done");
//     }
// })
// sumbit.onclick = function () {
//     if (input.value !== "") {
//         addTasksToArray(input.value);
//         input.value = "";
        
//     }
// }


// function addTasksToArray(taskText) {
//     const task = {
//         id: Date.now(),
//         title: taskText,
//         completed: false,
//     }

//     arrayOfTasks.push(task);

//     // add elements to page

//     addELementsToPage(arrayOfTasks);

//     // add to local storage

//     addToLocalStorage(arrayOfTasks);

// }

// function addELementsToPage(arrayOfTasks) {
//     tasksDiv.innerHTML = "";
//     arrayOfTasks.forEach((task) => {
        
//     let div = document.createElement("div");
//     div.className = "task"
//     if (task.completed) {
//         div.className = "task done"
//     }
//     div.setAttribute("data-id", task.id);
//     div.appendChild(document.createTextNode(task.title));
//     let span = document.createElement("span");
//     span.className = "del";
//     span.appendChild(document.createTextNode("delete"));
//     div.appendChild(span);
//         tasksDiv.appendChild(div);
//         });
// }


// function addToLocalStorage(arrayOfTasks) {
//     window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
// }

// function getFromLocalStorage() {
//     let data = window.localStorage.getItem("tasks");
//     if (data) {
//         let tasks = JSON.parse(data);
//         addELementsToPage(tasks);
//     }
    
// }

// function deleteFromLocalStorage(taskid) {
    
//     arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskid)
//     addToLocalStorage(arrayOfTasks);
// }

// function toggleWithLocalStorage(taskid) {
// for (let i = 0; i < arrayOfTasks.length; i++) {
//     if (arrayOfTasks[i].id == taskid) {
//         arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
//         }
//     }
//     addToLocalStorage(arrayOfTasks);
// }

let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");


let arrayOfTasks = []
if (window.localStorage.getItem("task")) {
    arrayOfTasks = JSON.parse(window.localStorage.getItem("task"));
}
getFromLocalStorage();

tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        deleteWithLocalStorage(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("task")) {
        toggleWithLocalStorage(e.target.getAttribute("data-id"))
        e.target.classList.toggle("done")
    }
})
submit.onclick = function () {
    if (input.value !== "") {
        // add task to array
        addTasksToArray(input.value);
        input.value = "";
    }
}


function addTasksToArray(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false ,
    }

    arrayOfTasks.push(task);

    addElementsToPage(arrayOfTasks);

    addToLocalStorage(arrayOfTasks);
}


function addElementsToPage(arrayOfTasks) {
    tasksDiv.innerHTML = "";
    arrayOfTasks.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task";
        if (task.completed) {
            div.className = "task done";
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));

        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("delete"));
        div.appendChild(span);
        tasksDiv.appendChild(div);

    
    });
}

function addToLocalStorage(arrayOfTasks) {
    window.localStorage.setItem("task", JSON.stringify(arrayOfTasks));
}


function getFromLocalStorage() {
    let data = window.localStorage.getItem("task");
    if (data) {
        let tasks = JSON.parse(data);
        addElementsToPage(tasks);
    }
}


function deleteWithLocalStorage(taskid) {
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskid);
    addToLocalStorage(arrayOfTasks);
}


function toggleWithLocalStorage(taskid) {
    for (let i = 0; i < arrayOfTasks.length; i++){
        if (arrayOfTasks[i].id == taskid) {
            arrayOfTasks[i].completed == false ? arrayOfTasks[i].completed = true : arrayOfTasks[i].completed == false;
        }
    }
    addToLocalStorage(arrayOfTasks);
}