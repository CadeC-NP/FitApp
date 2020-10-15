<template>
    <div class="card">
    <header class="card-header  has-text-centered">
        <p class="card-header-title has-text-success-dark has-background-grey-light" ref="editable" contenteditable v-on="listeners">
            Workout Day Type
        </p>
    </header>
        <div class="card-content">
            <div class="content has-text-centered" ref="editable" contenteditable v-on="listeners">
                test
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    },
    value: {
      type: String,
      default: '',
    },
    computed: {
        listeners() {
        return { ...this.$listeners, input: this.onInput };
        },
    },
    mounted() {
        this.$refs.editable.innerText = this.value;
    },
    methods: {
        onInput(e) {
        this.$emit('input', e.target.innerText);
        },
    },
}
</script>

<style>
    .card{
        margin-bottom: 30px;
    }
</style>