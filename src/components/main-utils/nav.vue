<template>
    <div class="nav">
        <h1>Dashboard</h1>

        <div class="date">
            <input type="date">
        </div>
    </div>
</template>
<script>
export default {
    name: "Nav"
}
</script>
<style scoped>
    .date{
       display: inline-block;
       background: var(--color-light);
       border-radius: var(--border-radius-1);
       margin-left: 1rem;
       padding: 0.5rem 1.5rem;
    }

    .date input[type="date"] {
       background: transparent;
       color: var(--color-dark);
    }
    /* -------------  MEDIA QUERIES ----------- */
    @media screen and (max-width:1200px) {
        .date{
            margin-left: 0;
        }

    }
</style>