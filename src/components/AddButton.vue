<template>
    <button class="btn btn-success" data-operation="open" @click='openWindow($event)'>Create Project</button>
</template>

<script>
export default {
    name: 'AddButton',
    methods: {
        openWindow(e) {
            this.$emit('open', e);
        },
    },
};
</script>
