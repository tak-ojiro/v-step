<template>
  <main class="second">
    <h1>次はボタンを別コンポーネントに切り出してみましょう</h1>
    <span>{{ count }}</span><br>
    <Button />
    <Button />
    <p>
      ボタンのラベルと、onClickをpropsで渡してみよう。<br>
      実はボタンコンポーネント自体は空っぽの状態でimportだけしているよ。
      よくコードを読んでみてね。
    </p>
    <p>
      出来たよ～ていう人は、<RouterLink to="/third_step">次へ</RouterLink> へ進んでね。
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
import Button from "@/components/Button.vue";

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

</script>