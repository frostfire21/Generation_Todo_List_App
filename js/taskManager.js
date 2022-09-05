function render (taskManager) {
    let taskHtmlList = []
    taskManager.tasks.array.forEach(element => {
      let renderedTask = createTaskHtml (element.taskName, element.description, element.assignTo, dueDate, element.status)
       taskHtmlList.push (renderedTask)
    });
}


function createTaskHtml (name, description, assignedTo, dueDate='tbd', status) {
    const htmlListItem = ` <a href="#" class="list-group-item list-group-item-action">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${assignedTo}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${dueDate}</h6>
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
    }
}
let manager2 = new TaskManager();
manager2.addTask('wash dishes', 'dishes to be washed are in the sink', 'mike', 'sometime');
console.log(manager2.tasks);