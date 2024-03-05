<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Vueのチュートリアルへようこそ</template>

    Vueについて簡単なチュートリアルをやっていきます
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>前提条件</template>

    このチュートリアルでは、Vueにしか触れませんのでご容赦下さい。<br>
    そしてアプリ自体はViteとVue3を使っていますが、<br>
    そこに関しては触れませんので気になる方はご自分で調べてください。
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>単一ファイルコンポーネント(SFC)</template>

    どうせ現場に出るとSFCでしか開発しないと思うので、その辺りについてやっていきます。
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>そろそろスタート</template>

    それでは、早速スタートしていきましょう。<br>
    <router-link to="first_step">ここ</router-link>をクリックしてね
  </WelcomeItem>
</template>
