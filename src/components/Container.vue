<template>
    <div class="container mt-5" id="page">
        <ProjectBar v-for="(project, k) in projectData" v-bind:key="k" :project="project"></ProjectBar>
        <DialogNewProj />       
    </div>
</template>

<script>
import DialogNewProj from './DialogNewProj';
import ProjectBar from './ProjectBar';
import { mapGetters } from 'vuex';

const getters = ['projectData'];

export default {
  name: 'Container',
    components: {
        DialogNewProj,
        ProjectBar
    },
    computed: {
      ...mapGetters(getters),
    },
}
</script>

