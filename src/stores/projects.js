export default {
    state:{
        projectData: [],
        projectContent:[],
        curProj: {},
    },/*Данные*/
    mutations:{
        writeProject: (state, data) => state.projectData.push(data),
        writeTopic: (state, topic) => state.projectContent.push({project_id: topic.id, topic: topic.topic, info: topic.info}),
        deleteProject: (state, id) => {
            state.projectData.splice(state.projectData.indexOf(state.projectData.find(x=>x.id === id)),1);
            state.projectContent.forEach(x => {if (x.project_id === id){x.project_id = undefined;}});
        },
        changeProjectName: (state, data) => state.projectData.find(x=>x.id === data.id).name = data.name,
        changeCurProject: (state, data) => (state.curProj = data),
        changeProjectData: (state, data) => {
            console.log(data);
            const proj = state.projectContent.find(x=>x.project_id === data.id && x.topic === state.curProj.topic); 
            
            proj.topic = data.name;
            proj.info = data.info;
        },
    },/*Изменения данных*/
    actions:{
        saveProject: (ctx, project) => {
            ctx.commit('writeProject', project);
        },
        sendTopic: (ctx, topic) => {
            ctx.commit('writeTopic', topic);
        },
        deleteProject: (ctx, projectId) => {
            ctx.commit('deleteProject', projectId);
        },
        changeProjectName: (ctx, project) => {
            ctx.commit('changeProjectName', project);
        },
        changeCurProj: (ctx, data) => {
            let proj = null;

            if (!data.name) {
                proj = Object.assign({}, ctx.state.projectData.find(el => el.id === data));
            } else {
                proj = Object.assign({}, ctx.state.projectContent.find(el => el.project_id === data.id && el.topic === data.name));
            }
            
            ctx.commit('changeCurProject', proj);
        },
        changeProjectData: (ctx, project) => {
            ctx.commit('changeProjectData', project);
        },
    },/*Другие операции*/
    getters:{
        projectData: state => state.projectData,
        curProj: state => state.curProj,
        projectContent: state => state.projectContent,
        idSequence: state => state.projectData.length > 0 ? state.projectData[state.projectData.length -1].id + 1 : 0,
    },/*Передача в компонент*/
};