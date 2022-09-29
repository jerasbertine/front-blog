<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Blog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home
            <span class="visually-hidden">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'create'}">Create Account</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'users'}">Users</router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
</template>

<script>
    export default {
        name:'HeaderVue'
    }
</script>