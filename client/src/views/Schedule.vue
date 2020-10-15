<template>
    <div class="page">
      <div class="title is-2 is-fluid">
        <div class="notification has-background-grey-dark has-text-centered has-text-success is-succuss mb-4">
            Workout Schedule
        </div>
      </div>
        
        
        <h3 class="title is-5 has-text-centered has-text-success mb-5">
          Select which workouts you wish to do today from the list below.
        </h3>

    <div>
        <div class="list has-text-success">
            <div class="innerList" v-for='item in listOne' :key='item.title'>
                {{ item.title }}
            </div>
            Selected Workouts Appear Here
        </div>
        <h3 class="title is-2 has-text-centered has-text-success mb-5">List of Workouts:</h3>
        <div class="list">
            <div class="innerList" v-for='item in listTwo' :key='item.title'>
                <button class="button is-success" @click="swap(item)" >
                    {{ item.title }}
                </button>
            </div>
        </div>
    </div>
    </div>

</template>



<script>

    export default {
        data (){
            return {
                items: [
                {
                    id: 0,
                    title: '1 Mile Run',
                    list: 2
                },
                {
                    id: 1,
                    title: 'Lunges',
                    list: 2
                },
                {
                    id: 2,
                    title: 'Push-Ups',
                    list: 2
                },
                {
                    id: 3,
                    title: 'Squats',
                    list: 2
                },
                {
                    id: 4,
                    title: 'Sit-Ups',
                    list: 2
                },
                {
                    id: 5,
                    title: 'Crunches',
                    list: 2
                }]
            }
        },

        computed: {
            listOne () {
            return this.items.filter(item => item.list === 1)
            },
            listTwo () {
            return this.items.filter(item => item.list === 2)
            },
            
            swap(){
                if(item.list == 1){
                    item.list = 2;
                }
                else{
                    item.list = 1;
                }
            }
            
        },
    }
</script>

<style scoped>
  .list {
    background-color:rgb(53, 51, 51);
    margin-bottom: 15px;
    padding: 10px;
  }

  .innerList {
    background-color: rgb(128, 202, 150);
    margin-bottom: 15px;
    padding: 5px;
  }
  
</style>