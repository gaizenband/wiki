<template>
    <div class="container mt-5" id="page">
        <ProjectBar v-for="(project, index) in projectData" :key='index' :ProjectName='projectData[index].project' :id="projectData[index].id"></ProjectBar>       
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
    data: function() {
        return {
            projectID: 0,
            project: {},
        };
    },
    computed: {
      ...mapGetters(getters),
    },
}
</script>

