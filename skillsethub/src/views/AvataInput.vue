<template>
    <!---<div>
        <input type = "file" accept="image" class="hidden" ref="file" @change="change">
        <img src="src" alt="Avatar" class="h-24 w-24 rounded-full object-cover">
        <button @click="browse()">Browse</button>
    </div>-->
    <div class="hello">
        <input type="file" @change="onFileSelected">
        <button @click="onUpload">Upload</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
   /* prps:{
        value:File,
        dafaultSrc:String,
    },*/
    data(){
        return{
            src:this.dafaultSrc,
            file:null,
            selectedFile:null,
        }
    },
    methods:{
        browse(){
           this.$refs.file.click();
        },
        change(e){
            this.file = e.target.file[0];
           this.$emit('input',e.target.files[0]);
           let reader = new FileReader();
           reader.readAsDataURL(this.file);
           reader.onload=(e)=>{
               this.src = e.target.result;
           }
        },
        onFileSelected(event){
            console.log(event);
            this.selectedFile = event.target.files[0]
        },
        onUpload(){
            const fd = new FormData();
            fd.append('image',this.selectedFile,this.selectedFile.name)
            axios.post('http://localhost:8080/skillSetHubWebApi/skillsetHub/skillset/upload',fd,{
                onUploadProgress:uploadEvent=>{
                  console.log('Upload Progress: ' + Math.round(uploadEvent.loaded  / uploadEvent.total * 100) + '%')
                }
            })
        }
    }
}
</script>