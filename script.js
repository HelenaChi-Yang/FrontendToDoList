// 獲取 DOM 元素
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// 新增任務
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // 創建新的任務項目
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-button">Delete</button>
    `;

    // 點擊任務切換完成狀態
    taskItem.querySelector('span').addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    // 點擊刪除按鈕刪除任務
    taskItem.querySelector('.delete-button').addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    // 將任務加入列表
    taskList.appendChild(taskItem);
    taskInput.value = ''; // 清空輸入框
});
