<template>
    <div>
        <AddButton @open='dialogWindow($event)'/>
        <div class="modal" ref='modal'>
            <div class="modal-content">
                <span class="aclose" @click='dialogWindow($event)' data-operation="close">&times;</span>
                <input type="text" v-model='projectName' @keyup.enter='dialogWindow($event,projectName)' class='input' placeholder="Name of project" data-operation="save">
                <button @click='dialogWindow($event,projectName)' class="btn btn-primary" data-operation="save">Go somewhere</button>
            </div>
        </div>
    </div>
</template>


<script>

import AddButton from './AddButton';
import { mapActions, mapGetters } from 'vuex';

const actions = ['saveProject'];
const getters = ['projectData'];

export default {
    name: 'DialogNewProj',
    components: {
        AddButton,
    },
    computed: {
      ...mapGetters(getters),
    },
    data: function() {
        return {
            projectName: '',
            projectID: 0,
            };
        },
    methods: {
        ...mapActions(actions),
        nameConstr (projectName, id){
            this.id = id;
            this.project = projectName;
            this.data = [];
        },
        createElement: function (projName, id) {           
            this.saveProject(new this.nameConstr(projName, id));
            console.log(this.projectData);
        },
        dialogWindow(event, project) {  
            let vNode = this._vnode.children;
            console.log(vNode);
            const modal = vNode[vNode.length - 1].elm;
            console.log(modal);
            const action = event.target.dataset.operation;

            switch (action) {
                case 'open':
                    return modal.style.display = "block";

                case 'close':
                    return modal.style.display = "none";
                
                case 'save':              
                    if (!project) {
                        alert('Input project name')
                        return;
                    }
            }
            let id = project + '_' + ++this.projectID;
            this.createElement(project, id);
            return modal.style.display = "none";                   
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
