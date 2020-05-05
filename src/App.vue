<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/practice">Vueの練習</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/privacy">プライバシーポリシー</router-link> |
      <router-link to="/router">Vue Routerの練習</router-link> |
      <router-link to="/user/1">ユーザー１</router-link> |
      <router-link :to="{name: 'user', params: {id: 3}, query: {q: 'hogehoge'}}">ユーザー３</router-link> |
      <router-link :to="{name: 'user', params: {id: 888888888}, query: {q: '新型コロナに気を付けよう！'}}">概要について</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/> <!-- ←　ここにコンポーネントが反映されます！　-->
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-sevue -Vrif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

*/

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}


/*
<style>  　※　<style scoped>　にすると、設定したコンポーネントだけで、スタイルが有効となります 
*/

.router-link-exact-active
{
  font-size: 30px;
  color: deeppink;
}
</style>



