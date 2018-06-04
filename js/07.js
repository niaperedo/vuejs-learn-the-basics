Vue.component('app-user', {
    data: function() {
        return {
            users: [
                {'username': 'Max'},
                {'username': 'Chris'},
                {'username': 'Anna'} 
            ]
        };
    },
    template: '<div><div class="user" v-for="user in users"><p>Username: {{ user.username }}</p></div></div>'
});

new Vue({
    el: "#app",
    data: {
        title: "Hello World!"
    }
});