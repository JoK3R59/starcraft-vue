<template>

    <div class="container">

        <div class="Order">

            <h1 class="container TIPS title">
                Référence d'Ordre
            </h1>            
            
            <div :class="`Order-list list-${ i }`"
             v-for="(item, i) in build"
             v-bind:key="i">
                
                <div class="top">
                    <img src="" alt=""/>
                    <div>
                        <h2 class="">
                            {{ item.name }}
                        </h2>
                        <p>
                            {{ item.recap.a }}
                        </p>
                        <p>
                            {{ item.recap.b }}
                        </p>
                        <p v-if="item.recap.c">
                            {{ item.recap.c }}
                        </p>
                    </div>
                </div>

                <div class="bot">
                    <img src="" alt=""/>
                    <p>
                        {{ item.recap.spe }}
                    </p>
                </div>
            </div>

            <button>
                Plus d'informations
            </button>
        </div>
    </div>
</template>

<script>
import build from '../../data/Order/build';

export default {
    name: 'Regles',
    data() {
        return {
            build
        }
    },
}
</script>

<style src="./Regles.css" scoped>

</style>