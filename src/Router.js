import {createRouter, createWebHistory} from'vue-router';
const routes =[
  
    {
        path:'/',
        name: 'home',
        component: () => import('./components/Home.vue'),
    },
    // {
    //     path:'/about/us',
    //     name: 'about',
    //     component: () => import('./components/About.vue'),
    // },
    // {
    //     path:'/book',
    //     name: 'book',
    //     component: () => import('./components/Book.vue'),
    // },
    // {
    //     path:'/Search',
    //     name: 'search',
    //     component: () => import('./components/Search.vue'),	
    // }

];
const router = createRouter({
    history: createWebHistory(),routes
});
export default router;