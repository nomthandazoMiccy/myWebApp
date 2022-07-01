/* eslint-disable */ 
<template>
     <header class="py-5">
                <div class="container px-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-xxl-6">
                            <div class="text-center my-5">
                                <h1 class="fw-bolder mb-3">Our mission</h1>
                                <p class="lead fw-normal text-muted mb-4">The Skillset Hub Group allow clients to interact with the App regardless of any device and location to search and hire individual people with different skillset. It provides secure and fast communication between clients and service providers. It maintains good quality Services to ensure that clients can Hire people who meet their requirement criteria and ensure their identity is secured.</p>
                                <a class="btn btn-primary btn-lg" href="#scroll-target">Read our story</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- About section one-->
            <section class="py-5 bg-light" id="scroll-target">
                <div class="container px-5 my-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6"><img class="img-fluid rounded mb-5 mb-lg-0"  :src="image" /></div>
                        <div class="col-lg-6">
                            <h2 class="fw-bolder">Our Values</h2>
                            <p class="lead fw-normal text-muted mb-0">Teamwork. When people work together, they can create something greater than themselves as individuals. </p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- About section two-->
            <section class="py-5">
                <div class="container px-5 my-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6 order-first order-lg-last"><img class="img-fluid rounded mb-5 mb-lg-0" :src="images"/></div>
                        <div class="col-lg-6">
                            <h2 class="fw-bolder">Growth &amp; beyond</h2>
                            <p class="lead fw-normal text-muted mb-0">Hire Service Providers who share the company's vision. It's important to hire Service Providers who are motivated and enthusiastic about your company's products.</p>
                        </div>
                    </div>
                </div>
            </section>

     <footer class="py-5 bg-dark">
       <div class="container"><p class="m-0 text-center text-white">Copyright &copy; SkillsetHub 2022</p></div>
      </footer>
</template>
<script>
import image from "@/assets/download1.jpg";
import images from "@/assets/download2.jpg";
export default {
    data() {
         return{
             image:image,
             images:images
         }   
    },
}
</script>
<style scoped>
 .h1{
   text-align: center;
 }
</style>