import type Task from "@/interfaces/Task";
import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as Task[],
  }),

  actions: {
    addTask(task: Task): void {
      const _task = this.tasks.find((_task) => _task.id == task.id);
      if (_task) {
        this.tasks = this.tasks.map((t) => {
          if (t.id == task.id) {
            t.title = task.title;
            t.description = task.description;
          }
          return t;
        });
      } else {
        this.tasks.push(task);
      }
    },
    removeTask(taskId: number): void {
      this.tasks = this.tasks.filter((task: Task) => {
        return task.id !== taskId;
      });
    },
    editTask(taskid: number) {
      return this.tasks.find((task) => task.id === taskid);
    },
    moveTask(taskid: number): void {
      const task = this.tasks.find((task) => task.id === taskid);
      if (task) {
        task.status = !task.status;
        if (task.status === true) {
          this.tasks = this.tasks.map((task) => {
            if (task.id === taskid) {
              task.status = true;
            }
            return task;
          });
        } else {
          this.tasks = this.tasks.map((task) => {
            if (task.id === taskid) {
              task.status = false;
            }
            return task;
          });
        }
      }
    },
  },
});
