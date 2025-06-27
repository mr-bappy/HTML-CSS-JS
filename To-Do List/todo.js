// function to get items from localStorage
const getToDoList = () => {
    return JSON.parse(localStorage.getItem('toDoList'));
}

// set taskArr from local storage before pushing tasks
let taskArr = getToDoList() || [];

// function to set items in localStorage
const setToDoList = (taskArr) => {
    return localStorage.setItem('toDoList', JSON.stringify(taskArr));
}

// getting DOM
const taskValue = document.querySelector('.taskValue');
const taskContainer = document.querySelector('.task-container');

// on click event handling
const taskAdd = () => {   
    // checking if the task is empty or containing only spaces or already added
    if(taskValue.value.trim() == ""){
        taskValue.value = "";
        return document.querySelector('.error-message').textContent = "*Task should not be empty*";
    } else if(taskArr.includes(taskValue.value.trim().toLowerCase())){
        taskValue.value = "";
        return document.querySelector('.error-message').textContent = "*Cannot add same task again*";
    } else{
        document.querySelector('.error-message').textContent = "";
        document.querySelector('.error-message').textContent = ""
    }

    // pushing task value in task array
    taskArr.push(taskValue.value.trim().toLowerCase() );
    console.log(taskArr);

    // element creation
    const li = document.createElement('li');
    const span = document.createElement('span');

    // inner content 
    li.innerHTML = taskValue.value.trim().toLowerCase() ;
    span.textContent = '\u00d7'; 
    
    // append child element
    taskContainer.appendChild(li);
    li.appendChild(span);

    // setting array of tasks in local storage
    setToDoList(taskArr);

    // empty input field
    taskValue.value = "";
}

// function to render items for added task
const renderData = () => {    
    for(let key of taskArr){
        // element creation
        const li = document.createElement('li');
        const span = document.createElement('span');

        // inner content 
        li.innerHTML = key
        span.textContent = '\u00d7'; 

        // append child element
        taskContainer.appendChild(li);
        li.appendChild(span);
    }
    console.log(taskArr);
}
renderData();

// event handling for complete task or remove task
taskContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        const removeTask = e.target.previousSibling.textContent;
        console.log(removeTask);
        taskArr = taskArr.filter(curTask => {
            return curTask !== removeTask;
        })
        setToDoList(taskArr);
        console.log(taskArr);
    }
})