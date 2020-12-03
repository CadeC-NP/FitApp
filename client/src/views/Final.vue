<template>
    <section>
        <p class="content"><b>Final</b> {{ selected }}</p>
        <b-field label="Find a User">
            <b-autocomplete
                v-model="name"
                :list="filteredDataArray"
                placeholder="e.g. Cade, Donald, Mickey"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>

    import {getNames} from "@/models/users";
    import session from "@/models/session";

    export default {
        data() {
            return {
                list: [],
                name: '',
                selected: null
            }
        },

        async created(){
            this.list = await getNames(); 
        },

        computed: {
            filteredDataArray(){
                return this.list.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        },

    }
</script>