<template>
  <div class="container">
    <br />
     <h1 class="h1">Register to SkillSet Hub</h1>
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="alert alert-success" v-if="isSuccess">User Registred Successfuly</div>
        <div class="alert alert-danger" v-if="error">
                    {{ error }}
      </div>
        <form class="row g-3" ref="form_1" @submit.prevent="addUser">
          <div class="col-md-6">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstName" v-model="firstName" required/>    
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName" v-model="lastName"  required/>
          </div>
          <div class="col-12">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder=" i.e email@gmail.com"
              required
              v-model="email"
            />
          </div>
          <div class="col-12">
            <label for="contact" class="form-label">Phone Number</label>
            <input
              type="contact"
              class="form-control"
              id="contact"
              placeholder=" i.e 0712345678"
              required
              v-model="contact"
            />
          </div>
          <div class="col-12">
            <label for="address" class="form-label" >Address</label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="i.e 1234 Main St"
              required
              v-model="address"
            />
          </div>
          <div class="col-12">
            <label for="clientType" class="form-label" >Choose User Type</label>
            <select  class="form-control" name="input4Type" id="clientType" v-model="clientType" required>
              <option value="client">Client</option>
              <option value="serviceProverder">Service Provider</option>
            </select>
          </div>
          <div v-if="clientType == 'serviceProverder'" class="col-md-6">
            <label for="title" class="form-label">Job Title</label>
            <input type="text" class="form-control" id="title" v-model="jobTitle"  required/>
          </div>
          <div v-if="clientType == 'serviceProverder'" class="col-md-6">
            <label for="experience" class="form-label"> Years of Experience</label>
            <input type="text" class="form-control" id="experience" required v-model="experience"/>
          </div>
          <div v-if="clientType == 'serviceProverder'" class="col-12">
            <label for="inputLanguage" class="form-label" >Programming Languages</label>
            <input
              type="text"
              class="form-control"
              id="inputLanguage"
              required
              v-model="programmingLanguage"
            />
          </div>
          <div v-if="clientType == 'serviceProverder'" class="col-12">
            <label for="inputDescription" class="form-label" >Brief Description</label>
            <input
              type="text"
              class="form-control"
              id="inputDescription"
              required
              v-model="skillDesc"
            />
          </div>
          <div class="col-md-6">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" />
          </div>
          <div class="col-md-6">
            <label for="confirmPassword" class="form-label">Confirm Passsword</label>
            <input type="password" class="form-control" id="confirmPassword" required />
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Register</button>
          </div>
          <p><router-link to="/login">Login</router-link></p>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RegisterValidation from "@/services/RegisterValidation.js";

 export default {
    data(){
        return{
            firstName:'',
            lastName:'',
            email:'',
            contact:'',
            address:'',
            clientType:'',
            password:'',
            skillDesc:'',
            programmingLanguage:'',
            experience:'',
            jobTitle:'',
            userRole:1,
            serviceRole:2,
            isSuccess:false,
            errors:[],
            error:'',
    };
 },
  methods:{
      addUser(){
        let validations = new RegisterValidation(
               
                this.email,
                this.password,
                this.firstName,
                this.lastName,
                this.contact,
                this.address,
                this.clientType,
            );
            this.errors = validations.checkValidations();
            console.log("Validations " + this.errors.length);
            if (!this.errors.length) {
                return false;
                }
            
           /*this.error = '';*/
        try{
           console.log("the clientType " + this.clientType )

           if(this.clientType == "client"){
              axios.post('http://localhost:8080/skillSetHubWebApi/skillsetHub/skillset',
                        { 
                          skillDesc:this.skillDesc,
                          programmingLanguage:this.programmingLanguage,
                          jobTitle:this.jobTitle,
                          experience:this.experience,
                          user:{firstName:this.firstName,
                                lastName:this.lastName,
                                email:this.email,
                                contact:this.contact,
                                address:this.address,
                                role:this.userRole,
                                password:this.password}
                        }
                )
                .then((response)=>{
                     this.$refs.form_1.reset();
                     this.isSuccess = false;
                     
                     this.$toast.success("User Has been registered successfully",{
                       position:"top-right"
                     });
                     setTimeout( () => this.$router.push({ path: '/login'}), 3000);
                     console.log(response);
                });
           }else{
               axios.post('http://localhost:8080/skillSetHubWebApi/skillsetHub/skillset',
                        {
                          skillDesc:this.skillDesc,
                          programmingLanguage:this.programmingLanguage,
                          jobTitle:this.jobTitle,
                          experience:this.experience,
                          user:{firstName:this.firstName,
                                lastName:this.lastName,
                                email:this.email,
                                contact:this.contact,
                                address:this.address,
                                role:this.serviceRole,
                                password:this.password}
                            }
                )
                .then((response)=>{
                     this.$refs.form_1.reset();
                     this.isSuccess = false;
                     
                     this.$toast.success("User Has been registered successfully",{
                       position:"top-right"
                     });
                     setTimeout( () => this.$router.push({ path: '/login'}), 3000);
                     console.log(response);
                });
           }
        }catch{
            console.log("User not registred");
         }
      /*}else{
          return true;
        }*/
      }

   }
 }
</script>

<style scoped>
.h1{
    font-size: 150%;
    text-align: center;
}
</style>

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