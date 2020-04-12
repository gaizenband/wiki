<template>
    <div class="card mb-5" v-bind:id="project.id">
            <div class="card-header text-left">
                <h5 class="projectName">{{project.name}}</h5>
                <a href="#" ><i class="text-right fa fa-pen fa-2x" @click="editProject(project.id)"></i></a>
            </div>
            <div class="card-body  d-flex justify-content-around flex-column">
                <div class="subject h-2" >
                    <div class="more" v-bind:id="'more_' + project.id">
                        <button type="button" class="btn btn-primary btn-lg btn-block" @click="openTopics(project.id)">Open</button>
                    </div>
                    <div class="topics" v-bind:id="'topics_' + project.id">
                        <div v-for="(topicData, index) in projectContent.filter(x => x.project_id == project.id)" :key='index'>
                           <h6 class="topic" >{{topicData.topic}}</h6>
                           <a href="#" ><i class="fa fa-pen float-right" @click="editInfo(topicData.project_id, topicData.topic)"></i></a>
                           <div class="line"></div>
                           <pre class="info">{{topicData.info}}</pre>
                        </div>
                        <AddTopic @addTopic='addTopic'/>
                        <CloseProjectData @closeTopics="closeTopics(project.id)"/>
                    </div>
                </div>                
            </div>
            <div class="card-body  d-flex justify-content-around bg-light" style="padding: 12px;">
                <a href="#" ><i class="fa fa-trash fa-2x" @click="killProject(project.id)"></i></a>
            </div>
            <AddTopicWindow @close='closeDialog' @submit='saveTopic'/>
        </div>
</template>

<script>
import AddTopicWindow from './AddTopicWindow';
import AddTopic from './AddTopic';
import CloseProjectData from './CloseProjectData';
import { mapActions, mapGetters } from 'vuex';

const actions = ['sendTopic', 'deleteProject'];
const getters = ['projectContent'];

export default {
    components: {
        AddTopicWindow,
        CloseProjectData,
        AddTopic,
    },
    computed: {
        ...mapGetters(getters),
    },
    name: 'ProjectBar',
    props: ['project'],
    methods: {
        ...mapActions(actions),
        addTopic() {
            let topic = this._vnode.children[this._vnode.children.length - 1].elm;
            return topic.style.display = "block";
        },
        closeDialog() {
            let topic = [
                this._vnode.children[this._vnode.children.length - 1].elm,
                this._vnode.children[this._vnode.children.length - 2].elm,
            ];
            return topic.forEach(x => x.style.display = 'none');
        },
        saveTopic(data) {
            data.id = this.project.id;

            if (data.topic) {
                this.sendTopic(data);
                this.closeDialog();
            } else {
                alert('Set topic title');
            }
        },
        openTopics(id) {
            const topics = document.querySelector('#topics_' + id);
            const more = document.querySelector('#more_' + id);

            topics.style.display = 'block';
            more.style.display = 'none';
        },
        closeTopics(id) {
            const topics = document.querySelector('#topics_' + id);
            const more = document.querySelector('#more_' + id);

            topics.style.display = 'none';
            more.style.display = 'block';
        },
        killProject(id) {
            if (confirm('Are you sure?')) {
                this.deleteProject(id);
            } else {
                return;
            }
        },
        editProject (id) {
            this.$emit('edit', id);
        },
        editInfo (id, name) {
            this.$emit('edit', id, name);
        },
    },
};
</script>

<style scoped>
    button {
        margin-top: 15px;
    }
</style>

<style>
    .topicAdding {
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
    .line {
        border-bottom: 1px solid black;
        margin: 10px 0 0 ;
    }  
    
    .info {
        margin-bottom: 15px;
        white-space: pre-wrap;
    }

    .topics {
        display: none;
        padding: 5px;
        margin-top: 5px;
        outline: none;  
    }

    .more {
        display: block;
    }

    .card-header {
        display:flex; 
        flex-direction: row; 
        justify-content: space-between
    }

    .projectName {
        margin: 0; 
        line-height: 1.5;  
    }

    .topic {
        display: inline-block;
        margin: 0;
    }
</style>