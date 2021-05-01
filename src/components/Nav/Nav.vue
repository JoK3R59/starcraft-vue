<template>

    <ul class="nav">
        <li class="navigation btn btn-nav">
            <router-link to='/' exact>Accueil</router-link>
        </li>
        <li class="navigation btn btn-nav">
            <router-link to='/regles'>Règles</router-link>
        </li>
        <li class="navigation btn btn-nav">
            <router-link to='/factions'>Factions</router-link>
        </li>
        <li class="navigation btn btn-nav">
            <router-link to='/combat'>Simulation</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Nav',
}
</script>

<style src="./Nav.css" scoped>

</style>