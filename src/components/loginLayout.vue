<template>
  <v-app>
      <v-content>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="8" md="8">
                    <v-card>
                        <v-row>
                            <v-col cols="6">
                                <div class="header">
                                    <div id="title">
                                        SIGN IN TO CONTINUE
                                    </div>
                                    <div id="tagline">
                                        Login 9413
                                    </div>
                                </div>
                                <div class="form">
                                    <v-text-field
                                    v-model="form.email"
                                    label="Email"      
                                    outlined
                                    height=50
                                    ></v-text-field>

                                    <v-text-field
                                    v-model="form.password"
                                    label="Password"
                                    type="password"
                                    outlined
                                    height=50
                                    ></v-text-field>

                                    <v-checkbox v-model="checkbox">
                                    <template v-slot:label>
                                        <div>
                                        Forgot Password?
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                            <a
                                                target="_blank"
                                                href="http://instagram.com/mathiasbstn"
                                                @click.stop
                                                v-on="on"
                                            >
                                                Click Here For Continue
                                            </a>
                                            </template>
                                            OPEN IN NEW WINDOW
                                        </v-tooltip>
                                        </div>
                                    </template>
                                </v-checkbox>
                                 <v-btn @click="login()" rounded block class="elevation-0" color="primary" height=50 dark>SIGN IN NOW</v-btn>
                                </div>
                                
                            </v-col>
                            <v-col cols="6" md="6" style="padding:0px">
                                <v-img :src="require('@/assets/background.svg')"></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
          </v-container>
      </v-content>
  </v-app>
</template>

<script>
export default {
    data () {
        return {
            checkbox: false,
            form : {
                email : null,
                password : null,
            },

            user: new FormData,
        }
    },
    methods :{
        login(){
            var url = this.$apiUrl + '/auth'
            this.user = new FormData()
            this.user.append('email', this.form.email)
            this.user.append('password', this.form.password)
            this.$http.post(url,this.user).then(response =>{
                if(response.data.token){
                    localStorage.setItem("token", response.data.token)
                    this.$router.push({name : 'UserController'})
                }else{
                    alert('GAGAL LOGIN')
                }
            })
        }
    },
}
</script>

<style>
    .header{
        margin-left: 47px;
        margin-top: 50px;
    }

    #title{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 56px;
    }

    .form{
        margin-top: 47px;
        margin-left: 38px;
        margin-bottom: 50px;
        margin-right: 38px;
    }
</style>