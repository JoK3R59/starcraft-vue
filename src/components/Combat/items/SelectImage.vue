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
        return require('../../../assets/Images/Interfaces/Combat/Icon/' + race + '/' + pic + '.png')
      
      } else {
        return ''
      
      }
    },
    imgFigurineSoutien( pic, race ) {
      if (pic != undefined) {
        return require('../../../assets/Images/Interfaces/Combat/Icon/' + race + '/' + pic + '.png')
      
      } else {
        return ''
      
      }
    },
    imgCarte(pic, race) {
      if (pic != '') {
        if (race === 'terran') {
          return require('../../../assets/Images/DataScan/Factions/Bleu/Cartes/' + pic + '.png')
        
        } else if (race === 'zerg') {
          return require('../../../assets/Images/DataScan/Factions/Violet/Cartes/' + pic + '.png')
        
        } else if (race === 'protoss') {
          return require('../../../assets/Images/DataScan/Factions/Jaune/Cartes/' + pic + '.png')
        
        }
      } else {
        return ''

      }
    },
    imgBase(pic, race) {
      if (pic) {
        if (race === 'terran') {
          return require('../../../assets/Images/DataScan/Factions/Bleu/jeton/base.png')
        
        } else if (race === 'zerg') {
          return require('../../../assets/Images/DataScan/Factions/Violet/jeton/base.png')
        
        } else if (race === 'protoss') {
          return require('../../../assets/Images/DataScan/Factions/Jaune/jeton/base.png')
        
        }
      } else {
        return ''
      
      }
    },
    imgTurret(pic, race) {
      if (pic) {
        if (race === 'terran') {
          return require('../../../assets/Images/DataScan/Factions/Bleu/jeton/module_tower.png')
        
        } else if (race === 'zerg') {
          return require('../../../assets/Images/DataScan/Factions/Violet/jeton/module_tower.png')
        
        } else if (race === 'protoss') {
          return require('../../../assets/Images/DataScan/Factions/Jaune/jeton/module_tower.png')
        
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