<template>
    <div class="right">
        <div class="top">
            <button @click="toggleNav()" :class="{ btnMenu: isActive }" class="menu-btn">
                <span class="material-icons-sharp">menu</span>
            </button>
            <div class="theme-toggler">
                <span class="material-icons-sharp active">light_mode</span>
                <span class="material-icons-sharp">dark_mode</span>
            </div>
            <div class="notifier">
                <span class="material-icons-sharp">notifications</span>
            </div>
            <div class="profile">
                <div class="info">
                    <p>Hey, <b>Jotham</b></p>
                    <small class="text-muted">Admin</small>
                </div>
                
                <div class="profile-photo" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">
                    <!-- <button type="button"  data-bs-content="Here's some amazing content."> -->
                        <router-link to="/profile"><img src="../../assets/profile-2.jpg" alt="Jotham"></router-link>
                    <!-- </button> -->
                </div>
            </div>
        </div>
        <!--  End Of Top  -->

        <div class="recent-updates">
            <h2>Recent Updates</h2>
            <div class="updates">
                <div class="update">
                    <div class="profile-photo">
                        <img src="../../assets/profile-1.jpg" alt="">
                    </div>    
                    <div class="message">
                        <p><b>Mike Tyson</b> recieved his order of Apple Airpod.</p>
                        <small class="text-muted">2 Minutes Ago</small>
                    </div>
                </div> 
                <div class="update">
                    <div class="profile-photo">
                        <img src="../../assets/profile-2.jpg" alt="">
                    </div>    
                    <div class="message">
                        <p><b>Mike Tyson</b> recieved his order of Apple Airpod.</p>
                        <small class="text-muted">2 Minutes Ago</small>
                    </div>
                </div>  
                <div class="update">
                    <div class="profile-photo">
                        <img src="../../assets/profile-3.jpg" alt="">
                    </div>    
                    <div class="message">
                        <p><b>Mike Tyson</b> recieved his order of Apple Airpod.</p>
                        <small class="text-muted">2 Minutes Ago</small>
                    </div>
                </div>        
            </div>
        </div>
         <!-- End OF Recent Updates -->

        <div class="app-analytics">
            <h2>Analytics</h2>
            <div class="item users">
                <div class="icon">
                    <span class="material-icons-sharp active">persons</span>
                </div>
                <div class="right">
                    <div class="info">
                        <h3>Users</h3>
                        <small class="text-muted">Last 24 Hours</small>
                    </div>
                    <h5 class="success">+39%</h5>
                    <h3>3849</h3>
                </div>
            </div>
            <div class="item dep">
                <div class="icon">
                    <span class="material-icons-sharp active">persons</span>
                </div>
                <div class="right">
                    <div class="info">
                        <h3>Departments</h3>
                        <small class="text-muted">Last 24 Hours</small>
                    </div>
                    <h5 class="warning">+19%</h5>
                    <h3>2649</h3>
                </div>
            </div>
            <div class="item faculty">
                <div class="icon">
                    <span class="material-icons-sharp active">persons</span>
                </div>
                <div class="right">
                    <div class="info">
                        <h3>Faculties</h3>
                        <small class="text-muted">Last 24 Hours</small>
                    </div>
                    <h5 class="success">+9%</h5>
                    <h3>849</h3>
                </div>
            </div>
            <div class="item add-user">
                <div>
                    <span class="material-icons-sharp">add</span>
                    <h3>Add User</h3>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>
import { bus } from '../../main'
    export default {
        name: 'RightSection',
        data: () => {
            return {
                isActive: false,
            }
        },
        methods: {
            toggleNav: function()  {
                this.isActive = !this.isActive;
                bus.$emit('toggle', this.isActive);
            }
        },
        created(){
          bus.$on('close', data => {
              this.isActive = data;
          })
        }
    }
</script>

<style scoped>
.right{
    margin-top: 1.4rem;
    /* margin-right: 4rem; */
    /* background: red; */
}

.right .top{
    display: flex;
    justify-content: end;
    gap: 2rem;
    margin-bottom: 1.5rem;
}

.right .top button{
    display: none;
}

.right .theme-toggler{
background: var(--color-light);
display: flex;
justify-content: space-between;
align-items: center;
height: 1.6rem;
width: 4.2rem;
cursor: pointer;
border-radius: var(--border-radius-1);
}

.right .theme-toggler span{
    font-size: 1.2rem;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.right .theme-toggler span.active{
    background: var(--color-primary);
    color: white;
    border: var(--border-radius-1);
}
.notifier span{
    color: var(--color-primary);
}

.right .top .profile {
    display: flex;
    gap: 2rem;
    text-align: right;
}

.right .recent-updates {
    margin-bottom: 0.8rem;
}

.right .recent-updates h2{
    margin-bottom: 0.5rem;
}

.right .recent-updates .updates{
    background: var(--color-white);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
}

.right .recent-updates .updates:hover {
    box-shadow: none;
}


.right .recent-updates .updates .update{
    display: grid;
    grid-template-columns: 3rem auto;
    gap: 1rem;
    margin-bottom: 1rem;
}


.right .app-analytics{
    margin-top: 2rem;
}

.right .app-analytics h2{
    margin-bottom: 0.8rem;
}

.right .app-analytics .item{
    background: var(--color-white);
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.7rem;
    padding: 1.4rem var(--card-padding);
    border-radius: var(--border-radius-3);
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
}

.right .app-analytics .item:hover{
    box-shadow: none;
}

.right .app-analytics .item .right{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0;
    width: 100%;
}

.right .app-analytics .item .icon{
    padding: 0.3rem;
    width: 2.5rem;
    height: 2.5rem;
    color: var(--color-white);
    border-radius: 50%;
    background: var(--color-primary);
    display: flex;
    align-items: center;

}

.right .app-analytics .item.users .icon{
    background: var(--color-primary);
     
}
.right .app-analytics .item.dep .icon{
    background: var(--color-warning);
}

.right .app-analytics .item.faculty .icon{
    background: var(--color-success);
}

.right .app-analytics .add-user{
    background-color: transparent;
    border: 2px dashed var(--color-primary);
    color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
}

.right .app-analytics .add-user div{
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

.right .app-analytics .add-user div h3{
    font-weight: 600;
}


/* -------------  MEDIA QUERIES(Mobile) ----------- */
@media screen and (max-width:768px) {
    .right {
        width: 94%;
        margin: 0 auto 4rem;
    }

    .right .top{
        position: fixed;
        top: 0;
        left: 0;
        align-items: center;
        padding: 0 0.8rem;
        height: 4.6rem;
        background: var(--color-white);
        width: 100%;
        margin: 0;
        z-index: 2;
        box-shadow: 0 1rem 1rem var(--color-light);
    }

    .right .top .theme-toggler{
        width: 4.4rem;
        position: absolute;
        left: 66%;
    }

    .right .profile .info{
        display: none;
    }

    .right .top button{
        display: inline-block;
        background: transparent;
        cursor: pointer;
        color: var(--color-primary);
        position: absolute;
        left: 1rem;
    }

    .right .top button span{ 
        font-size: 3rem; 
    }

    .btnMenu{
        margin-left: 17rem;
    }
}
</style>