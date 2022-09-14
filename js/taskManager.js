function render(taskManager) {
    let taskHtmlList = []

    taskManager.tasks.forEach(element => {
        let formattedDate = new Date(element.dueDate).toLocaleDateString() ;
        let renderedTask = createTaskHtml(element.id, element.taskName, element.description, element.assignedTo, formattedDate, element.status)
        taskHtmlList.push(renderedTask)
    });
    console.log(taskHtmlList); // for testing
    let renderString = taskHtmlList.join('\n');
    let taskList = document.getElementById('taskList');
    console.log(taskList)
    taskList.innerHTML = renderString;
}


function createTaskHtml(id, name, description, assignedTo, dueDate = 'tbd', status) {
    const htmlListItem = ` <a href="#" class="list-group-item list-group-item-action">
    <div id=${id} class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${assignedTo}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${dueDate}</h6>
            <p class="card-text">${description}</p>
            <p class="card-text">${status}</p>
            <span class="badge text-bg-primary">In progress</span>
            <button type="button" class="btn btn-danger">Delete</button>
            <button type="button" class="done-button btn btn-success" class="">Mark As Done</button>
        </div>
    </div>
</a>`
    return htmlListItem
}



class TaskManager {
    constructor(currentId = 0) {
        this.currentId = currentId;

        this.tasks = [];
    }
    addTask(taskName, description, assignedTo, dueDate, status = 'TODO') {
        this.currentId++;

        let task = {
            id: this.currentId,
            taskName: taskName,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        }

        this.tasks.push(task)
        this.save();
        render(this);
    }
    getTaskById(taskId){
        let foundTask;
        for(let i=0; i < this.tasks.length; i++){
            if (this.tasks[i].id === taskId){
                foundTask=this.tasks[i];
            }
            else{
                //do nothing.
            }
        }
        return foundTask;
    }
    save(){
        let tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);
        let currentId = this.currentId.toString();
        localStorage.setItem('currentId', currentId);
    }
    load(){
        if(localStorage.getItem('tasks') != null){
            let tasksJson = localStorage.getItem('tasks');
            this.tasks = JSON.parse(tasksJson);
        }
        else{console.log('task is null')}
        
        if(localStorage.getItem('currentId') != null){
            let currentId = localStorage.getItem('currentId');
            this.currentId = Number(currentId);
        }
    }
}
let manager = new TaskManager();
manager.load();
render(manager);