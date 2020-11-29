<template>
    <div class="page">
      <h2 class="title is-2">Workouts</h2>

      <div class="columns">
        <div class="column">
            <Workout v-for="(x, i) in workouts " 
            :key="i"
            :workout="x" />
        </div>
      </div>
    </div>
</template>

<script>
import Workout from "@/components/Workout";
import {workouts} from "@/models/feed";
export default {
    data(){
        return{
            workouts
        }
    },
    components:{
        Workout
    }
}
</script>

<style>
</style>