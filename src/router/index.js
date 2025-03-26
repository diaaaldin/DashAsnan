import { createRouter, createWebHistory } from 'vue-router'

import main from '../Views/Main.vue'
// import Login from '../Views/User/Login.vue'
import home from '../Views/Main/Home.vue'
// import profile from '../Views/Main/Profile.vue'

// // Announcement
// import announcement_managment from '../Views/Main/AnnouncementManagment.vue'
// import add_announcement from '../Views/Main/Announcement/AddAnnouncement.vue'
// import update_announcement from '../Views/Main/Announcement/UpdateAnnouncement.vue'

// import MassageAndNotefication from '../Views/Main/MassageAndNotefication.vue'
// import PaymentMovements from '../Views/Main/PaymentMovements.vue'
// import star_vehicle_managment from '../Views/Main/StarVehicleManagment.vue'

// // vehicle 
// import vehicle_managment from '../Views/Main/VehicleManagment.vue'
// import add_vehicle from '../Views/Main/Vehicle/AddVehicle.vue'
// import update_vehicle from '../Views/Main/Vehicle/UpdateVehicle.vue'

// import BodyType from '../Views/Main/Category/BodyType.vue'
// import BrandModels from '../Views/Main/Category/BrandModels.vue'
// import Brands from '../Views/Main/Category/Brands.vue'
// import Colors from '../Views/Main/Category/Colors.vue'
// import GearType from '../Views/Main/Category/GearType.vue'
// import CurrencyType from '../Views/Main/Category/CurrencyType.vue'
// import OilType from '../Views/Main/Category/OilType.vue'
// import PaintedStatus from '../Views/Main/Category/PaintedStatus.vue'
// import PaintedType from '../Views/Main/Category/PaintedType.vue'
// import Specification from '../Views/Main/Category/Specification.vue'
// import constants from '../Views/Main/Constant/Constant.vue'


// import admins from '../Views/Main/Users/Admins.vue'
// import companies from '../Views/Main/Users/Companies.vue'
// import users from '../Views/Main/Users/Users.vue'

// import AccissDenied from '../Views/AccessDenied.vue'


const routes = [
    // {
    //     path: '/login',
    //     name: "login",
    //     component: Login
    // },
    // {
    //     path: '/AccissDenied',
    //     name: "AccissDenied",
    //     component: AccissDenied
    // },
    {
        path: '/',
        name: "main",
        component: main,
        children: [
            {
                path: '',
                name: "home",
                component: home
            },
        //     {
        //         path: '/profile',
        //         name: "profile",
        //         component: profile
        //     },
        //     {
        //         path: '/announcement_managment',
        //         name: "announcement_managment",
        //         component: announcement_managment
        //     },
        //     {
        //         path: '/add_announcement',
        //         name: "add_announcement",
        //         component: add_announcement
        //     },
        //     {
        //         path: '/update_announcement',
        //         name: "update_announcement",
        //         component: update_announcement
        //     },
        //     {
        //         path: '/MassageAndNotefication',
        //         name: "MassageAndNotefication",
        //         component: MassageAndNotefication
        //     },
        //     {
        //         path: '/payment_movements',
        //         name: "PaymentMovements",
        //         component: PaymentMovements
        //     },
            
        //     {
        //         path: '/star_vehicle_managment',
        //         name: "star_vehicle_managment",
        //         component: star_vehicle_managment
        //     },
        //     {
        //         path: '/vehicle_managment',
        //         name: "vehicle_managment",
        //         component: vehicle_managment
        //     },
        //     {
        //         path: '/add_vehicle',
        //         name: "add_vehicle",
        //         component: add_vehicle
        //     },
        //     {
        //         path: '/update_vehicle',
        //         name: "update_vehicle",
        //         component: update_vehicle
        //     },
        //     {
        //         path: '/BodyType',
        //         name: "BodyType",
        //         component: BodyType
        //     },
        //     {
        //         path: '/BrandModels',
        //         name: "BrandModels",
        //         component: BrandModels
        //     },
        //     {
        //         path: '/Brands',
        //         name: "Brands",
        //         component: Brands
        //     },
        //     {
        //         path: '/Colors',
        //         name: "Colors",
        //         component: Colors
        //     },
        //     {
        //         path: '/GearType',
        //         name: "GearType",
        //         component: GearType
        //     },
        //     {
        //         path: '/CurrencyType',
        //         name: "CurrencyType",
        //         component: CurrencyType
        //     },
        //     {
        //         path: '/OilType',
        //         name: "OilType",
        //         component: OilType
        //     },
        //     {
        //         path: '/PaintedStatus',
        //         name: "PaintedStatus",
        //         component: PaintedStatus
        //     },
        //     {
        //         path: '/PaintedType',
        //         name: "PaintedType",
        //         component: PaintedType
        //     },
        //     {
        //         path: '/Specification',
        //         name: "Specification",
        //         component: Specification
        //     },
        //     {
        //         path: '/constants',
        //         name: "constants",
        //         component: constants
        //     },
        //     {
        //         path: '/admins',
        //         name: "admins",
        //         component: admins
        //     },
        //     {
        //         path: '/companies',
        //         name: "companies",
        //         component: companies
        //     },
        //     {
        //         path: '/users',
        //         name: "users",
        //         component: users
        //     },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    // to scroll to the top if any route happen
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 }; // Always scroll to the top
        }
    }
});

export default router 
