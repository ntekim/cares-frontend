<template>
    <div id="pills" class="bg-white">
        <Btn />
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Drug Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Cost Per Price</th>
                <th scope="col">Category</th>
                <th scope="col">Manu. Date</th>
                <th scope="col">Expiry Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Panadol</td>
                    <td>5 Pkts</td>
                    <td>#100</td>
                    <td>Anti-biotics</td>
                    <td>01-05-2022</td>
                    <td>31-07-2024</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Vitamin C</td>
                    <td>20 Pcs</td>
                    <td>#200</td>
                    <td>Anti-biotics</td>
                    <td>01-05-2022</td>
                    <td>31-07-2024</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Panadol</td>
                    <td>5 Pkts</td>
                    <td>#100</td>
                    <td>Anti-biotics</td>
                    <td>01-05-2022</td>
                    <td>31-07-2024</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Paracetamol</td>
                    <td>5 Pkts</td>
                    <td>#100</td>
                    <td>Anti-biotics</td>
                    <td>01-05-2022</td>
                    <td>31-07-2024</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Panadol</td>
                    <td>5 Pkts</td>
                    <td>#100</td>
                    <td>Anti-biotics</td>
                    <td>01-05-2022</td>
                    <td>31-07-2024</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>Panadol</td>
                    <td>5 Pkts</td>
                    <td>#100</td>
                    <td>Anti-biotics</td>
                    <td>01-05-2022</td>
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