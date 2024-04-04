<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container rounded-2">
            
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <router-link to="/">
                   <img class="logo-img" src="https://i.postimg.cc/K8xFmwgc/5.png" alt="logo">     
                </router-link>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/" a class="nav-link">
                    Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <a href="#about" a class="nav-link">
                        About Me
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#resume" a class="nav-link">
                        Education & Experience
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#projects" a class="nav-link">
                        My Projects
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#testimonials" a class="nav-link">
                        References
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#contact" to="/contact" a class="nav-link">
                        Reach Out
                    </a>
                </li>  
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBarComp'

    }
</script>

<style scoped>
.navbar{
    background-color: #fff;
}
.logo-img {
    width: 125px;
    padding: 5px;
}
.nav-item {
    /* margin: 5px; */
    margin: 0 10px;
}
nav {
  padding-left: 30px;
  padding-right: 30px;
}
.nav-item a:hover{
  font-weight: bold;
  color: #a8dadc;
}
.nav-item a.router-link-exact-active {
  color: #a8dadc;
  border-radius: 25px;
  box-shadow: 0px 0px 10px 0px #a8dadc;
}
</style>