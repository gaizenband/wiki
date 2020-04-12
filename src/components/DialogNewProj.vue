<template>
    <div>
        <div class="modal" ref='modal'>
            <div class="modal-content">
                <span class="aclose" @click='dialogWindow($event)' data-operation="close">&times;</span>
                <input type="text" v-model='project.name' @keyup.enter='dialogWindow($event)' class='input' placeholder="Name of project" data-operation="save">
                <button @click='dialogWindow($event)' class="btn btn-primary" data-operation="save">Submit</button>
            </div>
        </div>
    </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';

const actions = ['saveProject'];
const getters = ['idSequence'];

export default {
    name: 'DialogNewProj',
    computed: {
        ...mapGetters(getters),
    },
    data: () => ({
        project : {
            name: '',
            id: null,
        },
        defaultProject: {
            name: '',
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
