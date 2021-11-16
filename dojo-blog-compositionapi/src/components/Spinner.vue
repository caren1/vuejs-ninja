<template>
  <div class="spin"></div>
</template>

<style>
    .spin {
        display: block;
        width: 40px;
        height: 40px;
        margin: 30px auto;
        border: 3px solid transparent;
        border-radius: 50%;
        border-top-color: goldenrod;
        animation: spin 1s ease-in infinite;
    }

    @keyframes spin {
        to { transform: rotateZ(360deg) }
    }
</style>