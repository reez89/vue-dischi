let app = new Vue({
    el: "#app",
    data: {
        myCategory: null,
        dischi:[],
        
    },

    
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(response=>{
            this.dischi = response.data.response
            this.myCategory = response.data.response
        })
        
    },

    methods:{
        // fare una chiamata ai generi
        getCategory(el){
            let value = el.target.value;
            const selectAll = this.dischi;
            const filteredCategory = this.dischi.filter(function(el){
                return el.genre == value;
            });
            
            this.myCategory = filteredCategory;
            if(value =="All"){
                this.myCategory = selectAll;
            }
        }
    },
    
    
});