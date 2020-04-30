<template>
    <div class="spinner">
        <div class="spinner-border" role="status"></div>
    </div>
</template>

<script>
export default {
    name: 'LoadingSpinner',
};
</script>

<style>
    .spinner {
        display: flex;
        position: fixed; 
        z-index: 1; 
        padding-top: 100px; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: auto; 
        background-color: rgba(0,0,0,0.4); 
        justify-content: center;
    }    

    .spinner-border {
        margin-top: 20%;
    }
</style>