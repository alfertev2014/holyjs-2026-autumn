<script setup lang="ts">

const { clicks, text = "Декларативный TSX" } = defineProps<{ clicks?: [number,number], text?: string }>()

</script>

<style scoped>
.decl-container {
  position: relative
}
.decl-badge {
  position: absolute;
  top: 0;
  right: 0;
  border: 3px solid var(--brand-color-1);
  padding: 0.3em 0.5em;
  border-bottom-left-radius: 1em;
  font-size: 0.8rem;
  font-weight: 700;
}
</style>

<template>
  <div class="decl-container">
    <slot/>
    <div class="decl-badge" v-if="!clicks || clicks && $clicks >= clicks[0] && $clicks < clicks[1]">
      {{text}}
    </div>
  </div>
</template>