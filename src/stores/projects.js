export default {
    state:{
        projectData: []
    },/*Данные*/
    mutations:{
        writeProject: (state, data) => state.projectData.push(data),
        writeData: (state, id, topic, topicData) => state.projectData.find(x=>x.id === id).data.push({topic: topic, info: topicData})/* + console.log(state.projectData.find(x=>x.id === id))*/,
    },/*Изменения данных*/
    actions:{
        saveProject: (ctx, project) => {
            ctx.commit('writeProject', project);
        },
        sendTopic: (ctx, id, topic, data) => {
            console.log(ctx + ' ' + id + ' ' + topic + ' ' + data);
            ctx.commit('writeData', id, topic, data)
        },
    },/*Другие операции*/
    getters:{
        projectData: state => state.projectData
    },/*Передача в компонент*/
} 