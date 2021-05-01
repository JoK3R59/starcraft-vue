<template>

    <div class= 'footer'>

        <div class="text-center">
            <h5 class="txt">Version: 0.3.3</h5>
            <p class="txt">
                Rendu par <br/>
                <img class="logo txt"
                 src="../../assets/logo.png"/>
                Vue.js
            </p>
        </div>

        <div class="text-center middle">
            <h5 class="txt">StarCraft</h5>
            <p class="txt">Le Jeu de Plateau FanMade</p>
        </div>

        <div class="right">
            <h5 class="txt">Liens :</h5>
            <ul>
                <li class="liste">
                    <a class="txt"
                     href="https://www.linkedin.com/in/guillaume-ersent-15419a17b/" target="_blank">
                        -&gt; Linkedin
                    </a>
                </li>
                <li class="liste">
                    <a class="txt"
                     href="https://github.com/JoK3R59/starcraft-vue" target="_blank">
                        -&gt; GitHub
                    </a>
                </li>
            </ul>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style src="./Footer.css" scoped></style>