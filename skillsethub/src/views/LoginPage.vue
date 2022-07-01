
<template>
  <div class="container">
    <br />
    <br />
    <h1 class="h1">Login to SkillSet Hub</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
      <div class="alert alert-danger" v-if="isSuccess">Incorrect Email or Password</div>
      <div class="alert alert-danger" v-if="error">
                    {{ error }}
      </div>
        <form id="form" class="row g-3 " @submit.prevent="logIn" novalidate="true">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="text" class="form-control" id="email" aria-describedby="emailHelp" v-model.trim="email"/>
             <div class="error" v-if="errors.email">
                            {{ errors.email }}
                        </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password"/>
            <div class="error" v-if="errors.password">
                            {{ errors.password }}
                        </div>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <p><a href="#">Forgot Password</a></p>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import LoginValidations from "@/services/LoginValidations.js";

export default {
  data(){
    return{
      email:'',
      password:'',
      isSuccess:false,
      errors: [],
      error:'',
      valid:false,
    };
  },
  methods:{

      logIn(){
          let validations = new LoginValidations(
                this.email,
                this.password,
            );
    
            this.errors = validations.checkValidations();
            if(this.errors.length) {

               return false;
            }
          this.error='';
        try{
          axios.post('http://localhost:8080/skillSetHubWebApi/skillsetHub/skillset/Login',
                        { email:this.email,
                          password:this.password
                        }
                )
                .then((response)=>{
                    if(response.data == 1){
                      localStorage.setItem('email',this.email);
                      this.$router.push('/search');
                    }else if(response.data == 2){
                       localStorage.setItem('email',this.email);
                       localStorage.setItem('loggedRoleId',response.data);
                       localStorage.getItem('loggedRoleId',response.data);
                       this.$router.push('/profile');
                    }else{
                        if(!this.errors.length)
                        this.isSuccess = true;
                    }
                    console.log(response);
                });
        }catch{
            console.log("Internal Server Error");
        }
      }
   }
}
</script>

<style scoped>
.h1{
    font-size: 150%;
    text-align: center;
}.error {
    color: #ff3860;
    /*font-size: 9px;
    height: 13px;*/
}
</style>