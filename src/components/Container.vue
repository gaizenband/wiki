<template>
    <div class="container mt-5" id="page">
        <ProjectBar v-for="(project, k) in projectData" v-bind:key="k" :project="project" @edit='editProject'/>
        <DialogNewProj/>
        <EditProjectName/>
        <EditTopicWindow/>
    </div>
</template>

<script>
import EditProjectName from './EditProjectName';
import EditTopicWindow from './EditTopicWindow';
import DialogNewProj from './DialogNewProj';
import ProjectBar from './ProjectBar';
import { mapGetters, mapActions } from 'vuex';

const getters = ['projectData','curProj'];
const actions = ['changeCurProj'];

export default {
    name: 'Container',
    components: {
        DialogNewProj,
        ProjectBar,
        EditProjectName,    
        EditTopicWindow,
    },
    computed: {
        ...mapGetters(getters),
    },
    methods: {
        ...mapActions(actions),
        editProject(id, name) {
            if (!name) {
                const editWindow = document.querySelector('.modal-edit-title');
                editWindow.style.display = 'block';
                
                this.changeCurProj(id);
            } else {
                const editWindow = document.querySelector('.topicEdit');
                editWindow.style.display = 'block';

                this.changeCurProj({id: id, name: name});
            }
        },
    },
};
</script>

<style>
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
</style>