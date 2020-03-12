<template>
    <div class="card mb-5">
            <h5 class="card-header text-center">
                {{ProjectName}}
            </h5>
            <div class="card-body  d-flex justify-content-around flex-column">
                <div class="subject" v-for="(project, index) in projectData.data" :key='index'>
                    <div class="topic mb-5" ></div>
                    <div class="info"></div>
                </div>
                <button class="card-body btn btn-primary p-3" style="width: 30%">Add</button>
            </div>
            <div class="card-body  d-flex justify-content-around bg-light" style="padding: 12px;">
                <a href="#" ><i class="fa fa-pen fa-2x"></i></a>
                <a href="#" ><i class="fa fa-trash fa-2x" @click="deleteProject()"></i></a>
            </div>
        </div>
</template>

<script>


export default {
  name: 'ProjectBar',
  props: ['ProjectName'],
  data: function() {
        return {
            projectData: [],
        };
    },
}
</script>

<style scoped>
    button {
        margin-top: 15px;
    }
</style>