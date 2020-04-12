<template>
    <div>
        <AddButton @open='dialogWindow($event)'/>
        <div class="modalEdit" ref='modalEdit'>
            <div class="modal-content">
                <span class="aclose" @click='dialogWindow($event)' data-operation="close">&times;</span>
                <input type="text" v-model='project.name' @keyup.enter='dialogWindow($event)' class='input' placeholder="Name of project" data-operation="save">
                <button @click='dialogWindow($event)' class="btn btn-primary" data-operation="save">Submit</button>
            </div>
        </div>
    </div>
</template>


<script>

import AddButton from './AddButton';
import { mapActions, mapGetters } from 'vuex';

const actions = ['saveProject'];
const getters = ['projectData', 'idSequence'];

export default {
    name: 'EditWindow',
    components: {
        AddButton,
    },
    computed: {
        ...mapGetters(getters),
    },
    data: () => ({
        project : {
            name: '',
            data: [],
            id: null,
        },
        defaultProject: {
            name: '',
            data: [],
            id: null,
        },
    }),
    methods: {
        ...mapActions(actions),
        createElement: function () {
            this.project.id = this.idSequence;
            this.saveProject(this.project);
            this.project = Object.assign({}, this.defaultProject);
        },
        dialogWindow(event) {
            let vNode = this._vnode.children;
            const modal = vNode[vNode.length - 1].elm;
            const action = event.target.dataset.operation;

            switch (action) {
            case 'open':
                return modal.style.display = "block";

            case 'close':
                return modal.style.display = "none";
                
            case 'save':              
                if (!this.project.name) {
                    alert('Input project name');
                    return;
                }
            }
            this.createElement();
            return modal.style.display = "none";                   
        },
    },
};
</script>

<style>
    .modalEdit {
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
