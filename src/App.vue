<template>
<div id="app">
  <div class="container grid-xs py-2">
    <header class="navbar">
      <section class="navbar-section">
        <RouterLink class="btn btn-link" to="/" >Home</RouterLink>
        <RouterLink class="btn btn-link" to="/display" >Tasks</RouterLink>
      </section>
      <section class="navbar-center">
        <img class="img-responsive" src="@/assets/task.png" alt="CoffeeTagTodo">
      </section>
      <section class="navbar-section">
        <a href="https://www.linkedin.com/in/levifrota27/" target="blank" class="btn btn-link">LinkedIn</a>
        <a href="https://github.com/levifrota" target="blank" class="btn btn-link">GitHub</a>
      </section>
    </header>
  </div>
  <RouterView />
</div> 
</template>

<style scoped>
  img {
    max-width: 150px;
    margin: 0 auto;
  }
</style>