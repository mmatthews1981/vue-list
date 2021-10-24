<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <router-link to="/" class="navbar-brand">
      <img alt="Vue logo" src="../assets/logo.png" />Vue List
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Welcome</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/listing" class="nav-link">Listing</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
img {
  max-height: 48px;
}
</style>