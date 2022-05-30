<template>
<div class="container">
    <Sidenav />
    <Main />
    <RightSection />
</div>
</template>

<script>
import Main from '@/components/dashboard-layouts/main';
import RightSection from '@/components/dashboard-layouts/rightsec';
import Sidenav from '@/components/dashboard-layouts/sidenav';
export default {
    name: 'Dashboard',
    components: {
       Sidenav,
       Main,
       RightSection
    },
    data(){
        return {
            isActive: false
        }
    }
}
</script>