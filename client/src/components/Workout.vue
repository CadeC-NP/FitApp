<template>
    <div class="card has-background-grey-dark">
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4 has-text-success has-text-centered">{{post.FirstName}} {{post.LastName}}</p>
            </div>
            </div>

            <div class="content has-text-success has-text-weight-bold has-text-centered">
            Workout:
            {{post.Exercise_Type}}
            <br>
            {{post.Note}}
            <br>
            When:
            <time datetime="post.created_at">{{post.created_at}}</time>
            <br>
            {{post.Reactions}} people liked this
            </div>
            
            <div class="media" v-for="c in post.Comments" :key="c.id">
                <div class="media-content">
                    <b >{{c.FirstName}} {{c.LastName}} </b>
                    <span>{{c.Text}}</span>
                </div>
            </div>   

            
        </div>
        <footer class="card-footer has-text-success">
            <div class="field has-addons" style="width: 100%">
            <div class="control  is-expanded">
                <input class="input" type="text" placeholder="Add a comment" v-model="commentText">
            </div>
            <div class="control">
                <a class="button has-text-success" @click.prevent="comment">
                Comment
                </a>
            </div>
            </div>
        </footer>
        <footer class="card-footer">
            <a href="#" class="card-footer-item has-text-success">
                    <span class="icon">
                    <i class="fas fa-reply" aria-hidden="true"></i>
                    </span>
                    Repost   
            </a>
            <a href="#" class="card-footer-item has-text-success" @click.prevent="react">
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