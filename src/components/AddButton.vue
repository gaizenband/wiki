<template>
    <button class="card-body btn btn-primary" data-operation="open" @click='openWindow($event)'>Create Project</button>
</template>

<script>
export default {
  name: 'AddButton',
  methods: {
      openWindow(e) {
          this.$emit('open', e)
      }
  }
}
</script>

<style scoped>
    button{
        margin-top: 15px;
    }
</style>