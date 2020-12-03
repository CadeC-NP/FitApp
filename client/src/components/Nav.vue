<template>
<form>
<nav class="navbar container is-fixed-top is-info has-background-grey-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="../assets/logo.png" width="40" height="28">
    </a>

    <a role="button" class="navbar-burger burger" :class="{'is-active': isActive}" @click= "isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item has-text-success">Home</router-link>
      <router-link to="/about" class="navbar-item has-text-success">About</router-link>
      <router-link to="/schedule" class="navbar-item has-text-success">Schedule</router-link>
      <router-link to="/workouts" class="navbar-item has-text-success">Workouts</router-link>
      <router-link to="/final" class="navbar-item has-text-success">Final</router-link>


      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link has-text-success">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            <router-link to="/about" class="navbar-item has-text-success">About</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/report" class="navbar-item has-text-success">Report an Issue</router-link>
          </a>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link has-text-success">
          Admin
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            <router-link to="/users" class="navbar-item has-text-success">Users</router-link>
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <LoginBadge />
      </div>
    </div>
  </div>
</nav>
</form>


</template>

<script>
import LoginBadge from "@/components/LoginBadge";
export default {
  data: ()=> ({
      isActive: false
  }),
  methods: {

  },
  components: {
    LoginBadge
  }
}
</script>

<style>
  form{
    margin-bottom: 45px;
  }
</style>