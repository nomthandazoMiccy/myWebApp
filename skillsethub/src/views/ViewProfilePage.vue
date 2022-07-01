<template>
  <section class="h-100 h-custom" style="background-color: white">
    <div class="container py-5 h-100" >
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <div class="card card-registration card-registration-2" style="border-radius: 15px" v-for="content in contents" :key="content.UserId">
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-lg-8" >
                  <div class="p-5">
                    <div class="d-flex justify-content-between align-items-center mb-5" >
                      <h1 class="fw-bold mb-0 text-black">{{content.jobTitle}}</h1>
                    </div>
                    <hr class="my-4" />
                    <div
                      class="
                        row
                        mb-4
                        d-flex
                        justify-content-between
                        align-items-center
                      "
                    >
                      <div class="col-md-2 col-lg-2 col-xl-2">
                        <img
                          :src="profile" 
                          class="img-fluid rounded-3"
                          width="400px" alt="..."
                        />
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-3 " >
                        <h6 class="text-black mb-0">EXPERIENCE: {{content.experience}}</h6>
                        <h6 class="text-black mb-0">LANGUAGE: {{content.programmingLanguage}}</h6>
                        <h6 class="text-black mb-0">PROJECT: {{content.skillDesc}}</h6>
                      </div>
                      
                      <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      </div>
                    </div>

                    <div class="pt-5">
                      <h6 class="mb-0">
                        <router-link class="text-body" to="/search">
                          <i class="fas fa-long-arrow-alt-left me-2"></i>Go Back
                        </router-link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 bg-grey">
                  <div class="p-5">
                    <h3 class="fw-bold mb-5 mt-2 pt-1">Personal Information</h3>
                    <hr class="my-4" />

                    <div class="d-flex justify-content-between mb-4">
                      <h5 class="text-uppercase">Name</h5>
                      <h5>{{content.user.firstName}} {{content.user.lastName}}</h5>
                    </div>

                   <div class="d-flex justify-content-between mb-4">
                      <h5 class="text-uppercase">Email</h5>
                      <h5>{{content.user.email}}</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-4">
                      <h5 class="text-uppercase">Address</h5>
                      <h5>{{content.user.address}}</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-4">
                      <h5 class="text-uppercase">Contact</h5>
                      <h5>{{content.user.contact}}</h5>
                    </div>

                    <hr class="my-4" />
                     <button type="button" @click="hireService" class="btn btn-primary">Hire Service</button>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br /> <br /><br /> <br />
<footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">
        Copyright &copy; SkillsetHub 2022
      </p>
    </div>
</footer>
</template>

<script>
import axios from "axios";
import profile from "@/assets/download1.jpg";

export default {
  name: "ViewProfilePage",
   computed: {
  isLoggedIn() {
    return window.localStorage.getItem('email');
  }
},
  data() {
    return {
      profile:profile,
      contents: null,
      loggedIn: '',
      spEmail:'nomthandazor37@gmail.com'
     };
  },
 created: function () {
    axios
      .get('http://localhost:8080/skillSetHubWebApi/skillsetHub/skillset/' + window.localStorage.getItem('userId'))
      .then((res) => {
        this.contents = res.data;
      });
  },
methods:{
    hireService(){
          this.loggedIn = window.localStorage.getItem('email');
          console.log("gjhghfghg" + this.loggedIn);
        if(this.loggedIn != null){
        try{
          axios.post('http://localhost:8080/skillSetHubWebApi/skillsetHub/skillset/email',{
                    spEmail:this.spEmail
          }).then((response)=>{
                    window.localStorage.setItem('count',response.data)
                    this.$toast.success("Email has been sent successsfully",{
                    position:"top-right"
                     });
                     window.localStorage.getItem('count');
                     console.log(response);
                });
        }catch{
            console.log("Internal Server Error");
        }
      }else{
          this.$router.push('/login');
      }
     },
  },
  login() {
    this.$router.push('/login');
  },
}
</script>

<style scoped>
@media (min-width: 1025px) {
.h-custom {
height: 100vh !important;
}
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 1rem;
line-height: 2.15;
padding-left: .75em;
padding-right: .75em;
}

.card-registration .select-arrow {
top: 13px;
}

.bg-grey {
background-color: #eae8e8;
}

@media (min-width: 992px) {
.card-registration-2 .bg-grey {
border-top-right-radius: 16px;
border-bottom-right-radius: 16px;
}
}

@media (max-width: 991px) {
.card-registration-2 .bg-grey {
border-bottom-left-radius: 16px;
border-bottom-right-radius: 16px;
}
}
</style>