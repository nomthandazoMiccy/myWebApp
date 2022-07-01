<template>
  <br/>
  <div >
  <h1 class="h1">Search For Skills</h1>
  <br/>
  <div class = "container">
     <div class="row">
     <div class="col-md-3"></div>
      <div class="col-md-6">
          <form class="d-flex" @submit.prevent="searchItem">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
            <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
     <div class="col-md-3"></div>
     </div>
 </div>
 </div>
      <!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5" v-for="content in contents" :key="content.UserId">
                        <div class="card h-100">
                            <!--  image-->
                            <img class="card-img-top" :src="image" />
                            <!-- Service provider details-->
                            <div class="card-body p-4">
                                
                                <div class="text-center" > 
                                    <!-- Job Title -->
                                    <h5 class="fw-bolder">{{content.jobTitle}}</h5>
                                   <!-- <h5 class="fw-bolder" >{{content.user.firstName}} {{content.user.lastName}}</h5>-->
                                    <!-- Name-->
                                    {{content.user.firstName}} {{content.user.lastName}}
                                    <div class="text-center" >
                                      {{content.programmingLanguage}}
                                    </div>
                                </div>
                            </div>
                            <!-- View Profile-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">
                                    <router-link class="btn btn-outline-dark mt-auto" to="/viewprofile">
                                    <button @click="viewUser(content.userId)" class="border">View Profile</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
      <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; SkillsetHub 2022</p></div>
      </footer>
</template>

<script>
/* eslint-disable */ 
import axios from "axios";
import image from "@/assets/download.png";

export default {
  name: "HomePage",
  data() {
    return {
      search:'',
      image:image,
      contents:[{
          experience: '',
          jobTitle: '',
          programmingLanguage: '',
          skillDesc: '',
          skillId:'',
          user:{
               address: '',
               email: '',
               firstName:'',
               id: '',
               lastName: '',
               password: ''
          },
          userId:''
        },
      ],
    };
  },
  
  created: function () {
    axios
      .get('http://localhost:8080/skillSetHubWebApi/skillsetHub/search/all')
      .then((res) => {
        this.contents = res.data;
      });
  },
  methods:{
    searchItem(){
        try{
          axios.get('http://localhost:8080/skillSetHubWebApi/skillsetHub/search/'+ this.search

                )
                .then((response)=>{
                 this.contents = response.data;
                 localStorage['data'] = JSON.stringify( this.contents)
                 var data = localStorage.getItem['data'];
                 console.log("data"+ response.data)
                 
                });
        }catch{
            console.log("Internal Server Error");
        }
     
     },
     viewUser(id){
        try{
          axios.get('http://localhost:8080/skillSetHubWebApi/skillsetHub/skillset/'+ id)
                .then((response)=>{
                      
                  this.contents = response.data;
                  window.location.reload();
                  localStorage.setItem('userId',id);
                  localStorage.setItem('spEmail',this.contents.user.email);
                  console.log(localStorage.getItem('spEmail'));
                  console.log( localStorage.getItem('userId'));
                });
        }catch{
            console.log("Internal Server Error");
        }
     
     },
     say() {
      alert(message)
  }
  }
};
</script>

<style scoped>
 .h1{
   text-align: center;
 }
 .border{
   border-block: none;
   background-color: white;
 }
</style>