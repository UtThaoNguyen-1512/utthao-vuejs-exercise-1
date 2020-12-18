import { createStore } from 'vuex';

const storeTodoData = {
   state: {
      arrayTodo: [
         { id: 1, title: "task 1", complete: true , active:false},
         { id: 2, title: "task 22222222222222222222222222", complete: false , active:false},
         {id:3, title: "task 33333333333333333333333333333333333333333", complete: true, active:false},
         {id:4, title: "task 444444444444444444444444444444444444444444444", complete: true, active:false}
      ]
   },
   getters: {
      getTodo(state) {
         return state.arrayTodo
      }
   },
   actions: {
      editData({ commit }, data) {
         commit('currentData', data)
      }
   },
   mutations: {
      addTodos(state, item) {
         // state.arrayTodo.unshift({id: state.arrayTodo[3]++ , title: item, complete: false});
         state.arrayTodo.unshift(item)
         console.log(state.arrayTodo);
      },
      deleteTodos(state, id) {
         state.arrayTodo = state.arrayTodo.filter((todo) => todo.id != id);
      }  ,
      currentData(state, data) {

        state.arrayTodo.map(todo => {
      if (todo.id == data.id) {
         todo.title = data.title
           }
         // console.log(state.arrayTodo[data.id - 1])

   })
}
   }
}

const store = createStore(storeTodoData)
export default store
