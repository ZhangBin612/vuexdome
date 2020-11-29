<template>
    <div class="hello">
        <h2>异步获取服务器数据</h2>
        <button @click="getTodos">加载数据</button>
        <ul>
            <li v-for="item in todo" :key=item.id>{{item.title ? item.title : item.con}}</li>
        </ul>
        <!-- {{todo}} -->
    </div>
</template>
<script>
import {mapActions, mapState} from "vuex"
export default {
    computed:{
        ...mapState(["todo"])
    },
    methods:{
        ...mapActions(['getTodos'])
        // loadTodos(){
        //     this.$store.dispatch("getTodos")
        // }
    }
}
</script>
<style>
    
</style>