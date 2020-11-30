<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4">{{workout.Exercise_Type}}</p>
                <p class="subtitle is-6">{{workout.PrimaryEmail}}</p>
            </div>
            </div>

            <div class="content">

            {{workout.Note}}
            
            <time datetime="post.created_at">{{workout.created_at}}</time>
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script>
import { react, comment } from "../models/feed";
export default {
    data: ()=>({
        commentText: ''
    }),
    props: {
        workout: Object,
    },
    methods: {
        react(){
            const that = this;
            react(this.workout.id)
            .then(x=> that.workout.Reactions += 1)
            .catch(err=> console.error(err))
        },
        async comment(){
            const response = await comment(this.workout.id, this.commentText);
            this.workout.Comments.push(response);
        }
    }
}
</script>

<style>
</style>