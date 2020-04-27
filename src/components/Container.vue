<template>
    <div class="container mt-5" id="page">
        <ProjectBar v-for="(project, k) in projectData" v-bind:key="k" :project="project" @edit='editProject' @delete='deleteInfo'/>
        <EditProjectName v-if="editNamePopup" @close='closeNamePopup'/>
        <EditTopicWindow v-if="editTopicPopup" @close='closeTopicPopup'/>
    </div>
</template>

<script>
import EditProjectName from './EditProjectName';
import EditTopicWindow from './EditTopicWindow';
import ProjectBar from './ProjectBar';
import { mapGetters, mapActions } from 'vuex';

const getters = ['projectData','curProj'];
const actions = ['changeCurProj','deleteTopic'];

export default {
    name: 'Container',
    components: {
        ProjectBar,
        EditProjectName,    
        EditTopicWindow,
    },
    data: () => ({
        editNamePopup: false,
        editTopicPopup: false,
    }),
    computed: {
        ...mapGetters(getters),
    },
    methods: {
        ...mapActions(actions),
        editProject(id, name) {
            if (!name) {
                this.editNamePopup = true;           
                this.changeCurProj(id);
            } else {
                this.editTopicPopup = true;
                this.changeCurProj({id: id, name: name});
            }
        },
        deleteInfo(id, name) {
            this.deleteTopic({id: id, name: name});
        },
        closeNamePopup() {
            this.editNamePopup = false;
        },
        closeTopicPopup() {
            this.editTopicPopup = false;
        },
    },
};
</script>

<style>
    .modal {
        display: block; /* Hidden by default */
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