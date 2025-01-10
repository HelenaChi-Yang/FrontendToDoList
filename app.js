(function () {
    // 獲取 DOM 元素
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');

    // 初始化應用
    function init() {
        TaskManager.loadTasks();

        // 綁定新增任務事件
        addTaskButton.addEventListener('click', ()=>{
            const taskText = taskInput.value.trim();
            if(taskText){
                const task = {text: taskText, completed: false};
                TaskManager.addTask(task);
            }else{
                alert('Please enter a task!');
                return;
            }
        });
    }

    // 在 DOM 完全加載後執行初始化邏輯 避免出現找不到 DOM 元素的問題
    document.addEventListener("DOMContentLoaded", init);
})();
