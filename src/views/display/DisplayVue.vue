<template>
    <ul class="step">
        <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>
        </li>
        <li class="step-item active">
            <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>
        </li>
        <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>
        </li>
    </ul>

    <div class="container-board">
        <div class="columns">
            <div class="column col-4">
                <div class="panel">
                    <div class="panel-header">
                        <div class="panel-title">A ser feito</div>
                    </div>
                    <div class="panel-nav">

                    </div>
                    <div class="panel-body">
                        <TaskVue v-for="task in unchecked" :task="task" @toggle="toggleTask" @remove="removeTask" :key="task.id" />
                    </div>
                    <div class="panel-footer">
                        <button v-if="unchecked.length > 0" @click="checkAll" class="btn btn-success">
                            Concluir todas
                        </button>
                    </div>
                </div>
            </div>

            <div class="column col-4">
                <div class="panel">
                    <div class="panel-header">
                        <div class="panel-title">Concluído</div>
                    </div>
                    <div class="panel-nav">

                    </div>
                    <div class="panel-body">
                        <TaskVue v-for="task in checked" :task="task" @toggle="toggleTask" @remove="removeTask" :key="task.id" />

                    </div>
                    <div class="panel-footer">
                        <button v-if="checked.length > 0" @click="uncheckAll" class="btn btn-success">
                            Desmarcar todas
                        </button>
                        <button v-if="checked.length > 0" @click="removeAll" class="btn btn-error">
                            Remover todas
                        </button>
                    </div>
                </div>
            </div>

            <div class="column col-4">
                <div class="panel">
                    <div class="panel-header">
                        <div class="panel-title">Observações</div>
                    </div>
                    <div class="panel-nav">
                        <div class="input-group">
                            <input type="text" class="form-input" placeholder="Adicionar lembrete">
                            <button class="btn btn-success input-group-btn"><i class="icon icon-arrow-right"></i> Adicionar </button>
                        </div>
                    </div>
                    <div class="panel-body">
                        <!-- contents -->
                    </div>
                    <div class="panel-footer">

                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import TaskVue from "@/components/Task.vue"
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "DisplayVue",

    components: {
        TaskVue,
    },
    computed: {
        ...mapGetters(['unchecked', 'checked']),
    },
    methods: {
        ...mapActions(['removeTask', 'toggleTask', 'checkAll', 'uncheckAll', 'removeAll']),
    }
}
</script>

<style scoped>
.container-board {
    height: calc(100vh - 100px);
    padding: 15px;
    margin: 0 100px 0 100px;
}
.columns {
    height: 100%;
}
.columns .column .panel {
    height: 100%;
    border: 8px;
    box-shadow: 0 0.25rem 1rem rgba(63, 127, 191, 1);
}
.input-group{
    padding: 0 10px 0 10px;
}
</style>