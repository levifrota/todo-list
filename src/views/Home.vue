<template>
  <div id="app">
    <div class="container grid-xs py-2">
      <form @submit.prevent="addtask(task)">    

        <div class="input-group">
          <input type="text" v-model="task.description" class="form-input"  placeholder=" Adicionar uma task">
          <button class="btn btn-success input-group-btn "><i class="icon icon-arrow-right"></i> Adicionar </button>
        </div>

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
          <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 4">Step 4</a>
          </li>
        </ul>
      </form>

      <div class="task-list">
        <TaskVue v-for="t in tasks" :key="t.id" @toggle="toggletask" @remove="removetask" :task="t" />
      </div>
    </div>
  </div>
</template>

<script>
  import TaskVue from '../components/Task'
  export default {
    name: 'App',
    components: {
      TaskVue
    },
    data() {
      return { 
        tasks: [], 
        task:  { 
          checked: false
        } 
      };
    },
    methods: {
      addtask(task) {
        if (task.description != undefined){
          task.id = Date.now();
          this.tasks.push(task);
          this.task = { checked: false };
        } else {
          console.log("Erro");
        }
      },
      toggletask(task) {
        const index = this.tasks.findIndex(item => item.id === task.id)
        if (index > -1){
          const checked = !this.tasks[index].checked;
          this.tasks[index].checked = checked;
        }
      },
      removetask(task) {
        const index = this.tasks.findIndex(item => item.id === task.id)
        if (index > -1){
            this.tasks.splice(index, 1);
         
        }
      }
    }
}
</script>

<style scoped>
    .task-list{
      padding-top: 2rem;
    }
</style>