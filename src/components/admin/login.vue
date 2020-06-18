<template>
  <div class="login">
    <h1>欢迎使用wdnmd博客系统</h1>
    <div class="login-form">
      <div class="clear"></div>
      <div class="avtar">
        <img
          src="../../assets/avtar.png"
          style="width:100px;border-radius:15px"
        />
      </div>
      <form>
        <input
          type="text"
          class="text"
          v-model="name"
          onfocus="this.value = '';"
          onblur="if (this.value == '') {this.value = 'Username';}"
        />
        <div class="key">
          <input
            type="password"
            v-model="password"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'Password';}"
          />
        </div>
      </form>
      <div class="signin">
        <input type="submit" value="Login" @click="login" />
      </div>
    </div>
    <div class="copy-rights">
      <p>解释权所有@WDNMD</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  components: {},
  methods: {
    login() {
      this.axios
        .post("api/admin/login", { name: this.name, password: this.password })
        .then((res) => {
          if (res.data === 0) {
            alert("帐号或密码错误，请重新输入!");
            return;
          }
          this.$emit("func", false);
        })
        .catch((err) => {
          console.l0g(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.txt-rt {
  text-align: right;
} /* text align right */
.txt-lt {
  text-align: left;
} /* text align left */
.txt-center {
  text-align: center;
} /* text align center */
.float-rt {
  float: right;
} /* float right */
.float-lt {
  float: left;
} /* float left */
.clear {
  clear: both;
} /* clear float */
.pos-relative {
  position: relative;
} /* Position Relative */
.pos-absolute {
  position: absolute;
} /* Position Absolute */
.vertical-base {
  vertical-align: baseline;
} /* vertical align baseline */
.vertical-top {
  vertical-align: top;
} /* vertical align top */
nav.vertical ul li {
  display: block;
} /* vertical menu */
nav.horizontal ul li {
  display: inline-block;
} /* horizontal menu */
img {
  max-width: 100%;
}
/*end reset*/
/****-----start-body----****/
.login {
  background: url(../../assets/bg1.jpg) no-repeat 0px 0px;
  font-family: "Open Sans", sans-serif;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 100%;
  height: 100vh;
}
.wrap {
  margin: 0 auto;
  width: 80%;
}
a,
form li,
input[type="submit"],
input[type="text"],
.sixth-login input[type="submit"],
.third-login input[type="submit"] {
  transition: 0.1s all;
  -webkit-transition: 0.1s all;
  -moz-transition: 0.1s all;
  -o-transition: 0.1s all;
}

h1 {
  font-family: "Exo 2", sans-serif;
  text-align: center;
  padding-top: 2em;
  font-weight: 400;
  color: #2b2b36;
  font-size: 2em;
  margin: 0;
}
.login-form {
  position: relative;
  width: 30%;
  margin: 3% auto 0 auto;
  text-align: center;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -o-border-radius: 15px;
  background: rgba(33, 33, 33, 0.7);
}
.head img {
  width: 100%;
}
.avtar img {
  margin: 2em 0 0;
}
.head-info {
  padding: 5px 0;
  text-align: center;
  font-weight: 600;
  font-size: 2em;
  color: #fff;
  background: #23232e;
  height: 50px;
  border-top-left-radius: 10px;
  -webkit-border-top-left-radius: 10px;
  -moz-border-top-left-radius: 10px;
  -o-border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -webkit-border-top-right-radius: 10px;
  -moz-border-top-right-radius: 10px;
  -o-border-top-right-radius: 10p;
}
input[type="text"] {
  width: 70%;
  padding: 1em 2em 1em 3em;
  color: #9199aa;
  font-size: 18px;
  outline: none;
  background: url(../../assets/adm.png) no-repeat 10px 15px;
  border: none;
  font-weight: 100;
  border-bottom: 1px solid#484856;
  margin-top: 2em;
}
input[type="password"] {
  width: 70%;
  padding: 1em 2em 1em 3em;
  color: #dd3e3e;
  font-size: 18px;
  outline: none;
  background: url(../../assets/key.png) no-repeat 10px 23px;
  border: none;
  font-weight: 100;
  border-bottom: 1px solid#484856;
  margin-bottom: 3em;
}
input[type="submit"] {
  font-size: 30px;
  color: #fff;
  outline: none;
  border: none;
  background: rgba(11, 11, 11, 0.7);
  width: 100%;
  padding: 18px 0;
  border-bottom-left-radius: 15px;
  -webkit-border-bottom-left-radius: 15px;
  -moz-border-bottom-left-radius: 15px;
  -o-border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  -webkit-border-bottom-right-radius: 15px;
  -moz-border-bottom-right-radius: 15px;
  -o-border-bottom-right-radius: 15px;
  cursor: pointer;
}
input[type="submit"]:hover {
  background: rgba(233, 233, 233, 0.7);
  color: #000;
  border-bottom-left-radius: 15px;
  -webkit-border-bottom-left-radius: 15px;
  -moz-border-bottom-left-radius: 15px;
  -o-border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  -webkit-border-bottom-right-radius: 15px;
  -moz-border-bottom-right-radius: 15px;
  -o-border-bottom-right-radius: 15px;
  transition: 1s all;
  -webkit-transition: 1s all;
  -moz-transition: 1s all;
  -o-transition: 1s all;
}
label.lbl-1 {
  background: #6756ea;
  width: 20px;
  height: 20px;
  display: block;
  float: right;
  border-radius: 50%;
  margin: 16px 10px 0px 0px;
}
label.lbl-2 {
  background: #ea569a;
  width: 20px;
  height: 20px;
  display: block;
  float: right;
  border-radius: 50%;
  margin: 16px 10px 0px 0px;
}
label.lbl-3 {
  background: #f1c85f;
  width: 20px;
  height: 20px;
  display: block;
  float: right;
  border-radius: 50%;
  margin: 16px 10px 0px 0px;
}
/*--copyrights--*/
.copy-rights {
  text-align: center;
  margin-top: 8em;
}
.copy-rights p {
  color: #fff;
  font-size: 1em;
  line-height: 1.8em;
  margin: 0;
}
.copy-rights p a {
  color: #ff2a75;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  text-decoration: none;
}
.copy-rights p a:hover {
  color: #3faa53;
  text-decoration: none;
  transition: 0.1s all;
  -webkit-transition: 0.1s all;
  -moz-transition: 0.1s all;
  -o-transition: 0.1s all;
}
/*--/copyrights--*/
/*--start-responsive-design--*/
@media (max-width: 1440px) {
  body {
    min-height: 811px;
  }
}
@media (max-width: 1366px) {
  .copy-rights {
    margin-top: 3em;
  }
  body {
    min-height: 768px;
  }
}
@media (max-width: 1280px) {
  body {
    min-height: 711px;
  }
  .copy-rights {
    margin-top: 0.5em;
  }
}
@media (max-width: 1024px) {
  .login-form {
    width: 37%;
  }
  .copy-rights {
    margin-top: 3em;
  }
  h1 {
    padding-top: 2em;
  }
  body {
    min-height: 675px;
  }
}
@media (max-width: 768px) {
  .login-form {
    width: 50%;
    margin: 12% auto 0 auto;
  }
  body {
    min-height: 929px;
  }
}
@media (max-width: 640px) {
  .login-form {
    width: 60%;
    margin: 20% auto 0 auto;
  }
}
@media (max-width: 480px) {
  .login-form {
    width: 80%;
  }
}
@media (max-width: 320px) {
  h1 {
    padding-top: 1em;
    font-size: 1.5em;
  }
  .login-form {
    width: 90%;
    margin: 10% auto 0 auto;
  }
  input[type="text"] {
    width: 62%;
    padding: 1.2em 2em 0.5em 2.5em;
    font-size: 17px;
    margin-top: 0.5em;
  }
  input[type="password"] {
    width: 62%;
    padding: 1.2em 2em 0.5em 2.5em;
    font-size: 17px;
    margin-top: 0.5em;
    margin-bottom: 2em;
    background: url(../../assets/key.png) no-repeat 8px 23px;
  }
  .avtar img {
    margin: 1.1em 0 0;
  }
  .head-info {
    height: 35px;
  }
  label.lbl-1 {
    margin: 8px 10px 0px 0px;
  }
  label.lbl-2 {
    margin: 8px 10px 0px 0px;
  }
  label.lbl-3 {
    margin: 8px 10px 0px 0px;
  }
  .close {
    left: 16px;
    top: 13px;
  }
  .copy-rights {
    margin-top: 2em;
  }
  body {
    min-height: 504px;
  }
  input[type="submit"] {
    font-size: 28px;
    padding: 10px 0;
  }
}
</style>
