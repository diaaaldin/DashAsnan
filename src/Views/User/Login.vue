<script>
import { ElLoading } from 'element-plus';
import { RouterView } from 'vue-router';
import { mapState, mapGetters, mapActions } from "vuex";


export default {
	props: {

	},

	components: {
		RouterView
	},

	data() {
		return {
			user: {
				email: "",
				password: "",
			},
		}
	},
	created() {
		localStorage.clear();
	},


	computed: {
		//...mapState("cart", ["cart"]),
	},

	methods: {
		...mapActions("Users", ["AdminLogin"]),
		getLoginfunc() {
			const loading = ElLoading.service({
				lock: true,
				background: 'rgba(0, 0, 0, 0.7)',
				text: "",
			});
			

			if (this.checkValidation()) {

				this.AdminLogin(this.user).then(Response => {
					this.$moshaToast(this.$t('login_success_message'), {
						hideProgressBar: 'false',
						showIcon: 'true',
						swipeClose: 'true',
						type: 'success',
						timeout: 3000,
					});
					loading.close();
					this.$router.push({ name: "Home" });

				}).catch(error => {
					// Handle any errors that might occur during the API call
					//console.error(error);
					if (error.response && error.response.status === 401) {
						this.$moshaToast(this.$t('general_user_not_allow_error_message'), {
							hideProgressBar: 'false',
					        position: 'top-center',
					        showIcon: 'true',
					        swipeClose: 'true',
					        type: 'warning',
					        timeout: 3000,
						});
					} else {
						// Handle other errors with the provided message from the response
						this.$moshaToast(error.response?.data?.message || 'An error occurred', {
							hideProgressBar: 'false',
							position: 'top-center',
							showIcon: 'true',
							swipeClose: 'true',
							type: 'warning',  // Default type is 'warning'
							timeout: 3000,
						});
					}
                loading.close();
				});
			}

		},

		checkValidation() {
			if (this.user.email.trim() == '') {
				this.$moshaToast(this.$t('login_check_validation_email_message'), {
					hideProgressBar: 'false',
					position: 'top-center',
					showIcon: 'true',
					swipeClose: 'true',
					type: 'warning',
					timeout: 3000,
				});
				this.$refs.email.focus();
				return;
			}
			if (this.user.password.trim() == '') {
				this.$moshaToast(this.$t('login_check_validation_password_message'), {
					hideProgressBar: 'false',
					position: 'top-center',
					showIcon: 'true',
					swipeClose: 'true',
					type: 'warning',
					timeout: 3000,
				});
				this.$refs.password.focus();
				return;
			}
			return true;
		}
	},
}
</script>

<template>
	<!-- Main Wrapper -->
	<div class="main-wrapper login-body">
		<div class="login-wrapper">
			<div class="container">
				<div class="loginbox">
					<div class="login-left">
						<img class="img-fluid" src="/src/assets/img/logo-white.png" alt="Logo">
					</div>
					<div class="login-right">
						<div class="login-right-wrap">
							<h1>{{ $t('login_title') }}</h1>
							<p class="account-subtitle">{{ $t('login_title_p') }}</p>

							<!-- Form -->
							<div>
								<div class="form-group">
									<input v-model="user.email" ref="email" required type="email" name="email"
										class="form-control" @keypress.enter="getLoginfunc()" :placeholder="$t('login_email_input_plachoder')"
										id="email" aria-describedby="email">
								</div>
								<div class="form-group">
									<input v-model="user.password" ref="password" required type="password"
										name="password" class="form-control" @keypress.enter="getLoginfunc()"
										:placeholder="$t('login_password_input_plachoder')" id="password" aria-describedby="password">
								</div>
								<div class="form-group">
									<button v-on:click="getLoginfunc()" class="btn btn-primary btn-block">{{ $t('login_button') }}</button>
								</div>
							</div>
							<!-- /Form -->
							<!--	<div class="text-center forgotpass"><a href="forgot-password.html">Forgot Password?</a></div>
								<div class="login-or">
									<span class="or-line"></span>
									<span class="span-or">or</span>
								</div>
								  -->
							<!-- Social Login -->
							<!-- <div class="social-login">
									<span>Login with</span>
									<a href="#" class="facebook"><i class="fa fa-facebook"></i></a><a href="#" class="google"><i class="fa fa-google"></i></a>
								</div>-->
							<!-- /Social Login -->

							<!--<div class="text-center dont-have">Don’t have an account? <a href="register.html">Register</a></div>-->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /Main Wrapper -->
</template>

<style scoped>

</style>