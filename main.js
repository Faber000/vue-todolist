const app = new Vue ({
    el: '#app',
    data: {
        todos: [
            {
                task: 'fare la spesa',
                isDone: true,
            },
            
            {
                task: 'fare ginnastica',
                isDone: false,
            },

            {
                task: 'comprare le uova',
                isDone: false,
            },
        ],

       newTodo : '',
    }, 
    methods: {
        addTodo() {
            if(this.newTodo !== '') {
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

        changeStatus(index) {
            this.todos[index].isDone = !this.todos[index].isDone;
        }
    },
});