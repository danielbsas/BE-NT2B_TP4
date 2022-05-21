<template>

  <section class="src-components-http-usuarios">
<div class="jumbotron">
<button class="btn btn-success my-3 mr-3" @click="getPostXHR()">Pedir XHR</button>
<button class="btn btn-success my-3 mr-3" @click="getPostFetch()">Pedir Fetch</button>
<button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">Pedir Axios</button>
<button class="btn btn-danger my-3" @click="posts=[]">CLEAR</button>
<div class="table-responsive">
  <table class="table table-dark">
    <tr>
      <th>Nombre</th>
      <th>Email</th>
      <th>Telefono</th>
    </tr>
    <tr v-for="(post,index) in posts" :key="index">
    <td>{{post.Nombre}}</td>
    <td>{{post.Email}}</td>
    <td>{{post.NroTelefono}}</td>
    </tr>
  </table> 
</div>
</div>
  </section>

</template>

<script>
  export default  {
    name: 'src-components-http-usuarios',
    props: [],
    mounted () {

    },
    data () {
      return {
        url:"https://6284336ba48bd3c40b6c2bf9.mockapi.io/Usuarios",
        posts:[],
      }
    },
    methods: {
      wrappersXHRpromise(){
        return new Promise((resolve,reject)=>{
          const xhr = new XMLHttpRequest();
          xhr.open("get",this.url)
          xhr.addEventListener("load",()=>{
            if(xhr.status==200){
              let respuesta = JSON.parse(xhr.response);
              resolve(respuesta);
            } 
            xhr.addEventListener ("error",(e)=>{
              let error = {
                title: "Error xhr cb(status)", 
                status: e,
              };
            reject(error);
            });
          });
          xhr.send();
        });
      },
      async getPostXHR(){
        try{
          let respuesta = await this.wrappersXHRpromise();
          this.posts = respuesta;
        } catch (error) {
          console.log("Error XHRPromise", error);
        }
      },
      async getPostFetch(){
        try{
          let response = await fetch(this.url);
          let respuesta = await response.json();
          this.posts = respuesta;
        } catch (error) {
          console.error("Error Fetch", error);
        }
      },
      
      async getPostsAxios() {
      try {
          let { data } = await this.axios(this.url)
          this.posts = data
        }
        catch(error) {
          console.error('Error Axios', error)
        }
      }
    },

    computed: {
    }
}


</script>

<style scoped lang="css">
  
</style>
