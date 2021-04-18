<template>

    <div class="rules">
        
        <order></order>
        <phase></phase>
    </div>

</template>

<script>
import Order from './Order/Order';
import Phase from './Phase/Phase';

export default {
    name: 'Regles',
    components: {
        'order' : Order,
        'phase' : Phase
    },
    
}
</script>

<style src="./Regles.css" scoped>

</style>