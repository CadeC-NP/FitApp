<template>
<form>
    <div class="field">
    <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email">
        <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
        </span>
    </p>
    </div>
    <div class="field">
    <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password">
        <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
        </span>
    </p>
    </div>
    <div class="field">
    <p class="control">
        <button class="button is-success" @click.prevent="login">
        Login
        </button>
        <button class="button is-success" @click.prevent="fbLogin">
        FB Login
        </button>
    </p>
    </div>
</form>
</template>

<script>
import session from "@/models/session";
import {login} from "@/models/users";
let auth2 = null;

export default {
    data(){
        return{
            currUser:[]
        }
    },
    async created(){
        this.currUser = await login(); 
    },
    methods: {
        login(){
            session.user = {
                name: 'placeholder',//currUser.FirstName,
                handle: 'placeholer', //currUser.Lastname,
                profile: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21370920_10209622095900406_1558557478066919662_n.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=SACDV3bx78gAX96KbJb&_nc_ht=scontent-lga3-1.xx&oh=47b81e9ad653b26796e4b0f8c5ccbb91&oe=5FACA43C'
            }
            this.$router.push('workouts');
        },

        fbLogin(){
            FB.login(authInfo=>{
                console.log(authInfo);
                FB.api("me?fields=id,name,email,picture",x=>{
                    session.user={
                        name: x.name,
                        handle: x.email,
                        profile: x.picture.data.url
                    }
                    this.$router.push('workouts');
                    console.log(x);
                })
            },{scope: 'public_profile,email,user_photos'})
        },
    }
}

// facebook scripts
    window.fbAsyncInit = function() {
        FB.init({
        appId      : '513331476290577',
        cookie     : true,
        xfbml      : true,
        version    : 'v9.0'
        });
        
        FB.AppEvents.logPageView();   
        
    };
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

</script>

<style>
    .button {
        margin: 5px;
    }
</style>