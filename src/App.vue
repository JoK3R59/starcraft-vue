<template>

  <div class="app"
   id="app">

   <div id="stellar">
     <div id="const" ></div>
     <div id="const1"></div>
     <div id="terre"></div>
   </div>

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
  data() {
    return {
      y : -400
    }
  },
  components: {
    'header-top' : Header,
    'footer-bot' : Footer,
  },
  methods: {
    topPosition() {
      var scrollPosition = document.documentElement.scrollTop
      // Terre calcule
      var calcY = (scrollPosition * 0.095) + this.y
      var mathY = Math.round(calcY)
      var yPosition = mathY.toString() + "px"
      // const calcule
      var calcY0 = (scrollPosition * 0.05) + this.y
      var mathY0 = Math.round(calcY0)
      var yPosition0 = mathY0.toString() + "px"
      // const1 calcule
      var calcY1 = (scrollPosition * 0.02) + this.y
      var mathY1 = Math.round(calcY1)
      var yPosition1 = mathY1.toString() + "px"
      // get ID element
      var terreVar = document.getElementById("terre")
      var constVar = document.getElementById("const")
      var const1Var = document.getElementById("const1")
      // condition
      if (scrollPosition > 50 ) {
        terreVar.style.top = yPosition;
        constVar.style.top = yPosition0;
        const1Var.style.top = yPosition1;
      } else {
        terreVar.style.top = "-400px";
        constVar.style.top = "-400px";
        const1Var.style.top = "-400px";
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.topPosition);
  }
}
</script>

<style src="./App.css">

</style>
