<template>
    <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="email" class="form-control" v-model="floatingName" placeholder="Name">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Surname</label>
        <input type="email" class="form-control" v-model="floatingSurname" placeholder="Surname">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Age</label>
        <input type="email" class="form-control" v-model="floatingAge" placeholder="Age">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Sex</label>
        <input type="email" class="form-control" v-model="sex" placeholder="Sex">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" v-model="floatingEmail" placeholder="Email">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" v-model="floatingPassword" placeholder="Password">
    </div>

    <button class="btn btn-outline-dark flex-shrink-0" type="button" @click="reg_b">
        <i class="bi-cart-fill me-1"></i>
        Sing Up
    </button>
</template>

<script>
    import UserDataService from "../services/UserDataService";

    export default {
        name: "reg",
        data() {

            return {

                    floatingEmail: '',
                    floatingPassword: '',
                    floatingName: '',
                    floatingSurname: '',
                    floatingAge: '',
                    sex: ''

                }


        },
        methods: {
            reg_b() {
                    var data = {
                        name: this.floatingName,
                        surname: this.floatingSurname,
                        mail: this.floatingEmail,
                        pass: this.floatingPassword,
                        age: this.floatingAge,
                        sex: this.sex
                    };
                    UserDataService.create(data)
                    .then(response => {console.log(response.data);})// eslint-disable-line no-mixed-spaces-and-tabs
        	    .catch(e => {console.log(e);});// eslint-disable-line no-mixed-spaces-and-tabs
                    this.$router.push("/")

            }
        }
    };

</script>


