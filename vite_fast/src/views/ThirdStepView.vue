<template>
  <main class="third">
    <h1>次は簡単なフォームを作るよ</h1>
    <span>{{}}</span><br>
    <input type="text">
    <Button />

    <p>
      ボタンを押したらテキストボックスの内容をアラートで表示してみよう。<br />
      refを使ってテキストボックスの内容を取得してみよう。<br />
      テキストボックスの値はv-modelで取得できるよ。
    </p>
  </main>
</template>

<style>
.third {
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
import Button from "@/components/ButtonAnswer.vue";

const textValue = ref("")

</script>