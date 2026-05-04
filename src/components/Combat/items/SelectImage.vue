<template>

  <img :class="classSelect"
   :src="selectTypeImage(imgSrc, race, selectType)"
   alt=" ">
    
</template>

<script>
export default {
  name: 'selectImage',
  props: ['imgSrc', 'race', 'classSelect', 'selectType'],
  methods: {
    selectTypeImage( imgSrc, race, selectType ) {
      switch (selectType) {

        case 'front':
          return (this.imgFigurineFront( imgSrc, race ))

        case 'soutien':
          return (this.imgFigurineSoutien( imgSrc, race ))

        case 'card':
          return (this.imgCarte( imgSrc, race ))

        case 'base':
          return (this.imgBase( imgSrc, race ))

        case 'turret':
          return (this.imgTurret( imgSrc, race ))
      
        default:
          console.log('- ERROR Switch Image -')
        break;
      }
    },
    imgFigurineFront(pic, race) {
      if (pic != '') {
        return this.$img('Interfaces/Combat/Icon/' + race + '/' + pic + '.webp')
      
      } else {
        return ''
      
      }
    },
    imgFigurineSoutien( pic, race ) {
      if (pic != undefined) {
        return this.$img('Interfaces/Combat/Icon/' + race + '/' + pic + '.webp')
      
      } else {
        return ''
      
      }
    },
    imgCarte(pic, race) {
      if (pic != '') {
        if (race === 'terran') {
          return this.$img('DataScan/Factions/Bleu/Cartes/' + pic + '.webp')
        
        } else if (race === 'zerg') {
          return this.$img('DataScan/Factions/Violet/Cartes/' + pic + '.webp')
        
        } else if (race === 'protoss') {
          return this.$img('DataScan/Factions/Jaune/Cartes/' + pic + '.webp')
        
        }
      } else {
        return ''

      }
    },
    imgBase(pic, race) {
      if (pic) {
        if (race === 'terran') {
          return this.$img('DataScan/Factions/Bleu/jeton/base.webp')
        
        } else if (race === 'zerg') {
          return this.$img('DataScan/Factions/Violet/jeton/base.webp')
        
        } else if (race === 'protoss') {
          return this.$img('DataScan/Factions/Jaune/jeton/base.webp')
        
        }
      } else {
        return ''
      
      }
    },
    imgTurret(pic, race) {
      if (pic) {
        if (race === 'terran') {
          return this.$img('DataScan/Factions/Bleu/jeton/module_tower.webp')
        
        } else if (race === 'zerg') {
          return this.$img('DataScan/Factions/Violet/jeton/module_tower.webp')
        
        } else if (race === 'protoss') {
          return this.$img('DataScan/Factions/Jaune/jeton/module_tower.webp')
        
        }
      } else {
        return ''
      
      }
    }
  }
}
</script>

<style>

</style>