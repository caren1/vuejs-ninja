<template>
    <p>Result with {{ score }}ms</p>
    <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: {
        score: Number
    },
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 250){
            this.rank = 'ninja fingers'
        } else if (this.score < 400){
            this.rank = 'rapid reflexes'
        } else {
            this.rank = 'snaaaaaaaaaail pace..'
        }
    }
}
</script>

<style>
.rank {
    font-size: 1.4rem;
    color: green;
    font-weight: bold;
}
</style>