<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4">{{workout.FirstName}} {{workout.LastName}}</p>
                <p class="subtitle is-6">{{workout.PrimaryEmail}}</p>
            </div>
            </div>

            <div class="content">

            {{workout.Exercise_Type}}
            {{workout.Note}}

            <time datetime="post.created_at">{{workout.created_at}}</time>
            </div>
            <div class="media" v-for="c in post.Comments" :key="c.id">
                <div class="media-content">
                    <b >{{c.FirstName}} {{c.LastName}} </b>
                    <span>{{c.Text}}</span>
                </div>
            </div>    
        </div>
        <footer class="card-footer">
            <div class="field has-addons" style="width: 100%">
            <div class="control  is-expanded">
                <input class="input" type="text" placeholder="Add a comment" v-model="commentText">
            </div>
            <div class="control">
                <a class="button" @click.prevent="comment">
                Comment
                </a>
            </div>
            </div>
        </footer>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">
                    <span class="icon">
                    <i class="fas fa-reply" aria-hidden="true"></i>
                    </span>
                    Reply    
            </a>
            <a href="#" class="card-footer-item" @click.prevent="react">
                    <span class="icon">
                    <i class="fas fa-heart" aria-hidden="true"></i>
                    </span>
                    React      
            </a>
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
        i: Number,
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