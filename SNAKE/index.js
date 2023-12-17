console.log("hey!!!");

let canvas = document.getElementById("grid");
let context = canvas.getContext("2d");
let lose = false;

context.strokeStyle = "white";
for (let i = 0; i < canvas.width; i = i + 20) {
    for (let j = 0; j < canvas.height; j = j + 20) {
        context.strokeRect(j, i, 20, 20);
    }
}
context.fillStyle = "red";
class snake {
    x = -1;
    y = -1;
}

let tail = {
    x: -1,
    y: -1
}
let Head = {
    x: -1,
    y: -1
}

let food = {
    x: -1,
    y: -1
}

let H = new snake();
let Snake;
function initialize() {
    Snake = [];
    H = new snake();
    T = new snake();
    Snake = [];
    Snake.push(H);
    Snake.push(T);
    Head.x = H.x;
    Head.y = H.y;
    tail.x = T.x;
    tail.y = T.y;
    H.x = Math.floor(Math.random() * 24) + 1;
    H.y = Math.floor(Math.random() * 24) + 1;
    T.x = H.x;
    T.y = H.y + 1
    insert();
}

initialize();
print();
//insert();

function print() {
    context.fillStyle = "red";
    for (let i = 0; i < Snake.length; i++) {
        context.fillRect(Snake[i].x * 20, Snake[i].y * 20, 20, 20);
    }
    context.fillStyle = "green";
    context.fillRect(food.x * 20, food.y * 20, 20, 20);
}
function moveRight() {
    if (Snake.length != 1) {
        let tail = Snake.pop();
        //===================================
        let tx = tail.x;
        let ty = tail.y;
        //===================================
        context.clearRect(tail.x * 20, tail.y * 20, 20, 20);
        context.strokeRect(tail.x * 20, tail.y * 20, 20, 20);
        Snake = Snake.reverse();
        let head = Snake.pop();
        context.clearRect(head.x * 20, head.y * 20, 20, 20);
        context.strokeRect(head.x * 20, head.y * 20, 20, 20);
        tail.x = (head.x + 1) == 25 ? 0 : head.x + 1;
        tail.y = head.y;
        Snake.push(head);
        Snake.push(tail);
        Snake = Snake.reverse();
        //=================================
        if (tail.x == food.x && tail.y == food.y) {
            console.log("eaten...");
            speed = speed - 1;
            let body = new snake();
            body.x = tx;
            body.y = ty;
            Snake.push(body);
            insert();
        }
        //==================================
        //============================================
        Head.x = tail.x;
        Head.y = tail.y;
        if(checkloose(Head.x,Head.y)){
            clearInterval(interval);
        }
        //============================================
    }
    else {
        Snake[0].x++;
    }
}

function checkloose(x,y){
    let counter = 0;
    for(let i = 0; i < Snake.length; i++){
        if(Snake[i].x == x && Snake[i].y == y){
            counter++;
            if(counter > 1){
                lose = true;
                return true;
            }
        }
    }
    return false;
}



function insert() {
    context.clearRect(food.x * 20, food.y * 20, 20, 20);
    context.strokeRect(food.x * 20, food.y * 20, 20, 20);
    let objx = -1;
    let objy = -1;
    do {
        objx = Math.floor(Math.random() * 24) + 1;
        objy = Math.floor(Math.random() * 24) + 1;
    }
    while (check(objx,objy));
    food.x = objx;
    food.y = objy;
}

function check(x,y){
    for (let i = 0; i < Snake.length; i++) {
        if (Snake[i].x == x && Snake[i].y == y) {
            return true;
        }
        return false;
    }
}

function moveLeft() {
    if (Snake.length != 1) {
        let tail = Snake.pop();
        //===================================
        let tx = tail.x;
        let ty = tail.y;
        //===================================
        context.clearRect(tail.x * 20, tail.y * 20, 20, 20);
        context.strokeRect(tail.x * 20, tail.y * 20, 20, 20);
        Snake = Snake.reverse();
        let head = Snake.pop();
        context.clearRect(head.x * 20, head.y * 20, 20, 20);
        context.strokeRect(head.x * 20, head.y * 20, 20, 20);
        tail.x = (head.x - 1) == -1 ? 24 : head.x - 1;
        tail.y = head.y;

        Snake.push(head);
        Snake.push(tail);
        Snake = Snake.reverse();
        //=================================
        if (tail.x == food.x && tail.y == food.y) {
            console.log("eaten...");
            speed = speed - 1;
            let body = new snake();
            body.x = tx;
            body.y = ty;
            Snake.push(body);
           insert();
        }
        //==================================
        //============================================
        Head.x = tail.x;
        Head.y = tail.y;
        if(checkloose(Head.x,Head.y)){
            clearInterval(interval);
        }
        //============================================
    }
    else {
        Snake[0].x++;
    }
}
function moveDown() {
    if (Snake.length != 1) {
        let tail = Snake.pop();
        //===================================
        let tx = tail.x;
        let ty = tail.y;
        //===================================
        context.clearRect(tail.x * 20, tail.y * 20, 20, 20);
        context.strokeRect(tail.x * 20, tail.y * 20, 20, 20);
        Snake = Snake.reverse();
        let head = Snake.pop();
        context.clearRect(head.x * 20, head.y * 20, 20, 20);
        context.strokeRect(head.x * 20, head.y * 20, 20, 20);
        tail.y = (head.y + 1) == 25 ? 0 : head.y + 1;
        tail.x = head.x;
        Snake.push(head);
        Snake.push(tail);
        Snake = Snake.reverse();
        //=================================
        if (tail.x == food.x && tail.y == food.y) {
            console.log("eaten...");
            speed = speed - 1;
            let body = new snake();
            body.x = tx;
            body.y = ty;
            Snake.push(body);
           insert();
        }
        //==================================
        //============================================
        Head.x = tail.x;
        Head.y = tail.y;
        if(checkloose(Head.x,Head.y)){
            clearInterval(interval);
        }
        //============================================
    }
    else {
        Snake[0].x++;
    }
}
function moveUp() {
    if (Snake.length != 1) {
        let tail = Snake.pop();
        //===================================
        let tx = tail.x;
        let ty = tail.y;
        //===================================
        context.clearRect(tail.x * 20, tail.y * 20, 20, 20);
        context.strokeRect(tail.x * 20, tail.y * 20, 20, 20);
        Snake = Snake.reverse();
        let head = Snake.pop();
        context.clearRect(head.x * 20, head.y * 20, 20, 20);
        context.strokeRect(head.x * 20, head.y * 20, 20, 20);
        tail.y = (head.y - 1) == -1 ? 24 : head.y - 1;
        tail.x = head.x;
        Snake.push(head);
        Snake.push(tail);
        Snake = Snake.reverse();
        //=================================
        if (tail.x == food.x && tail.y == food.y) {
            console.log("eaten...");
            speed = speed - 1;
            let body = new snake();
            body.x = tx;
            body.y = ty;
            Snake.push(body);
           insert();
        }
        //==================================
        //============================================
        Head.x = tail.x;
        Head.y = tail.y;
        if(checkloose(Head.x,Head.y)){
            clearInterval(interval);
        }
        //============================================
    }
    else {
        Snake[0].x++;
    }
}
let dir = "";
let interval;
let start = true;

window.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key == "ArrowUp" && dir != "s") {
        dir = "w";
    }
    else if (event.key == "ArrowDown" && dir != "w") {
        dir = "s";
    }
    else if (event.key == "ArrowLeft" && dir != "d") {
        dir = "a";
    }
    if (event.key == "ArrowRight" && dir != "a") {
        dir = "d";
    }
    if (start) {
        interval = doWork(dir);
        start = false;
    }
    else {
        clearInterval(interval);
        interval = doWork(dir);
    }

});

let speed = 50;

function doWork(str) {
    let id = setInterval(() => {
        switch (str) {
            case "w":
                moveUp();
                break;
            case "s":
                moveDown();
                break;
            case "a":
                moveLeft();
                break;
            case "d":
                moveRight();
                break;
        }
        print();
    }, speed);
    return id;
}
document.getElementById("grid").addEventListener("click", (event) => {
    if (lose) {
        for (let i = 0; i < Snake.length; i++) {
            context.clearRect(Snake[i].x * 20, Snake[i].y * 20, 20, 20);
            context.strokeRect(Snake[i].x * 20, Snake[i].y * 20, 20, 20);
        }
        initialize();
        print();
        dir = "";
        lose = false;
        speed = 50;
    }
});

let newArray = Snake.map((element)=>{
    return element;
});





