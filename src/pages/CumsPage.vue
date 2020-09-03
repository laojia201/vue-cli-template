<template>
  <div class="right-content5">
    <component :is="$store.state.cumsShowContent"></component>
  </div>
</template>

<script>
import { setRandomBg } from "../assets/js/common";
import tabLists from "./cums/TabLists";
import editor from "./cums/Editor";

export default {
  name: "CumsPage",
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  created() {
    
  },
  components: {
    tabLists,
    editor
  }
};
</script>

<style scoped>
.right-content5 {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
}
</style>