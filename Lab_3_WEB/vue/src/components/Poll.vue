<template>




    <div class="containerw">

        <div class="panel panel-primary">
            <div class="wrapper">
                <span v-html="qastion"></span>


                <template v-for="answer in answers" v-bind:key="answer">
                    <tr>
                    <td colspan="3" >
                        <div class="form-check">
                            <input class="form-check-input" type="radio" v-bind:value="answer" @click="puch" v-model="selectedAnswer" >
                            <label class="form-check-label">{{answer.text}}</label>
                        </div>
                    </td>
                </tr>
                </template>
            </div>
        </div>

    </div>






</template>

<script>
    import UserDataService from "../services/UserDataService";
    import QastionDataService from "../services/QastionDataService";
    import AnswerDataService from "../services/AnswerDataService";

    export default {
        name: "test",
        data() {

            return {
                answers: {},
                selectedAnswer: '',
                qastionID: 1,
                profile: this.getUser(),
                qastion: '',
                qastionfun: this.get_qastion(1),
            }


        },
        methods: {
            puch(){
             var data = {selectedAnswer: this.selectedAnswer }
            QastionDataService.puchAnswer(data);
            },


            get_qastion(qastionIDres) {
                this.qastionID = qastionIDres;
                QastionDataService.getQastion(this.qastionID)
                    .then(response => { this.qastion = response.data.text })// eslint-disable-line no-mixed-spaces-and-tabs
                    .catch(e => { console.log(e); });// eslint-disable-line no-mixed-spaces-and-tabs

                AnswerDataService.getAnswer(this.qastionID)
                    .then(response => { this.answers = response.data })// eslint-disable-line no-mixed-spaces-and-tabs
                    .catch(e => { console.log(e); });// eslint-disable-line no-mixed-spaces-and-tabs

            },
            getUser() {
                UserDataService.getUser()
                    .then(response => {
                        console.log(response.data.exist)
                        if (response.data.exist == 1) {
                            console.log(response.data.data)
                            this.floatingEmail = response.data.data.mail,
                                this.floatingName = response.data.data.name,
                                this.floatingDate = response.data.data.bd,
                                this.sex = response.data.data.sex;
                            this.id = response.data.data.id;

                        } else { this.$router.push("/login") }
                    })
                    .catch(e => { this.$router.push("/login") });
            }

        }
    };

</script>
