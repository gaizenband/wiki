<template>
    <div class="topicAdding" ref='modal'>
        <div class="modal-content">
            <span class="aclose" @click='closeWindow($event)' data-operation="close">&times;</span>
            <input type="text" v-model='projectTopic' class='input' placeholder="Title">
            <textarea rows="10" type="textarea" v-model='projectInfo' class='input' placeholder="Information..." data-operation="save"></textarea>
            <button @click='save($event,projectTopic,projectInfo)' class="btn btn-primary">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DialogNewProj',
    data: function() {
        return {
            projectTopic: '',
            projectInfo: '',
        };
    },
    methods: {
        closeWindow(e) {
            this.$emit('close', e);
        },
        save(e, projectTopic, projectInfo) {

            console.log(projectInfo.search('\n'));
            
            const data = {
                topic : projectTopic,
                info: projectInfo,
            };
            this.$emit('submit', data);
        },
    },
};
</script>