<template>
  <main class="first">
    <h1>まずは超簡単な実装から</h1>
    <span>{{ count }}</span><br>
    <button @click="increment">カウントアップ</button>
    <button @click="decrement">カウントダウン</button>
    <p>
      カウントアップを押すとカウントが増えます。<br>
      カウントダウンを押すとカウントが減るように実装してみよう。
    </p>
    <p>
      カウントアップの実装を見様見真似で書いてみよう。
    </p>
  </main>
</template>

<style>
.first {
  padding: 20px;
}
.first h1 {
  margin-bottom: 10px;
}
span {
  font-size: 24px;
  font-weight: bold;
}
p {
  margin-top: 10px;
}
</style>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

</script>