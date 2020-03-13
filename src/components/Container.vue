<template>
    <div class="container mt-5" id="page">
        <ProjectBar v-for="(project, index) in projectData" :key='index' :ProjectName='projectData[index].project' :id="projectData[index].id"></ProjectBar>
        <AddButton @open='dialogWindow($event)'/>
        <DialogNewProj @close='dialogWindow($event)' @save='dialogWindow'/>       
    </div>
</template>

<script>
import AddButton from './AddButton';
import DialogNewProj from './DialogNewProj';
import ProjectBar from './ProjectBar';
import { mapActions, mapGetters } from 'vuex';

const actions = ['saveProject'];
const getters = ['projectData'];

export default {
  name: 'Container',
    components: {
        AddButton,
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
    methods: {
        ...mapActions(actions),
        dialogWindow(event, project) {  
            let vNode = this._vnode.children;

            const modal = vNode[vNode.length - 1].elm;
            const action = event.target.dataset.operation;

            switch (action) {
                case 'open':
                    return modal.style.display = "block";

                case 'close':
                    return modal.style.display = "none";
                
                case 'save':              
                    !project ? alert('Input project name') :
                    this.createElement(project);
                    return modal.style.display = "none";   
            }        
        },
        createElement: function (projName) {

            this.nameConstr(projName, this.project);
            let copyObj = Object.assign({},this.project);

            this.saveProject(copyObj);
            console.log(this.projectData);
        },
        nameConstr (projectName, mainObj){
            mainObj.id = ++this.projectID;
            mainObj.project = projectName;
            mainObj.data = [];
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

    .modal-content {
        display: flex;
        flex-direction: column;
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }

    .aclose {
        color: #aaaaaa;
        font-size: 28px;
        font-weight: bold; 
        width: 20px; 
        align-self: flex-end;
    }

    .input {
        margin-bottom: 10px;
    }

    .aclose:hover,
    .aclose:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }    
</style>