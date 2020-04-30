<template>
    <div>
        <div class="modal-edit-title" ref='modal-edit-title'>
            <div class="modal-content">
                <span class="aclose" @click='close()'>&times;</span>
                <input type="text" v-model='curProj.name' @keyup.enter='save()' class='input' placeholder="Name of project">
                <button @click='save()' class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';


const actions = ['changeProjectName'];
const getters = ['curProj'];

export default {
    name: 'EditProjectName',
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
        changeElement: function () {            
            this.project.name = this.curProj.name;
            this.project.id = this.curProj.id;
            
            this.changeProjectName(this.project);
            this.project = Object.assign({}, this.defaultProject);
        },       

        close() {
            this.$emit('close');
        },
        save() {
            if (!this.curProj.name) {
                alert('Input project name');
                return;
            }
                        
            this.changeElement();
            this.$emit('close');
        },
    },
};
</script>

<style>
    .modal-edit-title {
        display: block; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    } 
</style>