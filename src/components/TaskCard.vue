<template>
  <div
    class="bg-tailwind-blue shadow-2xl p-5 mt-2 rounded-sm hover:border-r"
    draggable="true"
    @dragstart="dragStart"
    @drop="dropHandler"
  >
    <div class="flex justify-between">
      <div>
        <p class="text-lg font-bold text-gray-50">{{ props.title }}</p>
        <p class="text-gray-50">{{ props.description }}</p>
      </div>
      <div class="flex my-auto h-9">
        <img
          src="@/assets/delete.svg"
          class="w-8 bg-white rounded-lg mr-2 cursor-pointer"
          @click="removeTask(props.id)"
        />
        <img
          src="@/assets/edit.svg"
          class="w-8 bg-white rounded-lg p-1 cursor-pointer"
          @click="emits('editaction', props.id)"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTasksStore } from "../stores/tasks";

const { removeTask, editTask } = useTasksStore();

const props = defineProps<{
  title: string;
  description: string;
  id: number;
}>();

const dragStart = (ev: DragEvent) => {
  ev.dataTransfer?.setData("text/plain", props.id.toString());
  ev.dataTransfer!.effectAllowed = "move";
};

const emits = defineEmits<{
  (e: "editaction", taskId: number): void;
}>();

const dropHandler = () => {
  console.log("drop event");
};
</script>
<style scoped></style>
