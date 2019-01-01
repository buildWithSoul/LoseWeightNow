<template>
  <div class="helloWorld-root">
  <div class="first-bg">
  <el-main> <Row class="heroContainer firstContainer">
    <Col :xs="24" :lg="12">
      <div class="hero">
        <h1 class="banner-text"> Resolving to <span class="bolder">lose weight </span> in 2019? </h1>
        <h3 class="banner-sub-text"> <span class="bolder">Great.</span> We are too. </h3>
        <p> We planned ours down to a science, and made it easier for you to do so too.
            If you tried to before, lost weight, and gained it back again, <a href="#" class="bolder" v-scroll-to="'#weGotYou'">  we can help with that. </a>
      </p>
        <Button v-on:click="redirect" class="btn" type="success" plain> Build your plan </Button>
        
      </div>
    </Col>
  </Row> </el-main> </div>
  <!--<parallax :parallax="true" sectionHeight="10" :speedFactor="0.70" >
    <img src="../assets/healthy.jpg" alt="very cool jpg">
  </parallax>-->

  <el-main> <Row class="heroContainer" id="weGotYou">
    <Col :xs="24" :lg="12">
      <div class="hero">
        <h1> You <span class="bolder">can </span> do it. </h1>
        <h3> Just stick to the right plan this time. </h3>
        <hr class="heroRow" />
        <div>
          Starvation diets are not designed to last. Give yourself a fair shot this time, and crush it.
          <p >
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br /><a href="#" v-scroll-to="'#welcomeIn'" Class="bolder"> Just need a good circle to stay motivated? </a>
          </p>
      </div>
      <Button v-on:click="redirect" class="btn" type="success" plain> Configure the right diet for you </Button>
      

      </div>
    </Col>
    <Col :xs="24" :lg="12">
      <div class="hero">
        <img src="../assets/before-after.jpg" alt="Before after">
      </div>
    </Col>
  </Row> </el-main>

  <!--<parallax :parallax="true" sectionHeight="10" :speedFactor="0.70">
    <img src="../assets/adventure.jpg" alt="very cool png">
    
  </parallax>-->
  <div class="last-bg">
  <el-main> <Row class="heroContainer" id="welcomeIn">
    <Col :xs="24" :lg="24">
      <div class="hero">
      <h1>  Ready to stick to that <span class="bolder">resolution? </span></h1>
      <hr class="heroRow dash" />
      <h3> <span class="bolder">Welcome </span> to our network. </h3>
      <div>
        <p>Once you have a plan ready, we can extend an invitation into a Slack group where we have support groups.</p>
    </div>

    <Button v-on:click="redirect" class="btn" type="success" plain> Let's get started! </Button>
  </div>
  </Col>
  </Row> </el-main></div>
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
p{
  text-align: left;
  font-size: 17px;
  line-height: 28px;
}
.first-bg{ 
	background-image: url('../assets/bg-image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
	}
.banner-text{
  font-size:60px;
  color: #fff;
  text-align: left;
}
.banner-sub-text{
    font-size: 40px;
    color: #fff;
    text-align: left;
}
.first-bg .hero p{
  color:#fff;
  text-align: left;
  font-size: 17px;
  line-height: 28px;
}

.firstContainer {
  margin: 2.15rem !important;
  padding: 20px 0px;
}
.heroContainer {
  margin: 4.2rem 2.15rem;
  .bolder {
    color: #67c23a;
    font-weight: 600;
    text-decoration: none;
  }
  .hero .btn{
    padding: 17px 33px;
    border-radius: 30px;
    border-color: #ffffff;
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 600;
    float: left;
    }
  .btn {
    margin-top: 2.15rem;
    
  }
  .btn:hover{
    border-color:#67c23a;
    transition: all 0.5s ease;
  }
  .PS-box {
    text-align: right;
    margin-top: 4.2rem;
  }
}
#weGotYou .hero h1{
      text-align: left;
    text-transform: capitalize;
    font-size: 38px;
}
#weGotYou .hero h3{
      text-align: left;
    text-transform: capitalize;
    font-size: 24px;
}
#weGotYou .hero .btn{
   
    font-weight: 600;
    background: #fff;
    float: left;
    border-color: #67c23a;
    margin-bottom: 20px;
    }
#weGotYou .hero img{
      box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.75);
}
    #weGotYou .hero .btn:hover{
        background: #67c23a;
    color: #fff;
    transition: all 0.5s ease;
    }
    .last-bg{ 
	background-image: url('../assets/last-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  background-position: center;
	}
  #welcomeIn h1{
    text-transform: capitalize;
    font-size: 38px;
    color: #fff
  }
  #welcomeIn h3{
    text-transform: capitalize;
    font-size: 30px;
    color: #fff
  }
  #welcomeIn p{
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
  .dash{
    max-width: 130px;
  }
  #welcomeIn .hero .btn{
    background: transparent;
    border-color: #fff;
    color: #fff;
    letter-spacing: 0.5px;
    text-align: center;
    float: none;
    }
    #welcomeIn .hero .btn:hover{
    background: #67c23a;
    border-color:#67c23a;
    color: #fff;
    transition: all 0.5s ease;
    }
</style>
