<template>
	<div class="main">
		<div class="container">
			<form>
				<div class="stepContainer">
					<p class="step">STEP4</p>
					<p class="ask">
						<font-awesome-icon
							class="fontAwesome"
							:icon="['fas', 'file-alt']"
						/>以下の内容をご確認ください
					</p>
				</div>
				<div class="questionContent">
					<p class="colored">{{ questionGender }}</p>
					<p class="marginLeft">{{ gender }}</p>

					<p class="colored">{{ questionDateOfBirth }}</p>
					<p class="marginLeft">{{year}}年{{month}}月{{date}}日</p>

					<p class="colored">{{ questionInsurance }}</p>
					<p class="marginLeft">{{insuranceAnswer}}</p>

					<p class="colored">{{ questionHospital }}</p>
					<p class="marginLeft">{{hospitalAnswer}}</p>

					<p class="colored">{{ questionPast }}</p>
					<p class="marginLeft">{{pastAnswer}}</p>

					<p class="colored">{{ questionDetail }}</p>
               <!-- 前のページの相談内容が空白の場合、未回答と表示する -->
               <p class="marginLeft" v-if="detail ==''">未回答</p>
					<p class="marginLeft" v-else>{{detail}}</p>
				</div>
			</form>
			<div class="btnArea">
				<router-link to="/consulting" tag="button" class="btn"
					>前へ戻る&nbsp;&nbsp;➤</router-link
				>
				<router-link to="/answer" tag="button" class="btn"
					>送信&nbsp;&nbsp;➤</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// data() {
	// 	return {
	// 		detail: "",
	// 	};
   // },
	computed: {
		questionGender() {
			return this.$store.state.questionGender;
		},
		gender() {
			return this.$store.getters.gender;
		},
		year() {
         return this.$store.getters.year;
      },
		month() {
         return this.$store.getters.month;
      },
		date() {
         return this.$store.getters.date;
      },
		questionDateOfBirth() {
			return this.$store.state.questionDateOfBirth;
		},
		questionInsurance() {
			return this.$store.state.questionInsurance;
		},
		insuranceAnswer() {
			return this.$store.state.insuranceAnswer;
		},
		questionHospital() {
			return this.$store.state.questionHospital;
		},
		hospitalAnswer() {
			return this.$store.state.hospitalAnswer;
		},
		questionPast() {
			return this.$store.state.questionPast;
		},
		pastAnswer() {
			return this.$store.state.pastAnswer;
		},
		questionDetail() {
			return this.$store.state.questionDetail;
		},
		detail() {
			return this.$store.state.detail;
		},
	},
};
</script>

<style scoped>
.marginLeft {
	margin-left: 1.5rem;
}
.colored {
	color: rgb(4, 163, 163);
}
.main {
	margin: auto;
	/* text-align: center; */
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
	margin: 0 1rem;
}
</style>
