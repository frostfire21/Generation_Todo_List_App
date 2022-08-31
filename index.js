console.log("test1");


function validFormFieldInput() {
    //Validating Task Name data
    let taskName = taskNameInput.value;
    if(taskName === ''){
        console.log('Please type valid task name.');
    }
    else{
        console.log('Your task name is: ' + taskName);
    }
    if(taskName.length > 60){
        console.log('Please enter a shorter task name.');
    }
    else{
        console.log('Your task name is an appropriate length');
    }
    //Validating Task Description data

    //Validating Task Assign To data

}
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", validFormFieldInput);
