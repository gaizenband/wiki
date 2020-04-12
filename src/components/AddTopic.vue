<template>
    <button class="card-body btn btn-primary p-3" style="width: 30%" @click="addTopic()">Add</button>
</template>

<script>
export default {
    name: 'AddTopic',
    methods: {
        addTopic() {
            this.$emit('addTopic');
        },
    },
};
</script>