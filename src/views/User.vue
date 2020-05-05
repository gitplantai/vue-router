<template>
  <div class="user">
    <!--<h1>This is an user page</h1>-->
    <p>動的にweb pageが変わります</p>
    <h2 style="color: red">だけど、user/まで変更すると、top pageに戻されるよ！！！</h2>
    <p>URLの末尾に、数字や、文字などを入力してみると、<br>
    この下にparams idや、queryが表示されるので、とても面白いよ！</p>
    <h1>{{ this.$route.params.id }}</h1>
    <p>{{ this.$route.query.q }}</p>
    <router-link tag="button" :to="{name: 'first'}">First</router-link> |  <!--ボタンにしたい場合、tag="button"-->
    <router-link tag="button" :to="{name: 'second'}">Second</router-link> |
    <router-link tag="button" :to="{name: 'last'}">Last</router-link>

    <transition name="shake" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style scoped>
  .shake-enter-active {
    animation: shake 1s linear;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
  }

@keyframes shake {
  10%, 90% {
    transform: translate3d(-10px, 0px, 0);
  }
  20%, 80% {
    transform: translate3d(10px, 0px, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-10px, 0px, 0);
  }
  40%, 60% {
    transform: translate3d(10px, 0px, 0);
  }
}
</style>

<!--
<style>  // <style scoped>　にすると、設定したコンポーネントだけで、スタイルが有効となります 
  .router-link-exact-active
  {
    font-size: 30px;
    color: deeppink;
  }
</style>
-->