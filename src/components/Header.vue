<template>
    <div class="header_section">
        <el-container>
            <el-row>
                <el-col>
                    <div id="nav">                        
                        <el-col :xs="24" :lg="12" >
                            <div class="logo ">
                                <img src="../assets/demo-logo.png" alt="Before after">
                            </div>
                        </el-col>
                        <el-col :xs="24" :lg="12">
                            <div class="menu">
                                <router-link class="green" to="/">Weight Loss Year</router-link> |
                                <router-link class="green" to="/lose-weight-now">Plan Now</router-link> |
                                <router-link class="green" to="/about">About</router-link>
                            </div>
                        </el-col>
                    </div>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>

<script>
import { LayoutContainer } from "element-ui";
export default {
    name: "header",
    components: {    
    "el-container": LayoutContainer
  } 
}
</script>

<style>

</style>
      