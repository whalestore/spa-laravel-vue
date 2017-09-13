import VueRouter from 'vue-router'

let routes = [
    {
        name: 'home',
        path : '/',
        component: require('./components/pages/Home')
    },
    {
        name:'about',
        path : '/about',
        component: require('./components/pages/About')
    },
    {
        name:'posts',
        path : '/posts/:id',
        component: require('./components/posts/Post')
    },
    {
        name:'register',
        path : '/register',
        component: require('./components/register/Register')
    },
    {
        name:'confirm',
        path : '/confirm',
        component: require('./components/Confirm/Email')
    }
]

export default new VueRouter({
    mode:'history',
    routes
})