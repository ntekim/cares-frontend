<template>
    <div class="add-pharm">
        <router-link to="/add-pharmacy" id="add-btn">
            <!-- < class="btn" id="add-btn"> -->
                <span class="material-icons-sharp">add</span>
                Add Employee
            <!-- </button> -->
        </router-link>
    </div>
    
</template>
<script>
export default {
    name: "AddModal",
    
}
</script>

<style scoped>
    .add-pharm #add-btn{
        font-size: 1.1rem;
        background: rgb(4, 59, 209);
        border: none;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
        color: var(--color-white);
        padding: 0.5rem;
        border-radius: 5px;
        text-decoration: none;

    }
    .add-pharm #add-btn span{
        position: relative;
        top: 6px;
       margin-top: -0.5rem;
       font-weight: 700;

    }
</style>