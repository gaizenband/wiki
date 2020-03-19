export default {
    state:{
        projectData: []
    },/*Данные*/
    mutations:{
        writeProject: (state, data) => state.projectData.push(data),
        writeTopic: (state, topic) => state.projectData.find(x=>x.id === topic.id).data.push({topic: topic.topic, info: topic.info}),
        deleteProject: (state, id) => state.projectData.splice(state.projectData.indexOf(state.projectData.find(x=>x.id === id)),1),
    },/*Изменения данных*/
    actions:{
        saveProject: (ctx, project) => {
            ctx.commit('writeProject', project);
        },
        sendTopic: (ctx, topic) => {
            ctx.commit('writeTopic', topic)
        },
        deleteProject: (ctx, projectId) => {
            ctx.commit('deleteProject', projectId)
        },
    },/*Другие операции*/
    getters:{
        projectData: state => state.projectData,
        idSequence: state => state.projectData.length > 0 ? state.projectData[state.projectData.length -1].id + 1 : 0,
    },/*Передача в компонент*/
}