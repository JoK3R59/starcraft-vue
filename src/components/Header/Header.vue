<template>

    <div class="container-xl">

        <div class="header row d-flex justify-content-around">
            
            <div class="header-title">
                <img class="img-fluid"
                src="../../assets/Images/Interfaces/Accueil/starcraft_title.png"
                alt="Starcraft">
                <h1 class="header-undertitle text-center pb-3">
                    - Le Jeu de Plateau -
                </h1>
            </div>

            <div class="mt-3">
                <div class= "header-title-gif "/>
            </div>

        </div>

        <nav-top></nav-top>
    </div>
    
</template>

<script>
import Nav from '../Nav/Nav'

export default {
    name: 'Header',
    components: {
        'nav-top' : Nav
    }
}
</script>

<style src="./Header.css">
</style>