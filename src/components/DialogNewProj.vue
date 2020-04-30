<template>
    <div>
        <div class="modal" ref='modal'>
            <div class="modal-content">
                <span class="aclose" @click='close()'>&times;</span>
                <input type="text" v-model='project.name' @keyup.enter='save()' class='input' placeholder="Name of project" v-focus>
                <button @click='save()' class="btn btn-primary">Submit</button>
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
        },
        defaultProject: {
            name: '',
        },
    }),
    methods: {
        ...mapActions(actions),
        createElement: function () {
            console.log(this.projectData);
            this.saveProject(this.project);
            this.project = Object.assign({}, this.defaultProject);
        },
        close() {

            this.$emit('close');
        },
        save() {              
            if (!this.project.name) {
                alert('Input project name');
                return;
            }
            this.createElement();
            this.$emit('close');
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
