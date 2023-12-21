<template>
  <div
    class="w-4/12 p-5 mx-auto rounded-md bg-tailwind-blue shadow-2xl border-white"
  >
    <form @submit.prevent="submitForm">
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          placeholder="enter task title"
          :value="title"
          @input="emits('update:title', $event.target.value)"
          name="title"
          class="bg-tailwind-blue border border-gray-50 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <textarea
          rows="4"
          name="descripion"
          :value="description"
          @input="emits('update:description', $event.target.value)"
          class="block p-2.5 w-full text-sm text-gray-50 bg-tailwind-blue rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Describe your task here"
        ></textarea>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  description: string;
  title: string;
}>();

console.log(props);

const emits = defineEmits<{
  (e: "createTask"): void;
  (e: "update:title", value: string): void;
  (e: "update:description", value: string): void;
}>();

const submitForm = () => {
  emits("createTask");
};
</script>
<style scoped></style>
