let todoList = document.getElementById("list");
let input = document.getElementById("input-box");

function addTask() {
    let text = input.value.trim();
    if (text) {
        let li = document.createElement("li");
        li.innerHTML =

            `<div class="task">
               <div class="main-text">
                <input type="checkbox" class="done-checkbox">
                <span>${text}</span>
                </div>
                <div class="rght-part">
                <button class="delete-button"> <img src="trash.png" alt="Delete"width=20px></button>
                </div>
            </div>`;

            
        todoList.append(li);
        input.value = '';
    }
}

todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-checkbox')) {
        event.target.closest('li').classList.toggle('done');
    }
    if (event.target.closest('.delete-button')) {
        event.target.closest('li').remove();
    }
});
// event.target.classList.contains('delete-button')