<template>
  <img :class="classSelect"
   :src="imgFigurine(imgSrc, race)"
    alt="Selectionnez une Figurine">
</template>

<script>
export default {
  name: 'imgSoutien',
  props: ['imgSrc', 'race', 'classSelect'],
  methods: {
    imgFigurine(pic, race) {
      if (pic != undefined) {

        return require('../../../assets/Images/Interfaces/Combat/Icon/' + race + '/' + pic + '.png')
      } else {

        return ''
      }
    }
  }
}
</script>

<style>

</style>