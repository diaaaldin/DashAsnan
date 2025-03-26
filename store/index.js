//import * as Vue from "vue"
import { createApp } from 'vue';
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import Users from "./modules/Users/index";
import Code from "./modules/Code/index";
import Vehicles from "./modules/Vehicles/index";
import Orders from "./modules/Orders/index";
import Roles from "./modules/Roles/index";
import NotificationsAndMessages from "./modules/NotificationsAndMessages/index";
import Visits from "./modules/Visits/index";
import Statistics from "./modules/Statistics/index";
import Payment from "./modules/Payment/index";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
import callHubPlugin from './CullHubPlugin.js';

const app = createApp();
app.use(Vuex);

const store = new Vuex.Store({
    state:{
        isLogged : false,
    },
    // getter for read
    getters : getters,
    // mutations for update and operation  like setter 
    mutations : mutations,
    // for custom function 
    actions : actions,
    
     modules :{
      Users,
      Code,
      Vehicles,
      Orders,
      Roles,
      NotificationsAndMessages,
      Visits,
      Statistics,
      Payment
     },

     plugins: [
        createPersistedState({
          paths: ['Users','Vehicles','Orders','Code','Roles'
            ,'NotificationsAndMessages','Visits','Statistics','Payment'], 
        }),
        callHubPlugin
      ],
      
});



export default store;