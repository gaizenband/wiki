<template>
    <div class="topicEdit" ref='modal'>
        <div class="modal-content">
            <span class="aclose" @click='close()'>&times;</span>
            <input type="text" v-model='curProj.topic' class='input' placeholder="Title">
            <textarea rows="10" type="textarea" v-model='curProj.info' class='input' placeholder="Information..."></textarea>
            <button @click='save()' class="btn btn-primary">Save</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

const actions = ['changeProjectData'];
const getters = ['curProj'];

export default {
    name: 'EditTopicWindow',
    computed: {
        ...mapGetters(getters),
    },
    data: () => ({
        project : {
            name: '',
            id: null,
            info: '',
        },
        defaultProject: {
            name: '',
            id: null,
            info: '',
        },
    }),
    methods: {
        ...mapActions(actions),
        close() {
            this.$emit('close');
        },
        save() {
            if (!this.curProj.topic) {
                alert('Input project name');
                return;
            }
            this.changeElement();
            this.$emit('close');
        },
        changeElement () {           
            this.project.name = this.curProj.topic;
            this.project.id = this.curProj.project_id;
            this.project.info = this.curProj.info;           
            
            this.changeProjectData(this.project);
            this.project = Object.assign({}, this.defaultProject);
        },  
    },
};
</script>

<style>
    .topicEdit {
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