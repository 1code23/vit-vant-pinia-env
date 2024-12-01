import { defineStore } from 'pinia';

// 方法一
// export const useTaskStore = defineStore('task', {
//   state: () => ({
//     tasks: [],
//     nextId: 1,
//   }),
//   actions: {
//     addTask(title) {
//       this.tasks.push({
//         id: this.nextId++,
//         title,
//         completed: false,
//       });
//     },
//     removeTask(id) {
//       this.tasks = this.tasks.filter(task => task.id !== id);
//     },
//     toggleTaskCompletion(id) {
//       const task = this.tasks.find(task => task.id === id);
//       if (task) {
//         task.completed = !task.completed;
//       }
//     },
//   },
// });

// 方法二
import { ref } from 'vue';

export const useTaskStore = defineStore('task', () => {
  // 定义响应式状态
  const tasks = ref([]);
  const nextId = ref(1);

  // 添加任务
  const addTask = (title) => {
    tasks.value.push({
      id: nextId.value++,
      title,
      completed: false,
    });
  };

  // 删除任务
  const removeTask = (id) => {
    tasks.value = tasks.value.filter(task => task.id !== id);
  };

  // 切换任务完成状态
  const toggleTaskCompletion = (id) => {
    const task = tasks.value.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  };

  // 返回状态和方法
  return {
    tasks,
    addTask,
    removeTask,
    toggleTaskCompletion,
  };
});
