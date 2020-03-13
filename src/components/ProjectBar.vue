<template>
    <div class="card mb-5" v-bind:id="id">
            <h5 class="card-header text-center">
                {{ProjectName}}
            </h5>
            <div class="card-body  d-flex justify-content-around flex-column">
                <div class="subject" v-for="(project, index) in projectData.data" :key='index'>
                    <div class="topic mb-5" ></div>
                    <div class="info"></div>
                </div>
                <button class="card-body btn btn-primary p-3" style="width: 30%" @click="addTopic()">Add</button>
            </div>
            <div class="card-body  d-flex justify-content-around bg-light" style="padding: 12px;">
                <a href="#" ><i class="fa fa-pen fa-2x"></i></a>
                <a href="#" ><i class="fa fa-trash fa-2x" @click="deleteProject()"></i></a>
            </div>
            <AddTopicWindow @close='closeDialog' @submit='saveTopic'/>
        </div>
</template>

<script>
import AddTopicWindow from './AddTopicWindow';
import { mapActions, mapGetters } from 'vuex';

const getters = ['projectData'];
const actions = ['sendTopic'];

export default {
    components: {
        AddTopicWindow,
    },
    name: 'ProjectBar',
    props: ['ProjectName','id'],

    computed: {
      ...mapGetters(getters),
    },
    methods: {
        ...mapActions(actions),
        addTopic() {
            let Topic = this._vnode.children[this._vnode.children.length - 1].elm;
            return Topic.style.display = "block";
        },
        closeDialog() {
            let Topic = this._vnode.children[this._vnode.children.length - 1].elm;
            return Topic.style.display = "none";
        },
        saveTopic(projectTopic, projectInfo) {
            console.log(projectTopic + ' ' + projectInfo)
            console.log(this.id);
            let id = this.id;

            this.sendTopic(id, projectTopic, projectInfo);

            // this.closeDialog();
        },
    },
}
</script>

<style scoped>
    button {
        margin-top: 15px;
    }
</style>

<style>
    .topic {
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