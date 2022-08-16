let task = JSON.parse(localStorage.getItem("task"));
task = task[0];
console.log(task)
let div = document.createElement('div');
div.className = "tasks2";
div.innerHTML = "<h1></h1> <p></p> <div class='tasks-dot2'></div>";
document.body.append(div);
// document.body.appendChild(div);

document.querySelector(".tasks2 h1").textContent = task.title;
document.querySelector(".tasks2 p").textContent = task.description;
let backgroundColor;
switch (task.category) {
    case "Work":
        backgroundColor = "dodgerblue";
        break;
    case "Personal":
        backgroundColor = "springgreen";
        break;
    case "Shoping":
        backgroundColor = "mediumvioletred";
        break;
    case "Healt":
        backgroundColor = "crimson";
        break;
    case "Other":
        backgroundColor = "purple";
        break;
}
document.querySelector(".tasks2 div").style.background = backgroundColor;

let time = task.time;
let hours = time.substr(0, 2);
let minutes = time.substr(3, 2);
minutes = (minutes / 60) * 100;
time = Number(hours + "." + minutes);
let styleTop = ((time - 8) * 2) * 45.5 + 358;
styleTop = styleTop + "px";

document.querySelector(".tasks2").style.top = styleTop;
// document.body.appendChild(div);
// div.style.color = "blue";
// document.getElementById("task1").style.color = "white";
