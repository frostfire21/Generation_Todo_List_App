
function validFormFieldInput(event) {
    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;
    let assignTo = taskAssignToInput.value;

    //Input field validation boolean variables
    let taskNameValid = false;
    let taskDesciptionValid = false;
    let taskAssignedToValid = false;

     //Validating Task Name data
    if ( (taskName.trim()).length > 0 && (taskName.trim()).length < 60) {
        console.log('Task name is valid');
        taskNameValid = true;
    } else {
        console.log('Please enter a taskName of the 1 between 60 characters.');
    }

    //Validating Task Description data
    if ( (taskDescription.trim()).length > 0  && (taskDescription.trim()).length < 280 ) {
        console.log('Your task description is an appropriate');
        taskDesciptionValid = true;
    } else {
        console.log('Please enter a task description 1 between 280 characters.');
    }

    //Validating Task Assign To data
    if ( (assignTo.trim()).length > 0  && (assignTo.trim()).length < 60 ) {
        console.log('Your assigned person is an appropriate');
        taskAssignedToValid = true;
    } else {
        console.log('Please enter a assigned person\'s name should be 1 between 60 characters.');
    }

    //Checking validation variables
    if(taskNameValid && taskDesciptionValid && taskAssignedToValid){
        console.log('Form validated succcessfully!')
        let manager = new TaskManager();
        manager.addTask(taskName, taskDescription, assignTo, 'sometime');
        console.log(manager);
    }
    else{
        console.log('Form failed to validate');
    }
    event.preventDefault();
}
const form = document.getElementById('taskForm');
form.addEventListener("submit", validFormFieldInput);

