// console.log('heya');
const app = Vue.createApp({
    // data, methods, template, props,
    // template: `<h2>I am a template.</h2>`
    data(){
        return {
            books: [
                {
                    title: 'The final empire.1',
                    author: 'Wojt',
                    image: 'https://picsum.photos/100/100',
                    isFav: true,
                },
                {
                    title: 'The final empire.2',
                    author: 'Wojte',
                    image: 'https://picsum.photos/100/100',
                    isFav: false,
                },
                {
                    title: 'The final empire.3',
                    author: 'Wojtey',
                    image: 'https://picsum.photos/100/100',
                    isFav: true,
                }
            ],
           
            showBooks: true,
            x: 0,
            y: 0,
            url: 'http://wp.pl',
        }
    }, 
    methods: {
        changeTitle(title){
            // this.title = 'Changed from components';
            this.title = title;
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if (data){
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        likeBook(book) {
            // this.books[index].isFav = !this.books[index].isFav;
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav);
        }
    }
})
app.mount("#app")