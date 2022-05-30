<template>
    <div id="pills" class="bg-white">
        <Btn />
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Pill Label</th>
                <th scope="col">Duration</th>
                <th scope="col">Quantity</th>
                <th scope="col">Category</th>
                <th scope="col">Pharmacist</th>
                <th scope="col">Expiry Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Panadol</td>
                    <td>1 week</td>
                    <td>5pcs</td>
                    <td>Anti-biotics</td>
                    <td>V-Gate</td>
                    <td>31-07-2024</td>
                </tr>
                 <tr>
                    <th scope="row">2</th>
                    <td>Panadol</td>
                    <td>1 week</td>
                    <td>5pcs</td>
                    <td>Anti-biotics</td>
                    <td>V-Gate</td>
                    <td>31-07-2024</td>
                </tr>
                 <tr>
                    <th scope="row">3</th>
                    <td>Panadol</td>
                    <td>4 week</td>
                    <td>5pcs</td>
                    <td>Anti-biotics</td>
                    <td>Capitol City</td>
                    <td>31-07-2024</td>
                </tr>
                 <tr>
                    <th scope="row">4</th>
                    <td>Panadol</td>
                    <td>1 week</td>
                    <td>5pcs</td>
                    <td>Anti-Fungal</td>
                    <td>V-Gate</td>
                    <td>31-07-2024</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Btn from './btn.vue'
export default {
    name: "PillIndex",
    components: {
        Btn
    }
}
</script>
<style scoped>
      #pills{
          margin-top: 3.5rem;
          overflow-x: auto;
          padding: 2rem;
      }
      #pills table{
          font-size: 1.2rem;
      }
      
      /* -------------  MEDIA QUERIES(Mobile) ----------- */
@media screen and (max-width:768px) {
   #pills{ 
       /* margin: auto; */
        /* overflow-x: auto; */
       width: 95vw;
    }
   table{
       overflow-x: auto;
       max-width: 95vw;
       
      }
}
</style>