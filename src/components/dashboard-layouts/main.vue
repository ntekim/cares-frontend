<template>
    <main>
        <!-- <Nav /> -->
        <div class="dashboard-main">
            <!-- <DashboardIndex /> -->
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
// import DashboardIndex from "../main-utils/home-content/index.vue";
// import Nav from "../main-utils/nav.vue"
export default {
    name: 'Main',
    components: {
        // DashboardIndex,
        // Nav
    }
}
</script>

<style scoped>
/* import 'mdb-vue-ui-kit/css/mdb.min.css'; */

   main {
       margin-top: 1.4rem;
   }


   main a{
       text-align: center;
       display: block;
       margin: 1rem auto;
       color: var(--color-primary);
   }




/* -------------  MEDIA QUERIES(Mobile) ----------- */
@media screen and (max-width:768px) {
   main{
       
       margin:6rem auto;
       /* padding: 0 2rem; */
       box-sizing: border-box;
   }
}
</style>

