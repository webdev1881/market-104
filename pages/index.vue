<template>

  <div class="">

    <h4>main layout</h4>
    <div class=" flex flex-row justify-around gap-4 columns-3 ">
      123
        <div class=" text-primary-primary w-full p-1 border-solid border border-indigo-900 rounded-md bg-sky-600 hover:bg-sky-700">111</div>
        <div class=" w-full p-1 border-solid border border-green-900 rounded-md">222</div>
        <div class=" w-full p-1 border-solid border border-indigo-900 rounded-md">333</div>
        <div class=" w-full p-1 border-solid border border-indigo-900 rounded-md">444</div>
        <div class=" w-full p-1 border-solid border border-indigo-900 rounded-md">555</div>
        <div class=" w-full p-1 border-solid border border-indigo-900 rounded-md">666</div>
        <div class=" w-full p-1 border-solid border border-indigo-900 rounded-md">777</div>
        <button class="bg-primary-primary hover:primary-hover active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
          Save changes
        </button>
    </div>


  </div>

</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>

<style lang="scss" scoped>
h3 {
  color: $prim;
  height: 180px;
}
</style>
