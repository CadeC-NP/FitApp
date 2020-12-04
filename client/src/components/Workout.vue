<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4">{{post.FirstName}} {{post.LastName}}</p>
            </div>
            </div>

            <div class="content">

            {{post.Exercise_Type}}
            {{post.Note}}

            <time datetime="post.created_at">{{post.created_at}}</time>
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
        post: Object,
        i: Number,
    },
    methods: {
        react(){
            const that = this;
            react(this.post.id)
            .then(x=> that.post.Reactions += 1)
            .catch(err=> console.error(err))
        },
        async comment(){
            const response = await comment(this.post.id, this.commentText);
            this.post.Comments.push(response);
        }
    }
}
</script>

<style>
</style>