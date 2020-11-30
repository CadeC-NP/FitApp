import {myFetch} from "./my-fetch";
import session from "./session";

export const getWorkouts = ()=> myFetch('workouts/byUser/1');

export function react(workout_id){
    return myFetch('reactions', { Workout_id: workout_id, Owner_id: 1 })
}

export function comment(workout_id, text){
    return myFetch('comments', { Workout_id: workout_id, Owner_id: 1, Text: text })
}

