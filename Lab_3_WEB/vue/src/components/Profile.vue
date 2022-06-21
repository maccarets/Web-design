<template>
    <section class="py-5">
        <div class="container ">
            <div class="row">
                <div class="col-md-3"><img class="card-img-top" src="https://scontent.fiev7-4.fna.fbcdn.net/v/t39.30808-6/242235785_2973388112979442_8766582949413351735_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=HCF4jd03aSoAX82YJ8I&tn=-bRb3JjNzlRCd5Jq&_nc_ht=scontent.fiev7-4.fna&oh=00_AT_3frtRp6EoTV3F4jXW-zPbPp9HQCTCjFEk79t93SRSzA&oe=62A4DBBE" alt="..." /></div>
                <div class="col-md-4">
                    <h2>Profile Info</h2>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{{floatingName}}</td>
                            </tr>
                            <tr>
                                <td>Surname</td>
                                <td>{{floatingSurname}}</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>{{floatingAge}}</td>
                            </tr>
                            <tr>
                                <td>Sex</td>
                                <td>{{sex}}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{{floatingEmail}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import UserDataService from "../services/UserDataService";

    export default {
        name: "sing",
        data() {
            return {
                profile: this.getUser(),
                profEdit: false,
                floatingEmail: '',
                floatingName: '',
                floatingSurname: '',
                floatingAge: '',
                sex: '',
            }


        },
        methods: {
            getUser() {
                UserDataService.getUser()
                    .then(response => {
                        console.log(response.data.exist)
                        if (response.data.exist == 1) {
                            console.log(response.data.data)
                            this.floatingEmail = response.data.data.mail,
                                this.floatingName = response.data.data.name,
                                this.floatingSurname = response.data.data.surname,
                                this.floatingAge = response.data.data.age,
                                this.sex = response.data.data.sex;

                        } else { this.$router.push("/login") }
                    })
                    .catch(e => { this.$router.push("/login") });


            }
        },
    };
</script>



