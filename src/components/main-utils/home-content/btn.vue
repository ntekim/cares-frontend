<template>
    <div class="btn-parent">
            <div class="btn-sib"></div>
            <div class="btn-sib">
                <AddModal />
            </div>
        </div>
</template>
<script>
import AddModal from "./add-modal.vue";
export default {
    name: "Btn",
    components: {
        AddModal
    }
}
</script>
<style scoped>

   div.btn-parent{
       display: flex;
       justify-content: space-between;
       margin: 1rem 0 1rem 0;
   }
</style>