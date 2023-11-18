import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
// import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'
import Login from 'src/pages/Login.vue'
import Ride from 'src/pages/Ride.vue'
import UserHistory from 'src/pages/UserHistory.vue'
import UserHistoryAdmin from 'src/pages/UserHistoryAdmin.vue'
import BikeHistory from 'src/pages/BikeHistory.vue'
import StationList from 'src/pages/StationList.vue'

const routes = [
  {
    name: "login",
    path: '/login',
    component: Login,
    meta: {
      requiresAuth: false, // This route doesn't require authentication
    },
  },
  {
    name: "home",
    path: '/',
    redirect: '/login',
    component: Login,
    meta: {
      requiresAuth: false, // This route doesn't require authentication
    },
  },
  // {
  //   path: '/',
  //   component: DashboardLayout,
  //   redirect: '/admin/overview'
  // },
  {
    path: '/admin',
    component: DashboardLayout,
    // redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview,
        meta: {
          requiresAuth: true, // This route doesn't require authentication
        },
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile,
        meta: {
          requiresAuth: true, // This route doesn't require authentication
        },
      },
      {
        path: 'user_history',
        name: 'UserHistory',
        component: UserHistory,
        meta: {
          requiresAuth: true, // This route doesn't require authentication
        },
      },
      {
        path: 'bike_history',
        name: 'BikeHistory',
        component: BikeHistory,
        meta: {
          requiresAuth: true, // This route doesn't require authentication
        },
      },
      {
        path: 'station_list',
        name: 'StationList',
        component: StationList,
        meta: {
          requiresAuth: true, // This route doesn't require authentication
        },
      },
      {
        path: 'user_history_admin',
        name: 'UserHistoryAdmin',
        component: UserHistoryAdmin,
        meta: {
          requiresAuth: true, // This route doesn't require authentication
        },
      },
      // {
      //   path: 'table-list',
      //   name: 'Table List',
      //   component: TableList,
      //   meta: {
      //     requiresAuth: true, // This route doesn't require authentication
      //   },
      // },
      // {
      //   path: 'typography',
      //   name: 'Typography',
      //   component: Typography,
      //   meta: {
      //     requiresAuth: true, // This route doesn't require authentication
      //   },
      // },
      // {
      //   path: 'icons',
      //   name: 'Icons',
      //   component: Icons,
      //   meta: {
      //     requiresAuth: true, // This route doesn't require authentication
      //   },
      // },
      // {
      //   path: 'maps',
      //   name: 'Maps',
      //   component: Maps,
      //   meta: {
      //     requiresAuth: true, // This route doesn't require authentication
      //   },
      // },
      {
        path: 'ride',
        name: 'Ride',
        component: Ride,
        meta: {
          requiresAuth: true, // This route doesn't require authentication
        },
      },
      // {
      //   path: 'upgrade',
      //   name: 'Upgrade to PRO',
      //   component: Upgrade,
      //   meta: {
      //     requiresAuth: true, // This route doesn't require authentication
      //   },
      // }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
