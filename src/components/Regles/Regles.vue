<template>

    <div class="rules">
        
        <order></order>
        <phase></phase>
        <victoire></victoire>
        <module></module>

    </div>

</template>

<script>
import Order from './Order/Order';
import Phase from './Phase/Phase';
import Victoire from './Victoire/Victoire';
import Module from './Module/Module';

export default {
    name: 'Regles',
    components: {
        'order' : Order,
        'phase' : Phase,
        'victoire' : Victoire,
        'module' : Module
    },
}
</script>

<style src="./Regles.css" scoped>

</style>