<template>
  <div id="app">
    
    <MainBar/>

    <Container/>

  </div>
</template>

<script>
//Block of bootstrap import
import 'bootstrap/dist/css/bootstrap.css'

//Block of fontawesome import
import '@fortawesome/fontawesome-free/css/all.min.css'


//Components import
import MainBar from './components/MainBar'
import Container from './components/Container'

export default {
  name: 'App',
  components: {
    MainBar,
    Container,   
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
</style>

