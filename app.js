
var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Hello Vue!'
    }
});


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});


var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});


var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: ''
    }
});



new Vue({
    el: '#app-8',
    data: {
        output: ''
    },
    methods: {
        readRefs: function () {
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
        }
    }
});

var data = {
    items: ['Banana', 'Apple', 'Pear', 'Artichoke', 'Mango', 'Wasabi'],
    title: 'My Shopping List'
};
new Vue({
    el: '#app-9',
    data: data
});