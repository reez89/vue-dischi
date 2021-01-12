$(document).ready(function() {
let app = new Vue({
    el: "#app",
    data: {
        key: "All",
        keyAuthor:"All",
        myAlbums: null,
        genere:null,
        author:null
    },


    mounted() {
        this.changeCategory()
        this.changeAuthor()
    },

    methods: {
        changeCategory(){
            axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(response=>{
                let albums = response.data.response
                this.genere = [...new Set(albums.map(item => item.genre))] // utilizzo map, perchè prende solamente il primo valore per tipo, che è quello che serve a noi, altrimenti filter prenderebbe 10 valori compresi i doppioni.
                if(this.key === 'All'){
                    this.myAlbums = albums // Se la chiave è impostata su all, il mio array myAlbums sarà equivalente a ciò che prendiamo dall'API.
                } else{  // Settando il valore dellla key, su un qualsiasi valore della option, filtro gli elementi corrispondenti.
                    this.myAlbums = albums.filter(element=> element.genre === this.key)                    
                }
            })
        },
        changeAuthor(){
            axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(response=>{
                let albums = response.data.response
                this.author = [...new Set(albums.map(item => item.author))] 
                if(this.keyAuthor === 'All'){
                    this.myAlbums = albums 
                } else{  
                    this.myAlbums = albums.filter(element=> element.author === this.keyAuthor)                    
                }
            })
        }
    },

});
});