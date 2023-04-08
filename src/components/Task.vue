<template>
    <div class="tile flex-centured" :class="{ checked: task.checked }">
        <div class="tile-content">
            <div class="tile-subtitle">
                {{ task.description }}
            </div>
        </div>
        <div class="tile-action">
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
</style>