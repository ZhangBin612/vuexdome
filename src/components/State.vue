<template>
    <div class="hello">
        {{this.$store.state.num}}
        <ul>
            <li v-for="(item,index) in this.$store.state.todo" :key="index">{{item}}</li>
            <h2>mapstate   使用数据</h2>
            <p>{{num}}</p>
        </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex' 
export default {
    computed:{
        ...mapState(['num'])  //获取全局的State 并且以计算属性的方式 输出到页面
    }
}
</script>
<style>
</style>