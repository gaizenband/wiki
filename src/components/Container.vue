<template>
    <div class="container mt-5" id="page">
        <LoadingSpinner v-if="loadingStatus"/>
        <ProjectBar v-for="(project, k) in projectData" v-bind:key="k" :project="project" @edit='editProject' @delete='deleteInfo'/>
        <EditProjectName v-if="editNamePopup" @close='closeNamePopup'/>
        <EditTopicWindow v-if="editTopicPopup" @close='closeTopicPopup'/>
    </div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner';
import EditProjectName from './EditProjectName';
import EditTopicWindow from './EditTopicWindow';
import ProjectBar from './ProjectBar';
import { mapGetters, mapActions } from 'vuex';

const getters = ['projectData','curProj','loadingStatus'];
const actions = ['updateProjectStore','changeCurProj','deleteTopic'];

export default {
    name: 'Container',
    components: {
        ProjectBar,
        EditProjectName,    
        EditTopicWindow,
        LoadingSpinner,
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
    mounted() {
        this.updateProjectStore(); 
    },
};
</script>

<style>
    .modal {
        display: block; 
        position: fixed; 
        z-index: 1;
        padding-top: 100px; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%;
        overflow: auto; 
        background-color: rgba(0,0,0,0.4); 
    }
</style>