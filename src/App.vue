<template>

  <div class="app"
   id="app">
    <header-top></header-top>
    <router-view></router-view>
    <footer-bot></footer-bot>
  </div>
</template>

<script>
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default {
  name: 'App',
  components: {
    'header-top' : Header,
    'footer-bot' : Footer,
  }
}
</script>

<style>
@font-face {
  font-family: 'univers';
  src:
   url('./assets/fonts/Univers/UniversLTStd.otf')     
     format('opentype'),
   url('./assets/fonts/Univers/Univers-light-normal.ttf')
     format('truetype');
  font-weight: normal;
  font-style: normal;
}
.app {
  background-image: url(./assets/Images/Interfaces/Menu/fond-menu2.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #f6fafd;
  font-family: 'univers', sans-serif;
}
</style>
