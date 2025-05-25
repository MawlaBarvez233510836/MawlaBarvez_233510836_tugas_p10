import { createRouter, createWebHistory } from 'vue-router'

// Import komponen (sementara sebagai placeholder)
import Home from '../components/Home.vue'
import Books from '../components/Books.vue'
import BookSearch from '../components/BookSearch.vue'
import MyBorrows from '../components/MyBorrows.vue'
import Profile from '../components/Profile.vue'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'

import AdminLayout from '../components/admin/AdminLayout.vue'
import AdminDashboard from '../components/admin/AdminDashboard.vue'
import AdminBooks from '../components/admin/AdminBooks.vue'
import AdminUsers from '../components/admin/AdminUsers.vue'
import AdminReports from '../components/admin/AdminReports.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/books', name: 'Books', component: Books },
  { path: '/books/search', name: 'BookSearch', component: BookSearch },
  { path: '/my-borrows', name: 'MyBorrows', component: MyBorrows },
  { path: '/profile', name: 'Profile', component: Profile },

  {
    path: '/admin',
    name: 'Admin',
    component: AdminLayout,
    children: [
      { path: '', name: 'AdminDashboard', component: AdminDashboard },
      { path: 'books', name: 'AdminBooks', component: AdminBooks },
      { path: 'users', name: 'AdminUsers', component: AdminUsers },
      { path: 'reports', name: 'AdminReports', component: AdminReports },
    ]
  },

  { path: '/login', name: 'Login', component: Login },
  { path: '/logout', name: 'Logout', component: Logout },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
