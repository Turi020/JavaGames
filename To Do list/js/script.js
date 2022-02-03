//JSON javascript object notation
const tasks = [];
console.log(tasks);


printTaskList();


document.getElementById("addTask").addEventListener("click", function() {;
    addTask();
});

function addTask() {
    let taskName = document.getElementById("txtNewTask").value;
    let taskResponsible = document.getElementById("txtResponsible").value;
    let newTask = { name: taskName, responsible: taskResponsible, isDone: false };
    tasks.push(newTask);
    printTaskList();
}

function printTaskList() {
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}

function getHTMLTasks() {
    let html = "";
    let index = 0;


    tasks.forEach(element => {
        let checked = "";
        if (element.isDone) {
            checked = "checked";
        }
        html += "<li><input name= 'checkbox' data-index=' type='checkbox'" + checked + "/>" + element.name + "-" + element.responsible + index + "</li>";
        index++;

    });
    return html;

}