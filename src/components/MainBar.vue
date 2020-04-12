<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#007bff">
            <a class="navbar-brand" href="./">Wiki</a>
            <AddButton @open='dialogWindow'/>
        </nav>
        <DialogNewProj v-if="addingProject" @close='closeDialogWindow'/>
    </header>
</template>

<script>
import AddButton from './AddButton';
import DialogNewProj from './DialogNewProj';

export default {
    components: {
        AddButton,
        DialogNewProj,
    },
    data: () => ({
        addingProject: false,
    }),
    name: 'MainBar',
    methods: {
        dialogWindow() {
            this.addingProject = true;
        },
        closeDialogWindow() {
            this.addingProject = false;
        },
    },
};
</script>

<style>
    .navbar {
        justify-content: space-between;
    }
</style>