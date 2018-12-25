<template>
  <div class="methods">
    <el-radio v-model="getMethod" v-on:change="$emit('chooseMethod', 1)" label="1" border>Option A</el-radio>
    <el-radio v-model="getMethod" v-on:change="$emit('chooseMethod', 2)" label="2" border>Option B</el-radio>
  </div>
</template>
<script>
import { Radio } from "element-ui";

export default {
  name: "CalculatorMethod",
  props: ["chosenMethod"],
  components: {
    radio: Radio
  },
  computed: {
    getMethod() {
      return this.$props.chosenMethod;
    }
  }
};
</script>
