<template>
    <div class="page">
      <h2 class="title is-2 has-text-centered has-text-success">Workouts</h2>

        <div class="columns">
            <div class="column">
                <Workout v-for=" (x, i) in workout " 
                    :key="i"
                    :i="i"
                    :post="x" />
            </div>
        </div>
    </div>
</template>

<script>
import Workout from "@/components/Workout";
import {getWorkouts} from "@/models/feed";
import session from "@/models/session";
export default {
    data(){
        return{
            workout: [],
        }
    },

    async created(){
        this.workout = await getWorkouts();
    },

    components:{
        Workout
    },

    methods:{
    }
}
</script>

<style>
    .card{
        margin-bottom: 30px;
    }
</style>