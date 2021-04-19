<template>

    <div class="rules">
        
        <order></order>
        <phase></phase>
        <victoire></victoire>
        <module></module>
        <exploit></exploit>
    </div>

</template>

<script>
import Order from './Order/Order';
import Phase from './Phase/Phase';
import Victoire from './Victoire/Victoire';
import Module from './Module/Module';
import Exploit from './Exploit/Exploit';

export default {
    name: 'Regles',
    components: {
        'order' : Order,
        'phase' : Phase,
        'victoire' : Victoire,
        'module' : Module,
        'exploit' : Exploit
    },
}
</script>

<style src="./Regles.css" scoped>

</style>