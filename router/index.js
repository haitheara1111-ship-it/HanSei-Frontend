import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '../pages/DashboardPage.vue';
import EmployeePage from '../pages/EmployeePage.vue';
import HRPage from '../pages/HRPage.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: DashboardPage },
  { path: '/employees', name: 'Employees', component: EmployeePage },
  { path: '/hr', name: 'HR', component: HRPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;