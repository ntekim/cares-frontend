<template>
        <aside :class="{mobileWidth: isActive}">
            <div class="top">
                <div class="logo">
                    <span class="material-icons-sharp" id="logo">spa</span>
                    <h2 class="title ">CARES<span class="success">+</span></h2>
                </div>
                <div class="close" id="close-btn" @click="closeNav">
                    <span class="material-icons-sharp">close</span>
                </div>
            </div>
            <div class="sidebar">
                <router-link to="/" class="active">
                    <span class="material-icons-sharp">dashboard</span>
                    <h3>Dashboard</h3>
                </router-link>
                <a href="">
                    <span class="material-icons-sharp">forum</span>
                    <h3>Chats</h3>
                    <span class="message-count">15</span>
                </a>
                <router-link to="/pill-shop">
                    <span class="material-icons-sharp">vaccines</span>
                    <h3>Pill Shops</h3>
                </router-link>
                <router-link to="/pill-box">
                    <span class="material-icons-sharp">health_and_safety</span>
                    <h3>Pill Box</h3>
                </router-link>
                <a href="">
                    <span class="material-icons-sharp">food_bank</span>
                    <h3>Food Guage</h3>
                </a>
                <a href="">
                    <span class="material-icons-sharp">fitbit</span>
                    <h3>Health Updates</h3>
                </a>
                <a href="">
                    <span class="material-icons-sharp">self_improvement</span>
                    <h3>Physical Activities</h3>
                </a>
                <a href="">
                    <span class="material-icons-sharp">pix</span>
                    <h3>Vitals</h3>
                </a>
                <router-link to="/pharm-profile">
                <span class="material-icons-sharp">manage_accounts</span>
                    <h3>Settings</h3>
                </router-link>
                <a href="">
                    <span class="material-icons-sharp">logout</span>
                    <h3>Logout</h3>
                </a>

            </div>
        </aside>
</template>

<script>
import { bus } from '../../main'
export default {
    name: 'Sidenav',
    data: () => {
        return {
            isActive: false
        }
    },
    methods: {
       closeNav: function() {
           this.isActive = false;
           bus.$emit('close', this.isActive);
       }
    },
    created(){
        bus.$on('toggle', data => {
           this.isActive = data;
        });
    }
}
</script>

<style scoped>
/* Sidebar Styles */

aside{
    height: 100vh;
    /* position: fixed; */
}

aside .top{
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 1rem;
}

aside .logo{
    display: flex;
    gap: 0.8rem;
}

aside .logo h2 span{
    font-size: 2rem;
}

aside .logo .title{
    margin-top: -.4rem;
    font-size: 1.5rem;
    color: rgb(110, 107, 107);
}

aside .logo #logo {
    height: 2rem;
    width: 2rem;
    color: var(--color-primary);
}

aside .close{
    display: none;
}

aside .sidebar {
    background: white;
    display: flex;
    flex-direction: column;
    height: 86vh;
    position: relative;
    top: 3rem;
}


aside h3{
    font-weight: 500;
    font-size: 1rem;
    margin-top: 0.8rem;
}

aside .sidebar a{
    display: flex;
    color: var(--color-info-dark);
    margin-left: 2rem;
    gap: 1rem;
    align-items: center;
    position: relative;
    height: 3.5rem;
    transition: all 300ms ease;
    text-decoration: none;
}

aside .sidebar a span {
    font-size: 1.6rem;
    transition: all 300ms ease;
}

aside .sidebar a:last-child{
    position: absolute;
    bottom: 2.5rem;
    width: 100%;
}

aside .sidebar a.active{
    background: var(--color-light);
    color: var(--color-primary);
    margin-left: 0;
}

aside .sidebar a.active:before{
  content: '';
  width: 6px;
  height: 100%;
  background: var(--color-primary);
}

aside .sidebar a.active span {
    color: var(--color-primary);
    margin-left: calc(1rem - 3px);
}

aside .sidebar a:hover{
    color: var(--color-primary);
}


aside .sidebar a:hover span {
    margin-left: 1rem;
}


aside .sidebar .message-count {
    background: var(--color-danger);
    color: #fff;
    padding: 2px 10px;
    font-size: 11px;
    border-radius: var(--border-radius-1);
}


/* -------------  MEDIA QUERIES ----------- */
@media screen and (max-width:1200px) {

    aside .logo h2{
        display: none;
    }

    aside .sidebar h3{
        display: none;
    }

    aside .sidebar a{
      width: 5.6rem; 
    }

    aside .sidebar a:last-child{
        position: relative;
        margin-top: 1.8rem;
    }

}


/* -------------  MEDIA QUERIES(Mobile) ----------- */
@media screen and (max-width:768px) {
    aside{
        position: fixed;
        left: 0;
        background: var(--color-white);
        width: 18rem;
        z-index: 3;
        box-shadow: 1rem, 3rem 4rem var(--color-light);
        height: 100vh;
        padding-right: var(--card-padding);
        display: none;
    }

    .mobileWidth{
        display: block;
    }

    aside .logo{
        margin-left: 1rem;
        margin-right: 3.5rem;
    }

    aside .logo h2{
        display: inline;
    }

    aside .sidebar h3{
        display: inline;
    }

    aside .sidebar a {
        width: 100%;
        height: 3.4rem;
    }

    aside .sidebar a:last-child{
        position: absolute;
        bottom: 5rem;
    }

    aside .close {
        display: inline-block;
        cursor: pointer;
        color: var(--color-primary);
    }



}
</style>