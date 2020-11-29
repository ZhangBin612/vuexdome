import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 10,
    todo: [
      { id: 1, completed: false, con: 'go to sleep' },
      { id: 2, completed: true, con: 'go to eat' },
      { id: 3, completed: false, con: 'go to run' },
      { id: 4, completed: true, con: 'go to waring' },
    ],
  },
  //衍生数据  在原始数据的基础上 经过一定的业务逻辑产生的新的数据
  getters: {
    TodosCount(state) {
      return state.todo.length
    },
    CompletedTodosCount(state) {
      return state.todo.filter((item) => {
          return item.completed?true:false
      }).length
    },
    // getNum(state){
    //   state.num = state.num+1
    // },
    getNum:state=>state.num+1,
    getTodoByid:state => id => state.todo.filter(item=>item.id == id)
  },
  mutations: {
    icrementNum(state){
      state.num = state.num+1
    },
    decrementNum(state){
      state.num = state.num-1
    },
    initTodos:(state,todo)=>{
      state.todo = todo
    }

  },
  actions: {
    getTodos({commit}){
      axios.get("http://jsonplaceholder.typicode.com/todos").then(res=>{
          const todo = res.data.splice(0,10)
          commit("initTodos",todo)
          console.log(todo)
      })
    }
  },
  modules: {

  },
})