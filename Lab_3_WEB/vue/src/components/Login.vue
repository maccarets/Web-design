<template>
<div class="jumbotron">
        <h1>Log In</h1>

    </div>


        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" v-model="floatingEmail" placeholder="Email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" v-model="floatingPassword" placeholder="Password">
        </div>
        <div class="checkbox">
            <label>
                <input type="checkbox"> Keep me Logged In
            </label>
        </div>
        <button class="btn btn-outline-dark flex-shrink-0" type="button" @click="sing_b">
            <i class="bi-cart-fill me-1"></i>
            Log In
        </button>



</template>

<script>
    import UserDataService from "../services/UserDataService";

    export default {
        name: "sing",
        data() {

            return {

                    floatingEmail: '',
                    floatingPassword: '',
                }

            
        },
        methods: {
            sing_b() {
                    var data = {
                        mail: this.floatingEmail,
                        pass: this.floatingPassword,
                    };
                    UserDataService.singVer(data)
                    .then(response => {
                     console.log(); 
                    if(response.data.exist == 1){
                         this.$router.push({name:"profile"})
                    }
                      })// eslint-disable-line no-mixed-spaces-and-tabs
        	    .catch(e => {console.log(e);});// eslint-disable-line no-mixed-spaces-and-tabs
                

    
            }
        }
    };

</script>




