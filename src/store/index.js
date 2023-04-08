import { createStore } from 'vuex'

export default createStore({
  state: { //dados que já temos, ex: obj, array etc
    tasks: [],
    loading: false
  },
  getters: {
    unchecked(state) {
      return state.tasks.filter(task => task.checked === false);
    },

    checked(state) {
      return state.tasks.filter(task => task.checked === true);
    }
  },
  mutations: { //funções síncronas
    addTask(state, payload){
      state.tasks.push(payload)
    },

    setLoading(state, payload) {
      state.loading = payload
    },

    toggleTask(state, payload) {
      const index = state.tasks.findIndex(item => item.id === payload.id)
      if (index > -1){
        const checked = !state.tasks[index].checked;
        state.tasks[index].checked = checked;
      }
    },

    removeTask(state, payload) {
      const index = state.tasks.findIndex(item => item.id === payload.id)
      if (index > -1){
          state.tasks.splice(index, 1);
      }
    },

    toggleList(state, taskId) {
      const tasks = state.tasks.map(i => {
        return taskId.includes(i.id) ? { ...i, checked: !i.checked } : i;
      })

      state.tasks = tasks;
    },

    removeAll(state, taskId) {
      const tasks = state.tasks.filter( item => !taskId.includes(item.id));
      state.tasks = tasks;
    }

  },
  actions: { //Funções assíncronas (podem ser promises etc)
    addTask({ commit }, task) {
      commit ('setLoading', true)
      return new Promise (resolve => {
        setTimeout(() => {
          task.id = Date.now()
          commit('addTask', task)
          commit('setLoading', false)

          resolve(task)
        }, 500);
      })
    },

    toggleTask({commit}, task) {
      commit('toggleTask', task);
    },

    removeTask({commit}, task) {
      commit('removeTask', task);
    },

    checkAll({commit, state}) {
      const uncheckedId = state.tasks.filter(i => !i.checked).map(i => i.id);
      commit('toggleList', uncheckedId);
    },

    uncheckAll({commit, state}) {
      const checkedId = state.tasks.filter(i => i.checked).map(i => i.id);
      commit('toggleList', checkedId);
    },
    removeAll({commit, state}) {
      const checkedId = state.tasks.filter(i => i.checked).map(i => i.id);
      commit('removeAll', checkedId);
    }
  },
  modules: {
  },
})
