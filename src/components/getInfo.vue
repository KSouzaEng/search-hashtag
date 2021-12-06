<template>
  <div  id="info">
   <div class="row mt-5 texto" v-if="this.palavra" id="texto">
  <div class="col-sm-6  mb-3"  v-for="item in filteredResources" :key="item.id">
    <div class="card shadow rounded-top">
      <div class="card-body">
      <div class="row">
        <div class="col-md-12">
            <p class="card-text text-start  mb-3 texto"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16" style="color:#00acee">
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
            </svg>   <strong>{{item.user_name}}</strong></p>
        </div>
        <div class="col-md-12">
            <p class="card-text text-start mb-3" style="color:#000000;font-weith:900">{{item.tweet}}</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
// import api from '../services/api'
// import axios from 'axios'
export default {

props: ['hashtag','teste'],

data(){
    return {
        dados: [],
        palavra: '',
        resources:[
            {id:1,user_name:"Antonio da Silva",title:"developer",tweet:"Go to study python  #developer"},
            {id:2,user_name:"Karem de Souza",title:"programing",tweet:"Go to study JS  #developer \n #programing \n #love"},
            {id:3,user_name:"José MAria",title:"sql",tweet:"Go to study Sql em 3.2.1  #developer #sql \n #DB"},
            {id:4, user_name:"Carlos Cabral",title:"developer",tweet:"Go to study C++  #developer \n #C++ \n  #goaAhead"},
            {id:5, user_name:"Maria Silva",title:"developer",tweet:"Go to study C#  #developer \n  #POO \n  #Concentration"},
            {id:6, user_name:"Maria Santos",title:"developer",tweet:"Go to study so much  #hardwork \n  #estudent \n  #Concentration"},
            {id:7, user_name:"Lagertha LothBrook",title:"worrior",tweet:"Go to war with my son #war \n  #vikings \n  #figth"},
            {id:8, user_name:"Alan Souza",title:"student ",tweet:"Go to the class of javascript #javascript \n  #class  \n  #programing"},
            {id:9, user_name:"José de arimeteia",title:"developer",tweet:"Go to the work in google #work #programing #quantum #exactyMonment"},
            {id:10, user_name:"Arnold Cabeça de Bigorna",title:"tester",tweet:"Go test with vuejs and jest  #jest #vuejs #test #semapi #foi"},

        ]
        
    }
},
watch:{
    hashtag(val){
        
            this.getDataApi(val)
          
    },
   
 
},
 computed: {
    filteredResources (){
      if(this.palavra){
      return this.resources.filter((item)=>{
          return this.palavra.toLowerCase().split(' ').every(v => item.tweet.toLowerCase().includes(v))
      })
      }else{
        return this.resources;
        
      }
    },
    

  },
methods:{
    async getDataApi(val){
        this.palavra = val;
      //  const token= 'AAAAAAAAAAAAAAAAAAAAAPANWgEAAAAACfhgNTMpNVRK5SHc45gjhdghmpw%3DU7l2hcx9nu5xPp7Q6wCOOi9lPpc9Uojmbb26DAG4v09LOcpWp3'
      // const api_key = '88dCUlUnQPrsmXwgCfeVHBzyk'
      // const api_key_secret = 'JbUEQMmalLfYhHxFYszLGynXcd6dWanX0b36NtbNCyX2pm9xIB'
      // const access_token = '1466221618120830977-e85ls9INUkALLD63srcUiGH30RCY23'
      // const access_token_secret = 'fkCXsORkSfg0AYY5fpFQuTlcVwGagoMUQl3GmE9hWGRGq'


      // const options = {
      //     method: 'GET',
      //     headers: { 'content-type': 'application/x-www-form-urlencoded',  'Authorization': 'Bearer ' + token,access_token,access_token_secret,api_key,api_key_secret},
      //     url: 'https://4a1f-143-137-95-25.ngrok.io/tweets?ids=20,1276230436478386177,1276501058211262464,1275244210439028736,1274087695145332736,1274087694105075714,1274087692003770368,1274087690758090752,1274087689487134720,1274087688321200128,1274087687469715457,1274034244700930049,1274025734990897152,1276440670631124993,1276426779796750338,1276420300641406976,1276346768490328064,1276301871515222017,1276175944105865216,1276172826764926976,1276172649299763200,1276171938449121280,1276171724111765504,1276171627386957824,1276170528387035136,1276168667517071361,1276048583557394432,1276035881992740864,1276009123876749312,1276009123620851712,1275981562811527170,1275930077927141376,1275832645574733824,1275817073755611136,1275816972459012101,1275806248525389824,1275806002307231744,1275805935659700225,1275805533690138630,1275628222818877440,1275506262327918599,1275490500108259329,1275451488102256645,1275451397459243009,1275332886015520768,1275327412616617984,1275128589244157958,1275089113742336000,1276312753393680384,1275556031876087808,1274094606498459651,1274018381662793729,1274013886178418688,1276163304541618180,1275875669600202753,1275856634837897223,1275561823471718401,1275518378271141890,1275473478779469825&tweet.fields=author_id,entities,attachments,conversation_id,created_at,referenced_tweets',
      //   };
      // await axios(options).then(response => function(){
      //   console.log(response.data)
      // });

    }
}
}
</script>

<style>

</style>