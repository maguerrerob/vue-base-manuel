<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import { ref } from 'vue';
  const str = ref("")
</script>

<template>
  <header class="row">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img
            alt="Vue logo"
            class="logo img-fluid nav-item"
            src="./assets/logo.svg"
            width="50"
            height="50"
          />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link"><RouterLink to="/">Home</RouterLink></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><RouterLink to="/Watchlist">Watchlist</RouterLink></a>
            </li>
          </ul>
          <div class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar Película" aria-label="Search" v-model="str">
            <button class="btn btn-outline-success" @click="$router.push('/Buscador?cadena=' + str)">Search</button>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
