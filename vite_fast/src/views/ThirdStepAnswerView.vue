<template>
  <main class="third">
    <h1>次は簡単なフォームを作るよ</h1>
    <span>{{ textValue }}</span><br>
    <input type="text" v-model="textValue">
    <ButtonAnswer label="表示" :onClick="showTextValue" />

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
import ButtonAnswer from "@/components/ButtonAnswer.vue";

const textValue = ref("")

// textValueを表示する関数
const showTextValue = () => {
  alert(textValue.value)
}

</script>