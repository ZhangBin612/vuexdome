<template>
    <div class="hello">
        <h1>衍生属性的原生使用方式</h1>
        <p>todos的数量：{{getTodosCount}}</p>
        <p>todos的数量：{{this.$store.getters.TodosCount}}</p>

        <h2>使用语法糖mapGetters</h2>
        <p>todos的数量：{{TodosCount}}</p>
        <p>完成的todos数量：{{CompletedTodosCount}}</p>
        <p>根据iD获取的：{{getTodoByid(2)}}</p>
        <p>获取Num:{{getNum}}</p>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
        getTodoByid(){
            return this.$store.getters.getTodoByid
        },
        getTodosCount(){
            return this.$store.getters.TodosCount
        },
        ...mapGetters(['TodosCount','CompletedTodosCount',"getNum"])
    }
}
</script>
<style>
    
</style>