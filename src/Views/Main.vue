<script>
//import { RouterView } from 'vue-router';
import { mapState, mapGetters, mapActions } from "vuex";
import Sidebar from '@/components/Main/sidebar.vue';
import Header from '@/components/Main/header.vue';
import Footer from "@/components/Main/footer.vue";

export default {
    data() {
        return {
            dataNotification : {
                page : 1,
                pageSize : 1000
            }
        }
    },
    components: {
        Header,
		Footer,
        Sidebar,
    },
    mounted() {
        ////////

        // this.initSidebarMenu();
        // this.initPageContentHeight();
        // this.initMobileMenuOverlay();
        // this.initSidebarSlimScroll();
        // this.initSmallSidebar();

    },

    async created() {
        // await this.chickValidationToken();
        // this.initFunc();
        
    },

    computed: {

    },

    methods: {
        // ...mapActions("NotificationsAndMessages", ["GetUserNotifications"]),

        // initFunc(){
        //     if(this.isTokenValid()){
        //         this.GetUserNotifications(this.dataNotification);
        //     }
        // },

        // chickValidationToken() {
        //     if (!this.isTokenValid()) {
        //         console.log("token not valid");
        //         this.$router.push({ name: 'login' });
        //     }
        // },

        // isTokenValid() {
        //     const token = localStorage.getItem('token');
        //     if (!token) return false;

        //     const payload = JSON.parse(atob(token.split('.')[1]));
        //     return payload.exp > Math.floor(Date.now() / 1000);
        // },



    }
};
</script>

<template>
    <!-- <div class="main-wrapper">
        <Header></Header>
        <Sidebar ></Sidebar>
        <div class="page-wrapper">
            <div class="content container-fluid">
                <router-view />
            </div>
        </div>
    </div> -->

    <!--begin::Main-->
		<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="page d-flex flex-row flex-column-fluid">
				
				<!--begin::Aside-->
				<Sidebar />
				<!--end::Aside-->
				
				<!--begin::Wrapper-->
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					
					<!--begin::Header-->
					<Header />
					<!--end::Header-->

					<!--begin::Content-->
					<router-view/> 
					<!--end::Content-->

					<!--begin::Footer-->
					<Footer />
					<!--end::Footer-->

				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
		</div>
		<!--end::Root-->
	
		<!--end::Main-->
</template>

<style scoped></style>