<template>
    <div class="card mb-5">
            <h5 class="card-header text-center">
                {{ProjectName}}
            </h5>
            <div class="card-body  d-flex justify-content-around">
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
  props: ['ProjectName']
}
</script>

<style scoped>
    button {
        margin-top: 15px;
    }
</style>