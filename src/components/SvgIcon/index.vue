<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  // 前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 名称
  name: String,
  // 填充色
  color: {
    type: String,
    default: '',
  },
  // 宽度
  width: {
    type: String,
    default: '16px',
  },
  // svg高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped></style>
