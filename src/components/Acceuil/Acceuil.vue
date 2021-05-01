<template>

    <div class="container">

        <div class="body-top card-body text-center">
            <h3 class="acceuil">
                Bienvenue sur la page FanMade du jeu de plateau Starcraft.
            </h3>
        </div>

        <div class="question">
            <h2 class="question-title">Questions Fréquentes :</h2>
            <ul>
                <li v-for="(item, i) in question"
                 v-bind:key="i">
                    <p>{{ item.desc }}</p>  
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import question from '../../data/question';

export default {
    name: 'Acceuil',
    data() {
        return {
           question
        }
    }
}
</script>

<style src="./Acceuil.css" scoped>

</style>