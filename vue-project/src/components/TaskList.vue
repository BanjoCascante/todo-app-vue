<script>
import ListItem from "./ListItem.vue";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      items: [],
      idCounter: 0,
      newTaskText: "",
      newTaskDescription: "",
    };
  },
  methods: {
    onClickAddTask() {
      this.items.push({
        id: this.idCounter + 1,
        title: this.newTaskText,
        description: this.newTaskDescription,
        isComplete: false,
      });

      this.newTaskText = "";
      this.newTaskDescription = "";
      this.idCounter++;
    },
    onDeleteItem(id) {
      this.items = this.items.filter((x) => x.id !== id);
    },

    onCompleteItem(id) {
      this.items = this.items.map((x) => ({
        ...x,
        isComplete: (!x.isComplete && x.id === id) || x.isComplete,
      }));
    },
  },

  computed: {
    isAddEnabled() {
      return this.newTaskText.length > 0 && this.newTaskDescription.length > 0;
    },
  },
});
</script>

<template>
  <div class="flex flex-col gap-4 align-center items-center mx-auto">
    <div class="text-xl font-bold">My awesome ToDo app</div>

    <div class="flex flex-col gap-2 mx-auto w-full items-center">
      <input
        v-model="newTaskText"
        placeholder="title"
        class="w-2/4 rounded-md border-black border-2 p-1"
      />
      <input
        v-model="newTaskDescription"
        placeholder="description"
        class="w-2/4 rounded-md border-black border-2 p-1"
      />
      <button
        @click="onClickAddTask"
        :disabled="!isAddEnabled"
        class="w-20"
        :class="{
          'bg-sky-700 text-slate-50': isAddEnabled,
          'bg-slate-200 text-gray-300': !isAddEnabled,
        }"
      >
        Add Task
      </button>
    </div>

    <div v-if="items.length === 0">No tasks available, add one!</div>
    <div v-else class="flex flex-col gap-2 w-full">
      <ul class="flex flex-col gap-2 w-full">
        <list-item
          v-for="item in items.filter((x) => x.isComplete === false)"
          :title="item.title"
          :id="item.id"
          :description="item.description"
          :isComplete="item.isComplete"
          @deleteItem="onDeleteItem"
          @completeItem="onCompleteItem"
        />
      </ul>

      <ul class="flex flex-col gap-2 w-full">
        <list-item
          v-for="item in items.filter((x) => x.isComplete)"
          :title="item.title"
          :id="item.id"
          :description="item.description"
          :isComplete="item.isComplete"
          @deleteItem="onDeleteItem"
          @completeItem="onCompleteItem"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
