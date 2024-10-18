import store from '../store/index';

import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'
import Login from '../pages/Login.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import UserList from 'src/pages/UserList.vue'
import CategoryList from 'src/pages/CategoryList.vue'
import ArticleList from 'src/pages/ArticleList.vue'

import UserAdd from '../pages/User/UserAdd.vue'
import UserEdit from '../pages/User/UserEdit.vue'

import CategoryAdd from '../pages/Category/CategoryAdd.vue'
import CategoryEdit from '../pages/Category/CategoryEdit.vue'

import ArticleEdit from '../pages/Article/ArticleEdit.vue'
import ArticleAdd from '../pages/Article/ArticleAdd.vue'

// User
import UserLayout from '../layout/UserLayout.vue';

const routes = [
  {
    path: '/',
    component: UserLayout,
    name: 'UserLayout',
    meta: { guest: true }
  },
  {
    path: '/',
    component: UserLayout,
    name: 'UserArticle',
    meta: { guest: true }
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    name: 'dashboard',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: { guest: true }
      },
      {
        path: 'overview',
        name: 'Overview',
        component: Overview,
        meta: { requiresAuth: true },
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile,
        meta: { requiresAuth: true },
      },
      {
        path: 'users',
        name: 'UserList',
        component: UserList,
        meta: { requiresAuth: true },
      },
      {
        path: 'users/edit/:id',
        name: 'UsersEdit',
        component: UserEdit,
        meta: { requiresAuth: true },
      },
      {
        path: 'users/add',
        name: 'UsersAdd',
        component: UserAdd,
        meta: { requiresAuth: true },
      },
      {
        path: 'articles',
        name: 'ArticleList',
        component: ArticleList,
        meta: { requiresAuth: true },
      },
      {
        path: 'articles/edit/:id',
        name: 'ArticleEdit',
        component: ArticleEdit,
        meta: { requiresAuth: true },
      },
      {
        path: 'articles/add',
        name: 'ArticleAdd',
        component: ArticleAdd,
        meta: { requiresAuth: true },
      },
      {
        path: 'categories',
        name: 'CategoryList',
        component: CategoryList,
        meta: { requiresAuth: true },
      },
      {
        path: 'categories/edit/:id',
        name: 'CategoryEdit',
        component: CategoryEdit,
        meta: { requiresAuth: true },
      },
      {
        path: 'categories/add',
        name: 'CategoryAdd',
        component: CategoryAdd,
        meta: { requiresAuth: true },
      }
    ]
  },
  { path: '*', component: NotFound }
]

export default routes
