<template>
    <div class="container mt-5" id="page">
        <ProjectBar v-for="(project, k) in projectData" v-bind:key="k" :project="project" @edit='editProject'></ProjectBar>
        <DialogNewProj /> 
        <EditProjectName :pName ='pName'/>
        <AddButton @open='dialogWindow($event)'/>
    </div>
</template>

<script>
import EditProjectName from './EditProjectName'
import AddButton from './AddButton';
import DialogNewProj from './DialogNewProj';
import ProjectBar from './ProjectBar';
import { mapGetters } from 'vuex';

const getters = ['projectData'];

export default {
  name: 'Container',
    components: {
        DialogNewProj,
        ProjectBar,
        AddButton,
        EditProjectName,    
    },
    computed: {
      ...mapGetters(getters),
    },
    props: ['pName'],
    methods: {
        dialogWindow() {
            const modal = document.querySelector('.modal');
                return modal.style.display = "block";
        },
        editProject(name, id) {
            const editWindow = document.querySelector('.modal');
            editWindow.style.display = 'block';
            // this.pName = name;
            this.projectData.find(x=>x.id === id).name;

            console.log(id);
            console.log(this.projectData.find(x=>x.id === id).name);
            
        },
    }
}
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