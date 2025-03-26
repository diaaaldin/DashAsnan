<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
    data() {
		return {	
            StatisticsData : {
                todayVisitNum : 0,
                thisMonthVisitNum : 0,
                totalVehiclesSaled :0,

                thisMonthVehicleAddedNum : 0,
                underReviewVehicleOrderNum : 0,
                refusedVehicleOrderNum : 0,

                thisMonthAnnouncementOrderAddedNum : 0,
                underReviewAnnouncementOrderNum : 0,
                refusedAnnouncementOrderNum : 0,

                thisMonthStarOrderAddedNum : 0,
                underReviewStarOrderNum : 0,
                refusedStarOrderNum : 0,
            }
		}
	},
	mounted() {
        
    },
    components:{

    }, 

	emits:{
       
    },

	created() {
        // Call the function from the store directly when the component is created
         this.statisticsFunc();
    },
	
    computed:{
		//...mapGetters(),
		//...mapGetters(),

    },
    methods:{
	
		...mapActions("Statistics", ["HomeStatisticsInfo"]),

        statisticsFunc(){
            this.HomeStatisticsInfo().then(Response => {
					this.StatisticsData.todayVisitNum = Response.todayVisitNum;
					this.StatisticsData.thisMonthVisitNum = Response.thisMonthVisitNum;
					this.StatisticsData.totalVehiclesSaled = Response.totalVehiclesSaled;

					this.StatisticsData.thisMonthVehicleAddedNum = Response.thisMonthVehicleAddedNum;
					this.StatisticsData.underReviewVehicleOrderNum = Response.underReviewVehicleOrderNum;
					this.StatisticsData.refusedVehicleOrderNum = Response.refusedVehicleOrderNum;

					this.StatisticsData.thisMonthAnnouncementOrderAddedNum = Response.thisMonthAnnouncementOrderAddedNum;
					this.StatisticsData.underReviewAnnouncementOrderNum = Response.underReviewAnnouncementOrderNum;
					this.StatisticsData.refusedAnnouncementOrderNum = Response.refusedAnnouncementOrderNum;

					this.StatisticsData.thisMonthStarOrderAddedNum = Response.thisMonthStarOrderAddedNum;
					this.StatisticsData.underReviewStarOrderNum = Response.underReviewStarOrderNum;
					this.StatisticsData.refusedStarOrderNum = Response.refusedStarOrderNum;
				});
        }

    }
};
</script>
<template>
     <div class="row">
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-primary border-primary">
                                        <i class="fe fe-users"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{ StatisticsData.todayVisitNum }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    <h6 class="text-muted">	{{ $t('home_card_1') }}</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-primary w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-primary border-primary">
                                        <i class="fe fe-users"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{ StatisticsData.thisMonthVisitNum }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    <h6 class="text-muted">	{{ $t('home_card_2') }}</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-primary w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-success">
                                        <i class="fe fe-credit-card"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{ StatisticsData.totalVehiclesSaled }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">	{{ $t('home_card_3') }}</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-success w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-success">
                                        <i class="fe fe-credit-card"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{ StatisticsData.thisMonthVehicleAddedNum }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">	{{ $t('home_card_4') }}</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-success w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-success">
                                        <i class="fe fe-credit-card"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{ StatisticsData.underReviewVehicleOrderNum }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">	{{ $t('home_card_5') }} </h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-success w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-success">
                                        <i class="fe fe-credit-card"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{ StatisticsData.refusedVehicleOrderNum }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">	{{ $t('home_card_6') }}</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-success w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-danger border-danger">
                                        <i class="fe fe-money"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{ StatisticsData.thisMonthAnnouncementOrderAddedNum }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">	{{ $t('home_card_7') }}</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-danger w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-danger border-danger">
                                        <i class="fe fe-money"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{ StatisticsData.underReviewAnnouncementOrderNum }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">	{{ $t('home_card_8') }}</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-danger w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-danger border-danger">
                                        <i class="fe fe-money"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{ StatisticsData.refusedAnnouncementOrderNum }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">	{{ $t('home_card_9') }}</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-danger w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-warning border-warning">
                                        <i class="fe fe-folder"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{ StatisticsData.thisMonthStarOrderAddedNum }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">	{{ $t('home_card_10') }}</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-warning w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-warning border-warning">
                                        <i class="fe fe-folder"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{ StatisticsData.underReviewStarOrderNum }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">	{{ $t('home_card_11') }}</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-warning w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-warning border-warning">
                                        <i class="fe fe-folder"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{ StatisticsData.refusedStarOrderNum }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">	{{ $t('home_card_12') }}</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-warning w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
</template>
<style scoped>


</style> 