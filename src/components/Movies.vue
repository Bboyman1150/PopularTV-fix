<template>
    <div class="container">
        <div class="row">
            <div class="card" style="width: 18rem;" v-for="movie in movies" :key=movie.id>
                <img class="card-img-top" :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" alt="">
                <div class="card-body">
                    <h3 class="card-title"> {{movie.original_name}} </h3>
                    <p class="card-text"> {{ movie.overview }}</p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    <!-- TODO details page -->
                    <!-- <router-link class="btn btn-primary" :to="`/detail/${movie.id}`"><p class="btnp">ID: {{movie.id}}</p></router-link> -->
                </div>
            </div>
            <!-- <div class="col-lg-4 col-sm-6 col-xs-12">
                <div v-for="movie in movies" :key=movie.id class="card" style="width: 21rem;">
                    <div class="card-body" >
                        <img class="card-img-top" :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" alt="">
                        <h1> {{movie.original_title}} </h1>
                        
                        <router-link :to="`/detail/${movie.id}`"><p>{{movie.id}}</p></router-link>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Movies',
    data()
    {
        return{
            movies:[]
        }
    },
    mounted()
    {
        // Axios API call
        // axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=70a15c30fb26538a968ba499524a5e4e&language=en-US&page=1").then((response) =>{
        //     // console.log(response.data.results)
        //     this.movies = response.data.results;
        //     // use splice to change the response data from 20 to 4
        //     this.movies.splice(4, 16);
        //     console.log(response.data.results)
        // })
        axios.get("https://api.themoviedb.org/3/tv/popular?api_key=70a15c30fb26538a968ba499524a5e4e&language=en-US&page=1").then((response) =>{
            // console.log(response.data.results)
            this.movies = response.data.results;
            // use splice to change the response data from 20 to 4
            this.movies.splice(4, 16);
            console.log(response.data.results)
        })
    }
}
</script>

<style>
    .card{
        margin-right: 2rem;    
    }
    .card-body{
        border-radius: 5px;
    }
    .card-img-top{
        padding-top: 1rem;
    }
    .container{
        padding-top: 20px;
    }
    .btnp{
        display: inline;
    }
</style>