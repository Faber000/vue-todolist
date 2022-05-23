const app = new Vue ({
    el: '#app',
    data: {
        todos: [
            'fare la spesa',

            'fare ginnastica',

            'fare i compiti',      
        ],

       newTodo : '',
    }, 
    methods: {
        addTodo() {
            if(this.newTodo !== ' ') {
                this.todos.push(this.newTodo);
                this.newTodo = '';
            }
        },

        removeTodo(index) {
           this.todos.splice(index, 1);
        },
    },
});