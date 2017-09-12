import VueRouter from 'vue-router'

let routes = [
    {
        name: 'home',
        path : '/',
        component: require('./components/Home')
    },
    {
        name:'about',
        path : '/about',
        component: require('./components/About')
    },
    {
        name:'posts',
        path : '/posts/:id',
        component: require('./components/Post')
    }
]

export default new VueRouter({
    mode:'history',
    routes
})