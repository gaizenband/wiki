<template>
    <div class="topicAdding" ref='modal'>
        <div class="modal-content">
            <span class="aclose" @click='closeWindow($event)'>&times;</span>
            <input type="text" v-model='projectTopic' class='input' placeholder="Title" v-focus>
            <textarea rows="10" type="textarea" v-model='projectInfo' class='input' placeholder="Information..."></textarea>
            <button @click='save(projectTopic,projectInfo)' class="btn btn-primary">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddTopicWindow',
    data: () => ({
        projectTopic: '',
        projectInfo: '',
    }),
    methods: {
        closeWindow() {
            this.$emit('close');
        },
        save(projectTopic, projectInfo) {           
            const data = {
                topic : projectTopic,
                info: projectInfo,
            };
            this.$emit('submit', data);

            this.projectTopic = null;
            this.projectInfo = null;
        },
    },
};
</script>