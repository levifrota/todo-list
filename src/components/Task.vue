<template>
    <div class="tile tile-centered" :class="{ checked: task.checked }">
        <div class="tile-content">
            <div class="tile-subtitle">
                {{ task.description }}
            </div>
        </div>
        <div>
            <button @click="$emit('toggle', task)" class="btn btn-primary">
                <span v-if="task.checked">Desmarcar</span>
                <span v-else>Check</span>
            </button>

            <button @click="$emit('remove', task)" class="btn btn-error">Remover</button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: "TaskVue",

    props: {
        task: { 
            type: Object,
            required: true
        }
    }
})
</script>

<style scoped>
    .checked {
        text-decoration: line-through;
        color: lightslategrey
    }
    .tile {
        margin-top: 1rem;
        padding: 20px;
        box-shadow: 0 0.25rem 1rem rgba(63, 127, 191, 1);

    }
    
</style>