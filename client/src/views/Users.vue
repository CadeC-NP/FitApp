<template>
  <div class="page">
      <h2 class="title is-2 has-text-success mb-6 has-text-centered">Users Page</h2>

        <table class="table is-narrow has-background-grey-light is-hoverable is-fullwidth">
            <thead><tr>
                <th class = "has-text-success-dark">id</th>
                <th class = "has-text-success-dark">First Name</th>
                <th class = "has-text-success-dark">Last Name</th>
                <th class = "has-text-success-dark">Password</th>
                <th class = "has-text-success-dark">DOB</th>
                <th class = "has-text-success-dark">Type</th>
            </tr></thead>
            <tbody>
                <tr v-for=" (x, i) in list " 
                      :key="i"
                      :i="i"
                      :post="x">
                    <th>{{x.id}}</th>
                    <td>{{x.FirstName}}</td>
                    <td>{{x.LastName}}</td>
                    <td>{{x.Password}}</td>
                    <td>{{x.DOB}}</td>
                    <td>{{x.Type}}</td>
                </tr>
            </tbody>
        </table>

  </div>
</template>

<script>
import {getList} from "@/models/users";
import session from "@/models/session";
export default {
    data(){
        return {
            list: []
        }
    },
    async created(){
        this.list = await getList(); 
    },
    components: {
        
    },
    methods: {
        
    }
}
</script>

<style>
</style>