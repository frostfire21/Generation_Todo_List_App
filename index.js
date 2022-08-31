console.log("test1");


function validFormFieldInput() {
    //Validating Task Name data
    let taskName = taskNameInput.value;
    if (taskName === '') {
        console.log('Please type valid task name.');
    } else {
        console.log('Your task name is: ' + taskName);
    }
    if (taskName.length > 60) {
        console.log('Please enter a shorter task name.');
    } else {
        console.log('Your task name is an appropriate length');
    }
    //Validating Task Description data

    let taskDescription = taskDescriptionInput.value;

    if (taskDescription.length < 280 && taskDescription.length > 0) {
        console.log('Your task description is an appropriate');
    } else {
        console.log('Please enter a task description 0 between 280.');
    }

    //Validating Task Assign To data

}
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", validFormFieldInput);