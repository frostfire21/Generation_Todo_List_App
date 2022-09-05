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