<template>
  <div
    @dragover.prevent
    @drop="dropHandler"
    class="w-4/12 p-5 mx-auto rounded-md bg-tailwind-blue shadow-2xl mt-16 border border-gray-500"
  >
    <h1 class="text-gray-50">Completed Tasks</h1>
    <template v-for="task in tasks" :key="task.id">
      <TaskCard
        :id="task.id"
        :title="task.title"
        :description="task.description"
        v-if="task.status"
        @editaction="editaction"
      />
    </template>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTasksStore } from "../stores/tasks";
import TaskCard from "./TaskCard.vue";
const store = useTasksStore();
const dropHandler = (event: DragEvent) => {
  const prjId = event.dataTransfer!.getData("text/plain");
  store.moveTask(parseFloat(prjId));
};

const emits = defineEmits<{
  (e: "edit", taskId: number): void;
}>();
const { tasks } = storeToRefs(store);

const editaction = (id: number) => {
  emits("edit", id);
};
</script>
<style scoped></style>
