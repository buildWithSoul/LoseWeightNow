<template>
  <el-container style="">
    <HelloWorld />
</el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { LayoutContainer } from "element-ui";

export default {
  name: "home",
  components: {
    HelloWorld,
    "el-container": LayoutContainer
  }
};
</script>
