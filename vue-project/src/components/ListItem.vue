<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      isExpanded: false,
    };
  },

  methods: {
    onClickDelete() {
      this.$emit("deleteItem", this.id);
    },
    onClickComplete() {
      this.$emit("completeItem", this.id);
    },
  },

  emits: ["deleteItem", "completeItem"],
});
</script>

<template>
  <li
    class="rounded-md border-black border-2 p-2"
    :class="{ 'bg-lime-400': isComplete }"
  >
    <div class="flex justify-between">
      <div class="text-xl font-bold">
        {{ title }}
      </div>
      <div class="flex gap-3">
        <button v-show="!isComplete" @click="onClickComplete">
          <font-awesome-icon icon="fa-solid fa-check" />
        </button>
        <button @click="onClickDelete">
          <font-awesome-icon icon="fa-solid fa-trash" />
        </button>

        <button
          @click="
            () => {
              isExpanded = !isExpanded;
            }
          "
        >
          {{ isExpanded ? "-" : "+" }}
        </button>
      </div>
    </div>
    <div v-show="isExpanded">
      {{ description }}
    </div>
  </li>
</template>

<style scoped></style>
