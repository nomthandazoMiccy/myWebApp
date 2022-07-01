<template>
<br/><br/><br/>
<div class="container rounded bg-white mt-5 mb-5" v-for="content in contents" :key="content.UserId">
   
    <form class="row">

        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img class="rounded-circle mt-5" style="width:150px;" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
            <span class="font-weight-bold">{{content.user.firstName}}</span><span class="text-black-50">{{content.user.email}}</span><span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
            
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label> <input type="text" class="form-control"  placeholder="first name" v-model="content.user.firstName"></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" v-model="content.user.lastName" placeholder="surname"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Email Address</label><input type="text" class="form-control" placeholder="enter email address" v-model="content.user.email" readonly></div>
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" v-model="content.user.contact"></div>
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address" v-model="content.user.address"></div>
                </div>
                <!--<div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
                </div>
                <div class="mt-5 text-center"><button  v-on:click="updateServiceProfile" class="btn btn-primary" type="button">Save Profile</button></div>-->
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span></div><br>
                <div class="col-md-12"><label class="labels">Job Title</label><input type="text" class="form-control" placeholder="e.g Software Developer"   v-model="content.jobTitle"></div>
                <div class="col-md-12"><label class="labels">Years of Experience</label><input type="text" class="form-control" placeholder="experience"  v-model="content.experience"></div>
                <div class="col-md-12"><label class="labels">Programing Language</label><input type="text" class="form-control" placeholder="programming languages"  v-model="content.programmingLanguage"></div>
                <div class="col-md-12"><label class="labels">Brief Description</label><input type="text" class="form-control" style="height:70px;" placeholder="enter project worked on"  v-model="content.skillDesc"></div>
            </div>
        </div>
        <div class="mt-5 text-center"><button  v-on:click="updateServiceProfile" class="btn btn-primary" type="button">Save Profile</button></div>
       
    </form>
    
</div>
<br/><br/><br/><br/>
      <footer class="py-5 bg-dark">
            <div class="container" style="height:60px"><p class="m-0 text-center text-white">Copyright &copy; SkillsetHub 2022</p></div>
      </footer>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
       contents:
           {
            skillDesc: '',
            programmingLanguage: '',
            jobTitle: '',
            experience: '',
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    address: '',
                    contact: '',
                }
            },
       }
       
    },
  created: function () {
    axios
      .get('http://localhost:8080/skillSetHubWebApi/skillsetHub/skillset/user/' + window.localStorage.getItem('email'))
      .then((response) => {
        this.contents = response.data;
        console.log(this.contents);
      });
  },
  methods:{
    async updateServiceProfile(){
        
          console.log(this.contents.experience);
          for (const item of this.contents) {
                window.localStorage.setItem('name',item.user.firstName);
                window.localStorage.setItem('surname',item.user.lastName);
                window.localStorage.setItem('address',item.user.address);
                window.localStorage.setItem('userEmail',item.user.email);
                window.localStorage.setItem('phone',item.user.contact);
                window.localStorage.setItem('title',item.jobTitle);
                window.localStorage.setItem('skills',item.skillDesc);
                window.localStorage.setItem('pLanguage',item.programmingLanguage);
                window.localStorage.setItem('exp',item.experience);
              console.log(item.user.firstName);
          }
           try{
               
                axios.put('http://localhost:8080/skillSetHubWebApi/skillsetHub/skillset/profile/' + window.localStorage.getItem('email'),
                 {  
                     skillDesc:window.localStorage.getItem('skills'),
                     programmingLanguage:window.localStorage.getItem('pLanguage'),
                     jobTitle:window.localStorage.getItem('title'),
                     experience:window.localStorage.getItem('exp'),
                     user:{firstName:window.localStorage.getItem('name'),
                           lastName:window.localStorage.getItem('surname'),
                           email:window.localStorage.getItem('userEmail'),
                           address:window.localStorage.getItem('address'),
                           contact:window.localStorage.getItem('phone')
                    }
                 }
                ).then((response)=>{
                            
                      if(response.data == 'User Profile Updated Successfully'){
                            this.$toast.success("Profile has been updated successfully",{
                            position:"top-right"
                            });
                            setTimeout( () => this.$router.push({ path: '/profile'}), 2000);
                    }else{
                       this.$toast.error("Failed to update the profile",{
                            position:"top-right"
                            });
                            
                    }
                        });
                    }catch{
           
                    console.log("Something went wrong");
                    console.log(this.contents);
                    
             
        }
      }
  }
}
</script>


<style scoped>
body {
    background:  rgb(99, 22, 252);
}

.form-control:focus {
    box-shadow: none;
    border-color:  rgb(99, 22, 252);
}

.profile-button {
    background: rgb(99, 22, 252);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background:  rgb(99, 22, 252);
}

.profile-button:focus {
    background: rgb(99, 22, 252);
    box-shadow: none
}

.profile-button:active {
    background:  rgb(99, 22, 252);
    box-shadow: none
}

.back:hover {
    color:  rgb(99, 22, 252);
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background:  rgb(99, 22, 252);
    color: #fff;
    cursor: pointer;
    border: solid 1px  rgb(99, 22, 252);
}
</style>