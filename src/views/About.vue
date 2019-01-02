<template>
  
  <div class="about">
  <el-main>
    <div class="banner">
      <h1 class="title">About Us</h1>
    </div>
  </el-main>
  <div class="content">
    <h1>What's good. </h1>
    <p> I'm making a lifestyle change myself and ended up studying a lot on nutrition to do so. </p>
    <p> From that effort, I made this so other like minded individuals can more easily and factually lose weight and build a long lasting lifestyle</p>
    <p> Everything here is based of internationally accepted nutrition science. </p>
    <p> With this, you can free yourself fad diets, illogical advice, and any other speedbumps on your path to good health.</p>
    <p> Take care of your body, and enjoy more in life. FREE THE INDIVIDUAL ! </p>
    - Abhishek Chowdhury
    </div>
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";
import VueScrollTo from "vue-scrollto";
import {
  Button,
  Row,
  Col,
  Main,
  Steps,
  Step,
  Radio,
  InputNumber,
  Popover
} from "element-ui";

export default {
  name: "about",
  components: {
    Button,
    Row,
    Col,
    "el-main": Main,
    Parallax
  }
}
</script>

<style lang="scss">
  .about .el-main{
    background-image: url('../assets/last-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    height: 230px;
    
  }
  .banner{
    position: relative;
    height: 150px;
  }
  .title{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    color: #fff;
    letter-spacing: 0.9px;
  }
  .content{
    padding: 40px 0px;
  }
</style>
