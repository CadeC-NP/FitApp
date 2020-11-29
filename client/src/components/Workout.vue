<template>
    <div class="card">
    <div class="card-image">
        <figure class="image">
        <img :src="workout.url">
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
            <img :src="workout.owner.profile" alt="Placeholder image">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">{{workout.owner.name}}</p>
            <p class="subtitle is-6">@{{workout.owner.handle}}</p>
        </div>
        </div>

        <div class="content">
        {{workout.message}}
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        workout: Object
    }
}
</script>

<style>
    .card{
        margin-bottom: 30px;
    }
</style>