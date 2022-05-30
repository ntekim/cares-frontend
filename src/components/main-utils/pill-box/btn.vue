<template>
    <div class="btn-parent">
            <div class="btn-sib"></div>
            <div class="btn-sib">
                <div class="add-pharm">
                    <router-link to="/add-pill" id="add-btn">
                        <!-- < class="btn" id="add-btn"> -->
                            <span class="material-icons-sharp">add</span>
                            Add Pill
                        <!-- </button> -->
                    </router-link>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    name: "Btn"
}
</script>
<style scoped>

   div.btn-parent{
       display: flex;
       justify-content: space-between;
       margin: 1rem 0 1rem 0;
   }

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


              /* -------------  MEDIA QUERIES(Mobile) ----------- */
@media screen and (max-width:768px) {
    div.btn-parent{
        display: block;
    }
}
</style>