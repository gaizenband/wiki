<template>
    <div class="card mb-5" v-bind:id="project.id">
            <div class="card-header text-left">
                <h5 class="projectName">{{project.name}}</h5>
                <a href="#" ><i class="text-right fa fa-pen fa-2x" @click="editProject(project.id)"></i></a>
            </div>
            <div class="card-body  d-flex justify-content-around flex-column">
                <div class="subject h-2" >
                    <div class="more" v-bind:id="'more_' + project.id" 
                        v-if="projectShow">
                        <button type="button" class="btn btn-primary btn-lg btn-block" @click="openTopics(project.id)">Open</button>
                    </div>
                    <div class="topics" v-bind:id="'topics_' + project.id" 
                    v-if="topicShow">
                        <div v-for="(topicData, index) in projectContent.filter(x => x.project_id == project.id)" :key='index'>
                           <div class="topicButtons">
                                <h6 class="topic" >{{topicData.topic}}</h6>   
                                <div class="buttons">
                                    <a href="#" class="align-self-center"><i class="fa fa-pen float-right space" 
                                    @click="editInfo(topicData.project_id, topicData.topic)"></i></a>         
                                    <a href="#" class="align-self-center"><i class="fa fa-trash float-right" 
                                    @click="deleteInfo(topicData.project_id, topicData.topic)"></i></a>
                                </div>                      
                           </div>                    
                           <div class="line"></div>
                           <pre class="info" v-html="topicData.info"></pre>
                        </div>
                        <AddTopic @addTopic='addTopic'/>
                        <CloseProjectData @closeTopics="closeTopics(project.id)"/>
                    </div>
                </div>                
            </div>
            <div class="card-body  d-flex justify-content-around bg-light" style="padding: 12px;">
                <a href="#" ><i class="fa fa-trash fa-2x" @click="killProject(project.id)"></i></a>
            </div>
            <AddTopicWindow v-if="addTopicPopup" @close='closeDialog' @submit='saveTopic'/>
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
    data: () => ({
        addTopicPopup: false,
        openButton: [],
    }),
    computed: {
        ...mapGetters(getters),
        projectShow: function() {
            if(this.project.id === 0 && this.openButton.find(i => i === this.project.id) + 1 ||
             this.openButton.find(i => i === this.project.id)) {
                return false;
            } else {
                return true;
            }
        },
        topicShow: function() {
            if(this.project.id === 0 && this.openButton.find(i => i === this.project.id) + 1 ||
               this.openButton.find(i => i === this.project.id)) {
                return true;
            } else {
                return false;
            }
        },
    },
    name: 'ProjectBar',
    props: ['project'],
    methods: {
        ...mapActions(actions),
        addTopic() {
            this.addTopicPopup = true;
        },
        closeDialog() {
            this.addTopicPopup = false;
        },
        saveTopic(data) {
            data.id = this.project.id;

            this.sendTopic(data);
            this.closeDialog();

        },
        openTopics(id) {
            if (id === 0 && this.openButton.find(i => i === id) + 1 || this.openButton.find(i => i === id)) {
                return;
            } else {
                this.openButton.push(id);
            }
        },
        closeTopics(id) {
            if (id === 0 && this.openButton.find(i => i === id) + 1 || this.openButton.find(i => i === id)) {
                const idPosition = this.openButton.indexOf(id);
                this.openButton.splice(idPosition, 1);
            } else {
                return;
            }
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
        deleteInfo (id, name) {
            if (confirm('Are you sure?')) {
                this.$emit('delete', id, name);
            } else {
                return;
            }    
        },
    },
};
</script>

<style>
    .topicAdding {
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
        display: block;
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

    .topicButtons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .topic {
        margin: 0;
    }

    .buttons {
        align-self: center;
        display: flex;
    }

    .space {
        margin-right: 5px;
    }
</style>