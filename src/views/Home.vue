<template>
  <div id="app">
    <div class="container grid-xs py-2">
      <form @submit.prevent="includeTask(task)">    

        <div class="input-group">
          <input type="text" v-model="task.description" class="form-input"  placeholder=" Adicionar uma task" :style="{'border': borderStyle}">
          <button class="btn btn-success input-group-btn" :class="{ loading }"><i class="icon icon-arrow-right"></i> Adicionar </button>
        </div>
          <p v-if="borderStyle === '1px solid red'" :style="{color: 'red'}">Erro</p>

        <ul class="step">
          <li class="step-item active">
            <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>
          </li>
          <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>
          </li>
          <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>
          </li>
        </ul>
      </form>

      <div class="task-list">
        <TaskVue v-for="t in tasks" :key="t.id" @toggle="toggleTask" @remove="removeTask" :task="t" />
      </div>
    </div>
  </div>
</template>

<script>
  import TaskVue from '../components/Task'
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'App',
    components: {
      TaskVue
    },
    data() {
      return { 
        task:  { 
          checked: false
        },
        borderStyle: '1px solid #000',
      };
    },
    computed: { //funções assíncronas
      ...mapState(['tasks', 'loading']),
      // tasks() {
      //   return this.$store.state.tasks;
      // },
      // loading() {
      //   return this.$store.state.loading;
      // }
    },
    methods: {
      ...mapActions(['addTask', 'toggleTask', 'removeTask']),

      async includeTask(task) {
        if (task.description != undefined){
          await this.addTask(task);
          this.task = { checked: false };
        } else {
          console.log("Erro");
          this.borderStyle = '1px solid red';
        }
      },
    }
}
</script>

<style scoped>
    .task-list{
      padding-top: 2rem;
    }
</style>