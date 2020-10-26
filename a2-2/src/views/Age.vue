<template>
	<div class="main">
		<div class="container">
			<form>
				<div class="stepContainer">
					<!-- <LeapYear></LeapYear> -->
					<p class="step">STEP1</p>

					<p class="ask">
						<font-awesome-icon
							class="fontAwesome"
							:icon="['far', 'id-card']"
						/>お客様の情報を入力してください
					</p>
				</div>
				<div class="questionContent">
					<!-- <p>-性別-</p> -->
					<p>{{ questionGender }}</p>
					<p>
						<input
							type="radio"
							name="gender"
							value="男性"
							checked=""
							id="male"
							v-model="gender"
						/><label for="male"> 男性</label>
						<input
							type="radio"
							name="gender"
							value="女性"
							id="female"
							v-model="gender"
						/><label for="female">女性</label>
					</p>
					<!-- <p>-生年月日-</p> -->
					<p>{{questionDateOfBirth}}</p>
					<DateOfBirth></DateOfBirth>
				</div>
			</form>
			<div class="btnArea">
				<router-link to="/insurance" tag="button" class="btn"
					>次へ進む&nbsp;&nbsp;➤</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
import DateOfBirth from "../components/DateOfBirth.vue";

export default {
	components: {
		DateOfBirth,
	},
	computed: {
      questionGender() {
         return this.$store.state.age.questionGender;
      },
		gender: {
			get() {
				return this.$store.getters["age/gender"];
			},
			set(value) {
            this.$store.commit("age/gender",value)
			},
      },
      questionDateOfBirth() {
         return this.$store.state.age.questionDateOfBirth;
      }
	},
};
</script>

<style scoped>
.main {
	margin: auto;
}
.ask {
	text-align: center;
	margin: 0;
	padding: 10px;
}
.stepContainer {
	border-bottom: solid 1px;
	background-color: aquamarine;
}
.step {
	position: absolute;
	top: -13px;
	background-color: rgb(61, 139, 228);
	color: #fff;
	font-size: 12px;
	padding: 3px 8px;
	border-radius: 2px;
}
.container {
	padding: 5rem;
}
.questionContent {
	padding: 0 1rem 1rem;
}
form {
	position: relative;
	border: solid 1px black;
}
.btnArea {
	text-align: center;
	margin-top: 1rem;
}
.btn {
	color: #fff;
	background-color: rgb(11, 228, 156);
	padding: 5px 15px;
	border: none;
	border-radius: 2px;
	cursor: pointer;
}
</style>
