<script setup lang="ts">
import TaskForm from "./components/TaskForm.vue";
import CompletedTasks from "./components/CompletedTasks.vue";
import PendingTasks from "./components/PendingTasks.vue";

import { useTasksStore } from "@/stores/tasks";
import type Task from "./interfaces/Task";
import { ref } from "vue";
import { storeToRefs } from "pinia";
const store = useTasksStore();
const { tasks } = storeToRefs(store);

const title = ref<string>("");
const description = ref<string>("");

const task = ref<Task>({
  id: 0,
  description: "",
  status: false,
  title: "",
});

const createTask = () => {
  if (title.value.trim() == "" && description.value.trim() == "") {
    alert("please enter title and description of the task");
    return;
  }

  if (task.value.id === 0) {
    task.value.id = Math.random();
  }
  task.value.title = title.value;
  task.value.description = description.value;
  store.addTask(task.value);
  resetForm();
};

const formEdit = (id: number) => {
  const _task = tasks.value.find((task) => task.id === id);
  if (_task) {
    task.value.id = _task.id;
    task.value.description = _task.description;
    task.value.title = _task.title;
    task.value.status = _task.status;
    title.value = _task.title;
    description.value = _task.description;
  }
};

const resetForm = () => {
  task.value = { id: 0, description: "", status: false, title: "" };
  title.value = "";
  description.value = "";
};
</script>

<template>
  <div class="h-screen w-full bg-tailwind-blue">
    <div
      class="absolute w-5/12 h-4/6 rounded-full top-5 right-28 -translate-y-64 -translate-x-32 bg-blue-600 blur-3xl bg-opacity-5"
    ></div>
    <TaskForm
      v-model:title="title"
      v-model:description="description"
      @createTask="createTask"
    />
    <CompletedTasks @edit="formEdit" />
    <PendingTasks @edit="formEdit" />
  </div>
</template>

<style scoped></style>
