<script setup lang="ts">

const { clicks } = defineProps<{ clicks?: [number,number] }>()

</script>

<style scoped>
.decl-container {
  position: relative
}
.decl-badge {
  position: absolute;
  top: 0;
  right: 0;
  border: 3px solid var(--brand-primary-color);
  padding: 0.3em 0.5em;
  border-bottom-left-radius: 1em;
  font-size: 0.7rem;
  font-weight: 700;;
}
</style>

<template>
  <div class="decl-container">
    <slot/>
    <div class="decl-badge" v-if="!clicks || clicks && $clicks >= clicks[0] && $clicks < clicks[1]">
      Декларативный TSX
    </div>
  </div>
</template>