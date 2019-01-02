<template>
    <div class="footer_section">
        <el-container>
            <el-row>
                <el-col :xs="24" :lg="24">
                    <div id="footer">                        
                        <div class="copywrite">
                            © Copyright 2019 Weight Loss Year. - All rights reserved.
                        </div>                        
                    </div>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>

<script>
import { LayoutContainer } from "element-ui";
export default {
    name: "footer",
    components: {    
    "el-container": LayoutContainer
  } 
}
</script>

<style>

</style>
      