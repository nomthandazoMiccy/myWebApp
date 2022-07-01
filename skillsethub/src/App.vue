<template>
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> 
    <img :src="logo" alt="" width="100" height="40" class="d-inline-block align-text-top">
      skillsetHub</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About Us</router-link>
        </li>
      </ul>
       
      <form v-if="!isLoggedIn" class="d-flex">
        <router-link class="nav-link" to="/login">Login</router-link>
        <router-link class="btn btn-outline-primary" to="/register">Register</router-link>
      </form>
      <form v-else class="d-flex">
         <button v-if="getRole == 2" type="button" class="icon-button">
          <span class="material-icons" @click="notification">notifications_none</span>
          <span v-if="count < 0" class="icon-badge">{{count}} </span>
         </button>

        <router-link class="nav-link" @click="logout" to="/">Logout</router-link>
      </form>
    </div>
  </nav>
</div>
<br/><br/>
<router-view />
</template>

<script>
import logo from "@/assets/skillsethub.jpg";

export default{
  data(){
   return{
     logo:logo,
     count:window.localStorage.getItem('count'),
   }
  },
  computed: {
  isLoggedIn() {
    return window.localStorage.getItem('email');
  },
  getRole(){
    return window.localStorage.getItem('loggedRoleId');
  }
},
 methods: {
    logout() {
      window.localStorage.removeItem('email');
      window.localStorage.removeItem('loggedRoleId');
      window.location.reload();
    },
    notification(){
      this.$router.push('/notification');
    }
  }
 }
</script>


<style  scoped>
.icon-button{
position:relative;
display:flex;
align-items:center;
justify-content:center;
width:50px;
height:40px;
color:#989696;
background:#dddddd;
border:none;
outline:none;
border-radius:50%;
}
.icon-button:hover{
cursor:pointer;
}
.icon-button:active{
  background:#cccccc;
}
.icon-badge{
position:absolute;
top:-10px;
right:-10px;
width:25px;
height:25px;
background:red;
color:#ffffff;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%
}
</style>
