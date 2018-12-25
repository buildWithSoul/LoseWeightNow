<template>
  <Row class="hello">
    <Col :xs="24" :lg="24">
    <h1> Ready to make that resolution stick?</h1>

    <Button v-on:click="redirect"> Get FREE access to our Diet calculator </Button>
  </Col>
  </Row>
</template>

<script>
import {
  Button,
  Row,
  Col,
  Steps,
  Step,
  Radio,
  InputNumber,
  Popover
} from "element-ui";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    redirect() {
      this.$router.push("/lose-weight-now");
    }
  },
  components: {
    Button,
    Row,
    Col
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
