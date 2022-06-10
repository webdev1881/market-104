<template>
  <div>
    <button
      @click="toggleAccordion()"
      class="flex"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
      >
      <slot name="title" />
      <svg
        class="w-3 transition-all duration-100 transform"
        :class="{
          'rotate-180': isOpen,
          'rotate-0': !isOpen,
        }"
        color="#111827"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="2 0 12 10"
        aria-hidden="true"
      >
        <path
          d="M15 1.2l-7 7-7-7"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <div class="content" v-show="isOpen" :id="`collapse${_uid}`">
      <slot name="content"  />
    </div>
  </div>
</template>

<script>
export default {
  name: "m-accordion",
  data() {
    return {
      isOpen: true,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang='scss' scoped>

.flex {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #3e77aa;
  // border: 1px solid red;
}

.content {
  // border: 1px solid red;
}


</style>