<template>
    <div class="hello">
        <h2>修改数据</h2>
        <button @click="icrementNum">加一</button>
        <h2>num:{{this.$store.state.num}}</h2>

        <h2>修改数据  map方式实现减一</h2>
        <button @click="decrementNum">减一</button>
    </div>
</template>
<script>
import { mapState , mapMutations} from 'vuex'
export default {
    computed: {
        ...mapState(["num"])
    },
    methods:{
        icrementNum(){
            this.$store.commit("icrementNum")
        },
        ...mapMutations(["decrementNum"])
    }
}
</script
<style>
    
</style>