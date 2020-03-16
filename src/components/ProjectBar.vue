<template>
    <div class="card mb-5" v-bind:id="id">
            <h5 class="card-header text-center">
                {{ProjectName}} + {{id}}
            </h5>
            <div class="card-body  d-flex justify-content-around flex-column">
                <div class="subject h-2" >
                    <div class="more" v-bind:id="'more_' + id">
                        <button type="button" class="btn btn-primary btn-lg btn-block" @click="openTopics(id)">Open</button>
                    </div>
                    <div class="topics" v-bind:id="'topics_' + id">
                        <div v-for="(topicData, index) in projectData.find(x=>x.id = id).data" :key='index'>
                            <h6 class="topic" >{{topicData.topic}}</h6>
                            <div class="line"></div>
                            <p class="info">{{topicData.info}}</p>
                        </div>
                        <button class="card-body btn btn-primary p-3" style="width: 30%" @click="addTopic()">Add</button>
                    </div>
                </div>
                
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
    props: ['ProjectName','id','topic','info'],

    computed: {
      ...mapGetters(getters),
    },
    methods: {
        ...mapActions(actions),
        addTopic() {
            let topic = this._vnode.children[this._vnode.children.length - 1].elm;
            return topic.style.display = "block";
        },
        closeDialog() {
            let topic = this._vnode.children[this._vnode.children.length - 1].elm;
            return topic.style.display = "none";
        },
        saveTopic(data) {
            console.log(data)
            console.log(this.id);
            data.id = this.id;
            
            if (data.topic) {
                this.sendTopic(data);
                this.closeDialog();
            } else {
                alert('Set topic title')
            }
        },
        openTopics(id) {
            const topics = document.querySelector('#topics_' + id);
            const more = document.querySelector('#more_' + id);

            console.log(topics)

            topics.style.display = 'block';
            more.style.display = 'none';
        }
    },
}
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
</style>