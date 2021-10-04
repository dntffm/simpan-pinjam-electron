import { createApp, h } from 'vue'
import routes from './routes'

const App = {
    data :() => ({
        currentRoute: window.location.pathname
    }),
    computed: {
        viewComponent() {
            const matchingPage = routes[this.currentRoute] || '404'
            return matchingPage
        }
    },

    render() {
        h(this.viewComponent)
    },

    created() {
        window.addEventListener('popstate', () => {
            this.currentRoute = window.location.pathname
        })
    }

}

createApp(App).mount('#app')
