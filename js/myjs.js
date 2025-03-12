    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('submit-button');
    const todoContainer = document.getElementById('todo-container');
    const deleteButton = document.querySelector('#deleteBtn');
    const searchInput = document.querySelector('#searchInput')
    const updateBtn = document.querySelector("#updateBtn")
    const toUpdate = document.querySelector("#toUpdate")
    
    let todoArray = [];  
    if(localStorage.getItem('todo')){
        todoArray = JSON.parse(localStorage.getItem('todo'));
        displayTodo();  
    }
    addButton.addEventListener('click',()=>{
        addTodo();
        
    });


    searchInput.addEventListener('keyup',()=>{
        todoSearch()
    })
    
    function addTodo() {
        let todoitem = todoInput.value;
        if(!todoitem){
            alert('Please enter a todo item')
        }
        else{
            let todoObject ={
                item : todoitem,
                date : new Date().toLocaleString()
            }
            todoArray.unshift(todoObject);
            localStorage.setItem('todo', JSON.stringify(todoArray));
            displayTodo();
            todoInput.value = ''; 

        }
    }

    

    function displayTodo() {
        let container = '';

        for (let i = 0; i < todoArray.length; i++) {
            container+= `                <div   class="bg-white  w-100 p-3 border-1 my-3 justify-content-between d-flex align-items-center shadow">
                    <div class="text w-50 ">
                        <span class="fs-5">${todoArray[i].item}</span>
                    </div>
    
                    <div class=" w-50 d-flex justify-content-between">
                                    <div class="date">${todoArray[i].date}</div>
                                    <div class="btns">

                                        <i id="deleteBtn" class="myBtn fa-solid fa-trash-can px-2 cursor-pointer text-danger fs-5" onclick="deleteTodo()"> </i>
                                        <i id="toUpdate" class="myBtn fa-solid fa-pen-to-square px-2 cursor-pointer text-success fs-5"  onclick="edit()"> </i>
                                    </div>
                    </div>
                </div>`
            
        }
        todoContainer.innerHTML = container;

    }


    function deleteTodo(i) {
        todoArray.splice(i,1);
        localStorage.setItem('todo', JSON.stringify(todoArray));
        displayTodo();
        
    }

    function todoSearch(){
        let container = ''

            for(let i =0 ; i < todoArray.length ; i++){
                if(todoArray[i].item.toLowerCase().includes(searchInput.value.toLowerCase())){
                    container += `<div   class="bg-white  w-100 p-3 border-1 my-3 justify-content-between d-flex align-items-center shadow">
                <div class="text">
                    <span class="fs-5">${todoArray[i].item}</span>
                </div>
                <div>
                    <i id="deleteBtn" class="myBtn fa-solid fa-trash-can px-2 cursor-pointer text-danger fs-5" onclick="deleteTodo(${i})"> </i>
                    <i class="myBtn fa-solid fa-pen-to-square px-2 cursor-pointer text-success fs-5" id="searchInput"  > </i>
                </div>
            </div>`
                    
                }

                todoContainer.innerHTML = container
            }
    }


    function edit(i){
        addButton.classList.replace('d-block','d-none')
        updateBtn.classList.replace('d-none','d-block')
        todoInput.value = todoArray[i].item
        localStorage.setItem('updatedIndex' , JSON.stringify(i))
        
    }

    function updatedValue(){
    let index =JSON.parse(localStorage.getItem('updatedIndex'));
    todoArray[index].item = todoInput.value;
    localStorage.setItem('todo',JSON.stringify(todoArray))
    displayTodo()
    todoInput.value = ''
    addButton.classList.replace('d-none','d-block')
    updateBtn.classList.replace('d-block','d-none')


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

