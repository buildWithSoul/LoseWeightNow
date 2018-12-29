<template>
  <div class="helloWorld-root">
  <el-main> <Row class="heroContainer firstContainer">
    <Col :xs="24" :lg="24">
      <div class="hero">
        <h1> Resolving to <span class="bolder">lose weight </span> in 2019? </h1>
        <hr class="heroRow" />
        <h3> <span class="bolder">Great.</span> We are too. </h3>
        <p> We planned ours down to a science, and made it easier for you to do so too.</p>
        <Button v-on:click="redirect" class="btn" type="success" plain> Build your plan </Button>
        <div class="PS-box">
        If you tried to before, lost weight, and gained it back again, <a href="#" class="bolder" v-scroll-to="'#weGotYou'">  we can help with that. </a>
      </div>
      </div>
    </Col>
  </Row> </el-main> 
  <parallax :parallax="true" sectionHeight="10" :speedFactor="0.70" >
    <img src="../assets/healthy.jpg" alt="very cool jpg">
  </parallax>

  <el-main> <Row class="heroContainer" id="weGotYou">
    <Col :xs="24" :lg="24">
      <div class="hero">
        <h1> You <span class="bolder">can </span> do it. </h1>
        <hr class="heroRow" />
        <h3> Just stick to the right plan this time. </h3>
        <div>
          Starvation diets are not designed to last. Give yourself a fair shot this time, and crush it.
      </div>
      <Button v-on:click="redirect" class="btn" type="success" plain> Configure the right diet for you </Button>
      <div class="PS-box">
       <a href="#" v-scroll-to="'#welcomeIn'"> Just need a good circle to stay motivated? </a>
    </div>

      </div>
    </Col>
  </Row> </el-main>

  <parallax :parallax="true" sectionHeight="10" :speedFactor="0.70">
    <img src="../assets/adventure.jpg" alt="very cool png">
  </parallax>

  <el-main> <Row class="heroContainer" id="welcomeIn">
    <Col :xs="24" :lg="24">
      <div class="hero">
      <h1>  Ready to stick to that resolution? </h1>
      <hr class="heroRow" />
      <h3> <span class="bolder">Welcome </span> to our network. </h3>
      <div>
        Once you have a plan ready, we can extend an invitation into a Slack group where we have support groups.
    </div>

    <Button v-on:click="redirect" class="btn" type="success" plain> Let's get started! </Button>
  </div>
  </Col>
  </Row> </el-main>
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
    Col,
    "el-main": Main,
    Parallax
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.firstContainer {
  margin: 2.15rem !important;
}
.heroContainer {
  margin: 4.2rem 2.15rem;
  .bolder {
    color: #67c23a;
  }
  .heroRow {
    max-width: 42rem;
  }

  .btn {
    margin-top: 2.15rem;
  }
  .PS-box {
    text-align: right;
    margin-top: 4.2rem;
  }
}
</style>
