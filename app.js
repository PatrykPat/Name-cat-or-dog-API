// Define components
const CatComponent = {
    template: `
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div>
          <img :src="catImage" alt="Random Cat" width="400" height="400">
        </div>
        <div>
          <h2>Give this cat a name:</h2>
          <input type="text" v-model="catName">
          <button @click="submitName">Submit</button>
        </div>
      </div>
    `,
    data() {
      return {
        catImage: '',
        catName: '',
        loading: true
      };
    },
    created() {
      this.fetchCatImage();
    },
    methods: {
      fetchCatImage() {
        // Fetch cat image from TheCatAPI
        fetch('https://api.thecatapi.com/v1/images/search', {
          headers: {
            'x-api-key': 'live_ERY6fm8jeDrrvjGeHZOHQuYHwJjmEt1QLZstsLm2GVFdwlE3ftRe0IjCEpAyaRSC'
          }
        })
          .then(response => response.json())
          .then(data => {
            this.catImage = data[0].url;
            this.loading = false;
          })
          .catch(error => {
            console.error('Error:', error);
            this.loading = false;
          });
      },
      submitName() {
        // Handle submission of cat name
        console.log('Cat Name:', this.catName);
        this.catName = '';
        this.fetchCatImage();
      }
    }
  };
  
  const DogComponent = {
    template: `
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div>
          <img :src="dogImage" alt="Random Dog" width="400" height="400">
        </div>
        <div>
          <h2>Give this dog a name:</h2>
          <input type="text" v-model="dogName">
          <button @click="submitName">Submit</button>
        </div>
      </div>
    `,
    data() {
      return {
        dogImage: '',
        dogName: '',
        loading: true
      };
    },
    created() {
      this.fetchDogImage();
    },
    methods: {
      fetchDogImage() {
        // Fetch dog image from TheDogAPI
        fetch('https://api.thedogapi.com/v1/images/search', {
          headers: {
            'x-api-key': 'live_VpcSVyPOcrFsnV2EQvkMgYQp2uGZuQH7FeBRQRJjg0jocZIqldiUxZdp2trFYoF9'
          }
        })
          .then(response => response.json())
          .then(data => {
            this.dogImage = data[0].url;
            this.loading = false;
          })
          .catch(error => {
            console.error('Error:', error);
            this.loading = false;
          });
      },
      submitName() {
        // Handle submission of dog name
        console.log('Dog Name:', this.dogName);
        this.dogName = '';
        this.fetchDogImage();
      }
    }
  };
  
  // Create router
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
      { path: '/cats', component: CatComponent },
      { path: '/dogs', component: DogComponent }
    ]
  });
  
  // Create app
  const app = Vue.createApp({
    data() {
      return {
        activeComp: 'cats'
      };
    }
  });
  
  app.use(router);
  app.mount('#app');