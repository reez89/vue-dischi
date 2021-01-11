let app = new Vue({
    el: "#app",
    data: {
       dischi:[

       ],
       
    },


    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(response=>{
            console.log(response.data.response);
            this.dischi = response.data.response
            console.log(this.dischi);
        })
    },

});