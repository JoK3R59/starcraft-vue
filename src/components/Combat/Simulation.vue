<template>

    <div class="Simulation">
        
        <div class="Simulation-atk">

            <div class="soutien">
                <h3>Soutien</h3>
            </div>
            <div class="front">
                <h3>Front</h3>
            </div>
        </div>

        <div class="Simulation-def">

            <div class="front">
                <h3>Front</h3>
            </div>
            <div class="soutien">
                <h3>Soutien</h3>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Simulation',
    data() {
        return {
            iconFlat : '../../assets/Images/Interfaces/Combat/Flat_plus_icon.svg'
        }
    }
}
</script>

<style src='./Simulation.css'>

</style>