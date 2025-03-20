const todoInput = document.getElementById("todo-input");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const addButton = document.getElementById("submit-button");
const todoContainer = document.getElementById("todo-container");
const deleteButton = document.querySelector("#deleteBtn");
const searchInput = document.querySelector("#searchInput");
const updateBtn = document.querySelector("#updateBtn");
const toUpdate = document.querySelector("#toUpdate");

let todoArray = [];
if (localStorage.getItem("todo")) {
    todoArray = JSON.parse(localStorage.getItem("todo"));
    displayTodo();
}
addButton.addEventListener("click", () => {
    addTodo();
});

todoContainer.addEventListener('click', (e)=>{
    if(e.target && e.target.type == 'checkbox' ){ 
    checkboxUpdaes(e.target)
    }
})

searchInput.addEventListener("keyup", () => {
    todoSearch();
});

function addTodo(box) {

    if (!todoInput.value) {
        alert("Please enter a todo item");
    } else {
        let todoObject = {
            item: todoInput.value,
            date: new Date().toLocaleString(),
            startTime:  convertTo12HourFormat(startTime.value),
            endTime:convertTo12HourFormat(endTime.value),
            checked : false
            
        };

        todoArray.unshift(todoObject);
        localStorage.setItem("todo", JSON.stringify(todoArray));
        displayTodo();
        todoInput.value = "";
    }
}

function convertTo12HourFormat(time) {
    let [hours, minutes] = time.split(":");
    let period = "AM";
    hours = parseInt(hours)
    if(hours >= 12){
        period = 'PM';
        if(hours >12){
            hours -=12;
        }
    }else if(hours === 0){
        hours = 12
    }
    if(hours == undefined){
        return 0
    }
    return `${hours}:${minutes} ${period}`
}

function displayTodo() {
    let container = "";
    
    for (let i = 0; i < todoArray.length; i++) {
        container += `  <div class="shadow my-2">
            <div   class="bg-white  w-100  border-1  justify-content-between d-flex align-items-center ">
                <div class="text  ">
                    <span class="fs-5">${todoArray[i].item}</span>
                </div>
                <div class=" w-50 d-flex justify-content-between  ">
                        <div class="date">${todoArray[i].date}</div>
                        
                        <div class="btns">
                            <i id="deleteBtn" class="myBtn fa-solid fa-trash-can px-2  cursor-pointer text-danger  " onclick="deleteTodo()"> </i>
                            <i id="toUpdate" class="myBtn fa-solid fa-pen-to-square px-2 cursor-pointer text-success "  onclick="edit(${i})"> </i>
                        </div>
                        </div>
                
            </div>
                <table class="table text-center table-dark" dir="rtl">
                <thead>
                    <tr>
                        <td>وقت البدء</td>
                        <td> وقت الانتهاء</td>
                        <td> تم الانتهاء</td>
                    </tr>
                </thead>
                <tbody>
                    <td class="text-white bg-info ">${todoArray[i].startTime == 'NaN:undefined AM' ? '00' : todoArray[i].startTime }</td>
                    <td class="text-white bg-danger">${todoArray[i].endTime == 'NaN:undefined AM' ? '00' : todoArray[i].endTime }</td>
                    ${!todoArray[i].checked  ? `<td><input id="checkBox"  data-index='${i}'  type="checkbox"></td>` : '<td><i  class="fa-solid fa-clipboard-check checked"></i></td>'}  
                </tbody>
            </table>
            </div>`;
    }

    
    !todoContainer? '' :todoContainer.innerHTML = container;
}

function deleteTodo(i) {
    todoArray.splice(i, 1);
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
    addButton.classList.replace("d-none", "d-block");
    updateBtn.classList.replace("d-block", "d-none");
}

function todoSearch() {
    let container = "";

    for (let i = 0; i < todoArray.length; i++) {
        if (
            todoArray[i].item.toLowerCase().includes(searchInput.value.toLowerCase())
        ) {
            container += ` <div class="shadow my-2">
            <div   class="bg-white  w-100  border-1  justify-content-between d-flex align-items-center ">
                <div class="text  ">
                    <span class="fs-5">${todoArray[i].item}</span>
                </div>
                <div class=" w-50 d-flex justify-content-between  ">
                        <div class="date">${todoArray[i].date}</div>
                        
                        <div class="btns">
                            <i id="deleteBtn" class="myBtn fa-solid fa-trash-can px-2  cursor-pointer text-danger  " onclick="deleteTodo()"> </i>
                            <i id="toUpdate" class="myBtn fa-solid fa-pen-to-square px-2 cursor-pointer text-success "  onclick="edit(${i})"> </i>
                        </div>
                        </div>
                
            </div>
                <table class="table text-center " dir="rtl">
                <thead>
                    <tr>
                        <td>وقت البدء</td>
                        <td> وقت الانتهاء</td>
                        <td> تم الانتهاء</td>
                    </tr>
                </thead>
                <tbody>
                    <td class="text-white bg-info ">${todoArray[i].startTime == 'NaN:undefined AM' ? '00' : todoArray[i].startTime }</td>
                    <td class="text-white bg-danger">${todoArray[i].endTime == 'NaN:undefined AM' ? '00' : todoArray[i].endTime }</td>
                    ${!todoArray[i].checked  ? `<td><input id="checkBox"  data-index='${i}'  type="checkbox"></td>` : '<td><i  class="fa-solid fa-clipboard-check checked"></i></td>'}  
                </tbody>
            </table>
            </div>`;
        }
        todoContainer.innerHTML = container;
    }
}

function edit(i) {
    addButton.classList.replace("d-block", "d-none");
    updateBtn.classList.replace("d-none", "d-block");
    todoInput.value = todoArray[i].item;
    localStorage.setItem("updatedIndex", JSON.stringify(i));
}

function updatedValue() {
    let index = JSON.parse(localStorage.getItem("updatedIndex"));
    todoArray[index].item = todoInput.value;
    todoArray[index].startTime = startTime.value;
    todoArray[index].endTime = endTime.value;
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
    todoInput.value = "";
    addButton.classList.replace("d-none", "d-block");
    updateBtn.classList.replace("d-block", "d-none");
}



function checkboxUpdaes(checkbox){  
let index= checkbox.getAttribute('data-index')
todoArray[index].checked = checkbox.checked
localStorage.setItem('todo', JSON.stringify(todoArray));

}



function prayers (){

}



















// console.log(date.getFullYear()); // السنة
// console.log(date.getMonth()); // الشهر (0-11)
// console.log(date.getDate()); // اليوم
// console.log(date.getDay()); // يوم الأسبوع (0 = الأحد)
// console.log(date.getHours()); // الساعة
// console.log(date.getMinutes()); // الدقائق
// console.log(date.getSeconds()); // الثواني
// console.log(date.getMilliseconds());

// console.log(new Date().toLocaleString());
