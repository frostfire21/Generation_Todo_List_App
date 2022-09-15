function validFormFieldInput(event) {
    let dueDate = document.getElementById('dateInput');
    let dateValue = dueDate.valueAsNumber;

    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;
    let assignTo = taskAssignToInput.value;

    //Input field validation boolean variables
    let taskNameValid = false;
    let taskDesciptionValid = false;
    let taskAssignedToValid = false;

    //Alert Array for for alerts to display
    let alertArray=[];

    //Validating Task Name data
    if ((taskName.trim()).length > 0 && (taskName.trim()).length < 60) {
        console.log('Task name is valid');
        taskNameValid = true;
    } else {
        alertArray.push(getTaskNameAlert());
    }

    //Validating Task Description data
    if ((taskDescription.trim()).length > 0 && (taskDescription.trim()).length < 280) {
        console.log('Your task description is an appropriate');
        taskDesciptionValid = true;
    } else {
        console.log('Please enter a task description 1 between 280 characters.');
        alertArray.push(getTaskDescAlert());
    }

    //Validating Task Assign To data
    if ((assignTo.trim()).length > 0 && (assignTo.trim()).length < 60) {
        taskAssignedToValid = true;
    } else {
        alertArray.push(getTaskAssignedToAlert());
    }
    //Displaying Alerts
    showAlerts(alertArray);

    //Checking validation variables
    if (taskNameValid && taskDesciptionValid && taskAssignedToValid) {
        console.log('Form validated succcessfully!')
        console.log('Date is:  ' + dateValue);
        manager.addTask(taskName, taskDescription, assignTo, dateValue);
        console.log(manager);
    } else {
        console.log('Form failed to validate');
    }
    event.preventDefault();
}
const form = document.getElementById('taskForm');
form.addEventListener("submit", validFormFieldInput);
submitBtn.addEventListener('click', (event) => {

});
const el = document.querySelector(".done-button");

let taskList = document.getElementById("taskList");

function showAlerts(htmlAlertArray){
    let alertHtmlString = htmlAlertArray.join('\n');
    let alertContainter = document.querySelector('.alertContainer');
    alertContainter.innerHTML = alertHtmlString;
}

function getTaskNameAlert(){
    let alertDiv = 
        `<div id="taskNameAlert" class="alert alert-danger alert-dismissable" role="alert"> 
            <span>Please enter a name for the task 1 between 1 and 60 characters.</span>
            <button class="btn-close" type="button" data-bs-dismiss="alert"><span aria-hidden="true"></span></button>
        </div>`;
        return alertDiv;
}
function getTaskDescAlert(){
    let alertDiv = 
        `<div id="taskDescAlert" class="alert alert-danger alert-dismissable" role="alert"> 
            <span>Please enter a task description between 1 and 280 characters.</span>
            <button class="btn-close" type="button" data-bs-dismiss="alert"><span aria-hidden="true"></span></button>
        </div>`;
        return alertDiv;
}
function getTaskAssignedToAlert(){
    let alertDiv = 
        `<div id="taskAssignedToAlert" class="alert alert-danger alert-dismissable" role="alert"> 
            <span>Please enter a assigned person\'s name etween 1 and 60 characters.</span>
            <button class="btn-close" type="button" data-bs-dismiss="alert"><span aria-hidden="true"></span></button>
        </div>`;
        return alertDiv;
}

taskList.addEventListener('click', (event) => {
    if(event.target.classList.contains("done-button")){
        let parentTask = event.target.parentElement.parentElement;
        
        let taskId = parseInt(parentTask.getAttribute("id"));
        let task = manager.getTaskById(taskId);
        task.status='DONE';
        manager.save();
        render(manager);
    }
});

taskList.addEventListener('click', (event) => {
    if(event.target.classList.contains("delete-button")){
        let parentTask = event.target.parentElement.parentElement;
        let taskId = parseInt(parentTask.getAttribute("id"));
        manager.deleteTask(taskId);
        manager.save();
        render(manager);
    }
})