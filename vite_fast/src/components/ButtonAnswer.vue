<template>
  <button @click="onClick">{{ label }}</button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  label: String,
  onClick: Function
})

</script>
