const app = new Vue ({
    el: '#app',
    data: {
        todos: [
            {
                task: 'fare la spesa',
                isDone: true,
            },
            
            {
                task: 'fare la spesa',
                isDone: false,
            },

            {
                task: 'fare la spesa',
                isDone: false,
            },
        ],

       newTodo : '',
    }, 
    methods: {
        addTodo() {
            if(this.newTodo !== ' ') {
                todo = {
                    task: this.newTodo,
                    isDone: false,
                }
                this.todos.push(todo);
                this.newTodo = '';
            }
        },

        removeTodo(index) {
           this.todos.splice(index, 1);
        },
    },
});