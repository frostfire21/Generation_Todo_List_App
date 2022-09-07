function render (taskManager) {
    let taskHtmlList = []
    taskManager.tasks.forEach(element => {
      let renderedTask = createTaskHtml (element.taskName, element.description, element.assignedTo, 'TBD', element.status)
       taskHtmlList.push (renderedTask)
    });
    console.log(taskHtmlList); // for testing
    let renderString = taskHtmlList.join('\n');
    let taskList = document.getElementById('taskList');
    console.log(taskList)
    taskList.innerHTML = renderString;
}


function createTaskHtml (name, description, assignedTo, dueDate='tbd', status) {
    const htmlListItem = ` <a href="#" class="list-group-item list-group-item-action">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${assignedTo}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${dueDate}</h6>
            <p class="card-text">${description}</p>
            <p class="card-text">${status}</p>
            <span class="badge text-bg-primary">In progress</span>
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
    </div>
</a>`
return htmlListItem
} 


class TaskManager{
    constructor(currentId = 0){
        this.currentId = currentId;

        this.tasks = [];
    }
    addTask (taskName, description, assignedTo, dueDate, status='TODO') {
        this.currentId++;
        
        let task = {
            id: this.currentId,
            taskName : taskName,
            description : description,
            assignedTo : assignedTo,
            dueDate : dueDate,
            status :'TODO'
        }

        this.tasks.push(task)
        render(this);
    }
}

 let manager = new TaskManager();
// manager2.addTask('wash dishes', 'dishes to be washed are in the sink', 'mike', 'sometime');
// manager2.addTask('clean  closet', 'clean closets', 'daria', 'sometime');
// manager2.addTask('mop floor', 'floor cleaning ', 'meron', 'sometime');
