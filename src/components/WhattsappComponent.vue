<template>
    <div class="wpp__container">
        <img src="@/img/whatsapp-icon.png" alt="" class="wpp__icon">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.wpp__container {
    position: relative;
}

.wpp__icon {
    position: absolute;
    bottom: 1.5rem;
    right: 2rem;
    font-size: 1.5rem;
    color: $--first-color;
    cursor: pointer;
}
</style>