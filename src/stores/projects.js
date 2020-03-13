export default {
    state:{
        projectData: []
    },/*Данные*/
    mutations:{
        writeProject: (state, data) => state.projectData.push(data),
        writeTopic: (state, data) => state.projectData.find(x=>x.id === data.id).data.push({topic: data.topic, info: data.info})/* + console.log(state.projectData.find(x=>x.id === id))*/,
    },/*Изменения данных*/
    actions:{
        saveProject: (ctx, project) => {
            ctx.commit('writeProject', project);
        },
        sendTopic: (ctx, data) => {
            console.log(data);
            ctx.commit('writeTopic', data)
        },
    },/*Другие операции*/
    getters:{
        projectData: state => state.projectData
    },/*Передача в компонент*/
} 