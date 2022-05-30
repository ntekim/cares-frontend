<template>
    <div class="main">
        <Stats />
        <Btn />
        <Business-card />
    </div> 
</template>
<script>
import BusinessCard from './business-card.vue';
import Btn from './btn.vue';
import Stats from './stats.vue';

export default {
    name: 'DashIndex',
    components: {
        BusinessCard,
        Btn,
        Stats
    }
}
</script>
<style scoped>
    
</style>