<template>
    <div class="spinne">
        <div class="spinner-border" role="status"></div>
    </div>
</template>

<script>
export default {
    name: 'LoadingSpinner',
};
</script>

<style>
    .spinne {
        display: block;
        position: fixed; 
        z-index: 1; 
        padding-top: 100px; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: auto; 
        background-color: rgba(0,0,0,0.4); 
    }    

    .spinner-border {
        margin-left: 50%;
        margin-top: 30%;
    }
</style>