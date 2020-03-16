export default {
    state:{
        projectData: []
    },/*Данные*/
    mutations:{
        writeProject: (state, data) => state.projectData.push(data),
        writeTopic: (state, data) => state.projectData.find(x=>x.id === data.id).data.push({topic: data.topic, info: data.info}),
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
        projectData: state => state.projectData,
        idSequence: state => state.projectData.length > 0 ? state.projectData[state.projectData.length -1].id + 1 : 0,
    },/*Передача в компонент*/
} 