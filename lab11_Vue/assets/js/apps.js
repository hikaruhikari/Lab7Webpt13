// Konfigurasi Rute Aplikasi SPA
const routes = [
    { path: '/', component: Home },
    { path: '/artikel', component: Artikel },
    { path: '/about', component: About }
]

// Membuat objek router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

// Inisialisasi aplikasi Vue dan pasang Router
const app = Vue.createApp({})
app.use(router)
app.mount('#app')