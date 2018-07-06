var app = new Vue({
    el: '#app',

    data: {
        name: 'Test',
        data : {},
        films : [],
        related: {},
        errors: []
    },

    created(){
        axios.get('https://swapi.co/api/people/1')
        .then(response => {
            this.data = response.data
            
            this.data.films.map((film, index) => {
                axios.get(film)
                .then(response2 => index <= 3 ? this.films.push(response2.data) : this.related = response2.data)
                .catch(e => console.log(e))
            })
        })
        .catch(e => {
            this.errors.push(e)
        })
   }
})