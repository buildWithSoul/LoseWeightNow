<template>
  <div id="app">

    <Header></Header>

    <router-view/>

    <Footer></Footer>
    
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer   
  }    
}
</script>

<style lang="scss">
body{
  margin: 0px;
}
.container{
  max-width: 1200px;
  margin: 0 auto;
}
.menu {
  float: right;
  margin-top: 38px;
}
.logo{
  text-align: left;
  margin: 10px;
}
.green {
  color: #67c23a;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 0px 40px;
  border-bottom: 1px solid #ece8e8;
  box-shadow: 0px 6px 11px -4px rgba(0, 0, 0, 0.75);
      border-top: 4px solid #67c23a;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-size: 18px;
    letter-spacing: 0.3px;
    padding: 0px 10px;
    &.router-link-exact-active {
      color: #67c23a;
    }
  }
}
#footer{
  padding: 35px 20px;
  background: #2e8e48;
  color: #fff;
}
.header_section{
    border-bottom: 1px solid #ece8e8;
    -webkit-box-shadow: 0px 6px 11px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 6px 11px -10px rgba(0, 0, 0, 0.75); 
}
</style>
