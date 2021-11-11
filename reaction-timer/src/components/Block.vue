<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
      <h1>click me</h1>
  </div>
</template>

<script>
export default {
    props: {
        delay: Number
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10)
        }, 
        stopTimer() {
            clearInterval(this.timer);
            this.$emit("end", this.reactionTime);
        }
    },
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0,
        }
    },
    mounted() {
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer()
        }, this.delay);
    }
}
</script>

<style>
.block {
    width: 400px;
    border-radius: 20px;
    background-color: aquamarine;
    text-align: center;
    color: white;
    padding: 100px 0;
    margin: 40px auto;
}
</style>