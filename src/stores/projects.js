export default {
    state:{
        projectData: []
    },/*Данные*/
    mutations:{
        writeProject: (state, data) => state.projectData.push(data),
    },/*Изменения данных*/
    actions:{
        saveProject: (ctx, project) => {
            ctx.commit('writeProject', project);
        },
    },/*Другие операции*/
    getters:{
        projectData: state => state.projectData
    },/*Передача в компонент*/
}