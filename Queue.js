
// Add tasks to queue

// Process tasks

let queue = [];

function addTask(task) {
    // Pushes task to the end
    queue.push(task);
}

function processTask() {
    if (queue.length === 0) {
        console.log("No tasks to process")
    }

    const task = queue.shift(); // remove first task
    console.log(`Processing task: ${task}`);
}

addTask('Send email');
addTask('Finish report');
addTask('Backup database');
console.log(queue);

processTask();
console.log(queue);
processTask();
console.log(queue);