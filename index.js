console.log("test1");


function validFormFieldInput() {
    //Validating Task Name data
    let taskName = taskNameInput.value;
 
    if ( (taskName.trim()).length > 0 && (taskName.trim()).length < 60) {
        console.log('Task name is valid');
    } else {
        console.log('Please enter a taskName of the 1 between 60 characters.');
    }
    //Validating Task Description data

    let taskDescription = taskDescriptionInput.value;

    if ( (taskDescription.trim()).length > 0  && (taskDescription.trim()).length < 280 ) {
        console.log('Your task description is an appropriate');
    } else {
        console.log('Please enter a task description 1 between 280 characters.');
    }

    //Validating Task Assign To data
    let assignTo = taskAssignToInput.value;

    if ( (assignTo.trim()).length > 0  && (assignTo.trim()).length < 60 ) {
        console.log('Your assigned person is an appropriate');
    } else {
        console.log('Please enter a assigned person\'s name should be 1 between 60 characters.');
    }
}
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", validFormFieldInput);