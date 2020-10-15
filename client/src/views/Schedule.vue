<template>
    <div class="page">
      <div class="title is-2 is-fluid">
        <div class="notification has-background-grey-dark has-text-centered has-text-success is-succuss mb-4">
            Workout Schedule
        </div>
      </div>
        
        
        <h3 class="title is-5 has-text-centered has-text-success mb-5">
          Input which workouts you wish to do on each day from the list below.
        </h3>

      <div class="columns is-fluid">
        <div class="column">
            <div class="box has-background-grey">
                <p class="title is-5 has-text-success has-text-centered">Sunday</p>
                <Post />
            </div>
        </div>
        <div class="column">
            <div class="box has-background-grey">
                <p class="title is-5 has-text-success has-text-centered">Monday</p>
                <Post />
            </div>
        </div>
        <div class="column">
            <div class="box has-background-grey">
                <p class="title is-5 has-text-success has-text-centered">Tuesday</p>
                <Post />
            </div>
        </div>
        <div class="column">
            <div class="box has-background-grey">
                <p class="title is-5 has-text-success has-text-centered">Wednesday</p>
                <Post />
            </div>
        </div>
        <div class="column">
            <div class="box has-background-grey">
                <p class="title is-5 has-text-success has-text-centered">Thursday</p>
                <Post />
            </div>
        </div>
        <div class="column">
            <div class="box has-background-grey">
                <p class="title is-5 has-text-success has-text-centered">Friday</p>
                <Post />
            </div>
        </div>
        <div class="column">
            <div class="box has-background-grey">
                <p class="title is-5 has-text-success has-text-centered">Saturday</p>
                <Post />
            </div>
        </div>
      </div>
      <h3 class="title is-2 has-text-centered has-text-success mb-6">List of Workouts:</h3>
    </div>

</template>

<script>

    import Post from "@/components/Post";

    export default {
        data(){
            return{
                posts
            }
        },
        components:{
            Post
        }
    }
</script>

<style>

</style>