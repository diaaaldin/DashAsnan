//import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from '../store/index';
import moshaToast from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import 'cropperjs/dist/cropper.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import i18n from './i18n'
// import VuePhotoSphereViewer from 'vue-photo-sphere-viewer';

// import 'vue-photo-sphere-viewer/dist/photo-sphere-viewer.css';

const app = createApp(App);

axios.defaults.withCredentials = true;
  // app.component('VuePhotoSphereViewer', VuePhotoSphereViewer);

app.use(router);
app.use(VueAxios, axios);
app.use(store);
app.use(moshaToast);
app.use(ElementPlus);
app.use(i18n);
app.mount('#app');
