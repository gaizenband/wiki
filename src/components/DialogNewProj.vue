<template>
    <div class="modal" ref='modal'>
        <div class="modal-content">
            <span class="aclose" @click='closeWindow($event)' data-operation="close">&times;</span>
            <input type="text" v-model='projectName' @keyup.enter='save($event,projectName)' class='input' placeholder="Name of project" data-operation="save">
            <button @click='save($event,projectName)' class="btn btn-primary" data-operation="save">Go somewhere</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DialogNewProj',
    data: function() {
        return {
            projectName: '',
            projects: [],
            };
        },
    methods: {
      closeWindow(e) {
          this.$emit('close', e)
      },
      save(e, projectName) {
          this.$emit('save', e, projectName)
      }
  }
}
</script>

