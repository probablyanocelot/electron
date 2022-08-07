subjects = ['Linux', 'Python', 'JavaScript', 'React', 'NodeJS', 'PyScript', 'ExpressJS', 'Vue',]
options = ['Principle(s)', 'Project',]


class RandomTask{
    constructor(subjects, options) {
        this.subjects = subjects;
        this.options = options;
        this.subject = this.subjects[Math.floor(Math.random() * this.subjects.length)];
        this.option = this.options[Math.floor(Math.random() * this.options.length)];
        this.taskQuantity = this.getTaskQuantity();
        this.task = this.getTask();
    
    }
    getTaskQuantity() {
        let taskQuantity = Math.floor(Math.random() * (10 - 1) + 1);
        console.log(taskQuantity);

        if (this.option === 'Project') {
            taskQuantity = 1
            console.log(taskQuantity);
        }
        return taskQuantity;
    }
    getTask() {
        let task = ` ${this.taskQuantity}x ${this.subject} ${this.option}`;
        console.log(task);
        return task
    }
}

const task = new RandomTask(subjects, options);

const taskElement = document.getElementById('task');
taskElement.innerHTML = task.task;
console.log(taskElement.innerHTML)