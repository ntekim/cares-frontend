<template>
    <div class="insights">
            <div class="sales">
                <span class="material-icons-sharp">analytics</span>
                <div class="middle">
                    <div class="left">
                        <h3>Total Pharmacies</h3>
                        <h1>25</h1>
                    </div>
                    <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div class="number">
                            <p>81%</p>
                        </div>
                    </div>
                </div>
                <small class="text-muted">Last 24 Hours</small>
            </div>
            <!-- End of Sales -->
            <div class="expenses">
                <span class="material-icons-sharp">analytics</span>
                <div class="middle">
                    <div class="left">
                        <h3>Total Users</h3>
                        <h1>100</h1>
                    </div>
                    <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div class="number">
                            <p>81%</p>
                        </div>
                    </div>
                </div>
                <small class="text-muted">Last 24 Hours</small>
            </div>
            <!-- End of Expenses -->
            <div class="income">
                <span class="material-icons-sharp">analytics</span>
                <div class="middle">
                    <div class="left">
                        <h3>Total Employees</h3>
                        <h1>50</h1>
                    </div>
                    <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div class="number">
                            <p>81%</p>
                        </div>
                    </div>
                </div>
                <small class="text-muted">Last 24 Hours</small>
            </div>
            <!-- End of Income -->
        </div>
</template>
<script>
export default {
    name: "Stats"
}
</script>
<style scoped>
.insights{
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       gap: 1.5rem;
       margin-bottom: 2rem;
       margin-top: 3rem;
       box-sizing: border-box;
   }

  .insights > div {
       background: var(--color-white);
       padding: var(--card-padding);
       border-radius: var(--card-border-radius);
       margin-top: 1rem;
       box-shadow: var(--box-shadow);
       transition: all 300ms ease;
    
   }

   .insights > div:hover{
       box-shadow: none;
   }

   .insights > div span {
       background: var(--color-primary);
       padding: 0.5rem;
       border-radius: 50%;
       color: var(--color-white);
       font-size: 2rem;
   }

   .insights > div.expenses span{
       background: var(--color-danger);
   }

   
   .insights > div.income span{
       background: var(--color-success);
   }

   .insights > div .middle {
       display: flex;
       /* justify-content: space-between; */
       align-items: center;
   }

   .insights h3 {
       margin: 1rem 0 0.6rem;
       font-size: 1rem;
   }

   .insights .progress {
       position: relative;
       width: 100%;
       height: 100%;
       justify-content: flex-end;
       background: none;
   }

   .insights svg {
       width: 7rem;
       height: 7rem;
   }

   .insights svg circle {
       fill: none;
       stroke: var(--color-primary);
       stroke-width: 14;
       stroke-linecap: round;
       transform: translate(5px, 5px);
       stroke-dasharray: 110;
       stroke-dashoffset: 92;
   }
   .insights .sales svg circle {
       stroke-dasharray: 200;
       stroke-dashoffset: -30;
   }

   .insights .expenses svg circle {
       stroke-dasharray: 80;
       stroke-dashoffset: 20;
   }

   .insights .income svg circle {
       stroke-dasharray: 110;
       stroke-dashoffset: 35;
   }

    .insights .progress .number {
       position: absolute;
       top: -5px;
       right: 3rem;
       /* justify-content: ; */
       height: 100%;
       width: 100%;
       display: flex;
       justify-content: flex-end;
       align-items: center;  
    }



/* -------------  MEDIA QUERIES ----------- */
@media screen and (max-width:1200px) {
    .insights{
        grid-template-columns: 1fr;
        gap: 0;
    }
    .insights > div .progress {
      display: flex;
      justify-content: end;
    }

    
}

/* -------------  MEDIA QUERIES(Mobile) ----------- */
@media screen and (max-width:768px) {
   .insights{
       width: 95vw;
       margin: auto;
   }
}
</style>