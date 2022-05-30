import Vue from 'vue'
import VueRouter from 'vue-router'
import AddPharmacy from '../components/main-utils/home-content/create.vue'
import DashboardIndex from '../components/dashboard-layouts/main.vue'
import DashIndex from '../components/main-utils/home-content/index.vue'
import PillIndex from '../components/main-utils/pill-shop/index.vue'
import AddDrug from '../components/main-utils/pill-shop/add-drug.vue'
import AddPill from '../components/main-utils/pill-box/add-pill.vue'
import PillBox from '../components/main-utils/pill-box/index.vue'
import Profile from '../components/main-utils/profile/index.vue'
import PharmProfile from '../components/main-utils/profile/pharm.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: () => {
      return '/dashboard';
    }
  },
  {
    path: '/dashboard',
    // name: "DashboardIndex",
    component: DashboardIndex,
  // },
    children: [
      // Routes in the children array will be rendered inside Dashboard's main <router-view>
      {
        path: '',
        name: 'DashIndex',
        component: DashIndex
      },
      {
        path: '/add-pharmacy',
        component: AddPharmacy
      },
      {
        path: '/pill-shop',
        component: PillIndex
      },
      {
        path: '/add-drug',
        component: AddDrug
      },
      {
        path: '/pill-box',
        component: PillBox
      },
      {
        path: '/add-pill',
        component: AddPill
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '/pharm-profile',
        component: PharmProfile
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
