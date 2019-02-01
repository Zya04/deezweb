<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar">
        <router-link to="/">Home</router-link> |
        <router-link to="/SearchTitle">Search title</router-link> |
        <router-link to="/Favorites">Favorites</router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: white;
    &.router-link-exact-active {
      color: white;
    }
  }
}
.navbar {
    background-color: #42b983;
    overflow: hidden;
    margin-bottom: 3em;
}

.navbar a:link,
.navbar a:visited {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 0.75em 1em;
    transition: all 150ms;
    transform: scale(1);
}
.navbar a:hover {
    background-color: #128953;
    transform: scale(1.05);
}
.navbar a.router-link-exact-active {
    background-color: #128953;
}
.navbar a:active {
    transition: none;
    color: #128953;
    background-color: #82f9c3
}
</style>
