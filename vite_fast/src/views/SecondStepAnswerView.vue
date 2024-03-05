<template>
  <main class="second">
    <h1>次はボタンを切り出してみましょう</h1>
    <span>{{ count }}</span><br>
    <ButtonAnswer label="カウントアップ" :onClick="increment" />
    <ButtonAnswer label="カウントダウン" :onClick="decrement" />
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
.second {
  padding: 20px;
}
h1 {
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
import ButtonAnswer from "@/components/ButtonAnswer.vue";

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

</script>