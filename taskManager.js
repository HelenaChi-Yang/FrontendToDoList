const TaskManager = (function () {
    let taskList;

    function init(taskListElement) {
        taskList = taskListElement;
        loadTasks();
    }

    // 讀取 LocalStorage 中的任務列表
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(addTask);
    }

    // 將任務儲存到 LocalStorage
    function saveTasks() {
        const tasks = [...taskList.querySelectorAll('li')].map(task => ({
            text: task.querySelector('span').textContent,
            completed: task.classList.contains('completed')
        }));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // add task
    function addTask(task){
        // 創建新的任務項目
        const taskItem = document.createElement('li');
        taskItem.className = task.completed ? 'task-item completed' : 'task-item';
        taskItem.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-button">Delete</button>
        `;

        // 點擊任務切換完成狀態
        taskItem.querySelector('span').addEventListener('click', function() {
            taskItem.classList.toggle('completed');
            saveTasks();
        });

        // 點擊刪除按鈕刪除任務
        taskItem.querySelector('.delete-button').addEventListener('click', function() {
            taskList.removeChild(taskItem);
            saveTasks();
        });

        // 將任務加入列表
        taskList.appendChild(taskItem);
        saveTasks();
    }

    // 對外公開的 API
    return {
        init,
        addTask,
    };
})();

export default TaskManager;