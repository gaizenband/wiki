<template>
    <button class="card-body btn btn-primary p-3 float-right" style="width: 30%" @click="closeTopics()">Close</button>
</template>

<script>
export default {
    name: 'CloseButton',
    methods: {
        closeTopics(e) {
            this.$emit('closeTopics', e);
        },
    },
};
</script>