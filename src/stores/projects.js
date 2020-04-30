export default {
    state:{
        projectData: [],
        projectContent:[],
        curProj: {},
        loadingStatus: false,
    },/*Данные*/
    mutations:{
        updateProjectStore: (state, data) => {
            state.projectData = data;
            state.loadingStatus = false;
        },   
        writeTopic: (state, topic) => state.projectContent.push({project_id: topic.id, topic: topic.topic, info: topic.info}),
        changeCurProject: (state, data) => (state.curProj = data),
        changeProjectData: (state, data) => {
            const proj = state.projectContent.find(x=>x.project_id === data.id && x.topic === state.curProj.topic); 
            
            proj.topic = data.name;
            proj.info = data.info;
        },
        deleteTopic: (state, topic) => {
            const curTopic = state.projectContent.find(x => x.project_id === topic.id && x.topic === topic.name);
            const topicPosition = state.projectContent.indexOf(curTopic);
            
            state.projectContent.splice(topicPosition, 1);
        },
        updateLoadingStatus: (state) => {
            state.loadingStatus = true;
        },
    },/*Изменения данных*/
    actions:{
        updateProjectStore: async(ctx) => {
            ctx.commit('updateLoadingStatus');

            const url = 'http://usspi.xyz:9567/api/projects';
            const fetchUrl = await fetch(url); 
            const response = await fetchUrl.json();

            ctx.commit('updateProjectStore', response);
        },
        saveProject: async(ctx, project) => {
            const url = 'http://usspi.xyz:9567/api/project/create';
            await fetch(url, {
                method: 'POST', 
                body: JSON.stringify(project), 
            });
            ctx.dispatch('updateProjectStore');
        },
        sendTopic: (ctx, topic) => {
            ctx.commit('writeTopic', topic);
        },
        deleteProject: async(ctx, projectId) => {
            const url = `http://usspi.xyz:9567/api/project/delete/${projectId}`;
            await fetch(url,{
                method: 'DELETE',
            });
            ctx.dispatch('updateProjectStore');
        },
        changeProjectName: async(ctx, project) => {
            const url = `http://usspi.xyz:9567/api/project/update/${project.id}`;
            await fetch(url, {
                method: 'POST', 
                body: JSON.stringify({name: project.name}), 
            });

            ctx.dispatch('updateProjectStore');
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
        deleteTopic: (ctx, topic) => {
            ctx.commit('deleteTopic', topic);
        },
    },/*Другие операции*/
    getters:{
        projectData: state => state.projectData,
        curProj: state => state.curProj,
        projectContent: state => state.projectContent,
        idSequence: state => state.projectData.length > 0 ? state.projectData[state.projectData.length -1].id + 1 : 0,
        loadingStatus: state => state.loadingStatus,
    },/*Передача в компонент*/
};