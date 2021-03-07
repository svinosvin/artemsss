let inputTodo = document.querySelector("#inputTodo"),
    buttAddTodo = document.querySelector("#addTodo"),
    inputDate = document.querySelector("#date1"),
    div = document.querySelector("#todo-list"),
    clearBtn = document.getElementById("clearBtn");
    todoApp = [];


if (localStorage.getItem('todo')) {
    todoApp = JSON.parse(localStorage.getItem('todo'));
    createTodo();
}

clearBtn.addEventListener("click", () => {
    div.innerHTML = "";
    todoApp = [];
    localStorage.removeItem("todo");

})

function addEvent() {
   let trash = document.querySelectorAll(".trash");
    trash.forEach(function (item){
        item.addEventListener("click", function () {
            item.parentElement.remove();
            for (let i in todoApp) {
                if((item.id).indexOf(i.toString()) == 0 ) {
                    if (i == 0) {
                        todoApp.shift();
                    }
                    else {
                        todoApp.splice(i, 1);
                        
                    }
                }

            }
            localStorage.removeItem("todo");
            createTodo();
            addEvent();
            localStorage.setItem('todo', JSON.stringify(todoApp));
        })
    })


}

addEvent();
buttAddTodo.addEventListener("click", function () {  
  
    if (inputTodo.value == "" || inputDate.value == "") {
        alert("Данные заполнены некорректно")
        return 0;
    }
    else {
        let date = new Date(inputDate.value);
        let date1 = new Date(); 
        date1 = date1.getDate();
        if (date.getDate() - date1 < 0) {
            alert("Время вышло!")

        }
        let newTodo = {
            todo: inputTodo.value,
            checked: false,
            time: date.getDate()-date1
        }

        todoApp.push(newTodo);
        inputTodo.value = "";
        inputDate.value = "";
        createTodo();
        addEvent();
        localStorage.setItem('todo', JSON.stringify(todoApp));
    }
})

function createTodo() {
    let newTodo = ""
    todoApp.forEach(function (item, index) {

        newTodo += `
        <div class="item">
       <p>${item.todo}</p>
       <p>Осталось ${item.time} д. </p>
       <span class="trash" id="${index}_trashIndex"> <i class="icon-trash"></i> </span></div>`;
        div.innerHTML = newTodo;
    })}