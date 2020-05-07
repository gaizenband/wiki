<template>
    <div class="topicAdding" ref='modal'>
        <div class="modal-content">
            <span class="aclose" @click='closeWindow($event)'>&times;</span>
            <input type="text" v-model='projectTopic' class='input' placeholder="Title" v-focus>
            <textarea rows="10" type="textarea" v-model='projectInfo' class='input' 
                placeholder="Information...To make link use this synthax: [link|name]">
            </textarea>
            <button @click='save(projectTopic,projectInfo)' class="btn btn-primary" :disabled='isDisabled'>Save</button>
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
    computed: {
        isDisabled(){
            return !this.projectTopic;
        },
    },
    methods: {
        closeWindow() {
            this.$emit('close');
        },
        save(projectTopic, projectInfo) { 
            const reg = /\[.+?\|.+?\]/g;
            const withLinks = projectInfo.replace(reg, link => {
                const linkData = link.replace(/\[/,'').replace(/\]/,'');
                const linkArr = linkData.split('|');
                let url = linkArr[0].trim();
                if (!url.includes('://')) {
                    url = 'https://' + url;
                } 
                return '<a href="' + url + '" target="_blank">' + linkArr[1] + '</a>';
            });
            const data = {
                topic : projectTopic,
                info: withLinks,
            };
            this.$emit('submit', data);

            this.projectTopic = null;
            this.projectInfo = null;
        },
    },
};
</script>