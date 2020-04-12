<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#007bff">
            <a class="navbar-brand" href="./">Wiki</a>
            <AddButton @open='dialogWindow($event)'/>
        </nav>
    </header>
</template>

<script>
import AddButton from './AddButton';

export default {
    components: {
        AddButton,
    },
    name: 'MainBar',
    methods: {
        dialogWindow() {
            const modal = document.querySelector('.modal');
            return modal.style.display = "block";
        },
    },
};
</script>

<style>
    .navbar {
        justify-content: space-between;
    }
</style>