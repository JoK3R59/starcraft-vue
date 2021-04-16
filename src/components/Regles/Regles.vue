<template>

    <div class="rules">
        
        <order></order>
    </div>

</template>

<script>
import Order from './Order/Order';

export default {
    name: 'Regles',
    components: {
        'order' : Order,
    },
    
}
</script>

<style src="./Regles.css" scoped>

</style>