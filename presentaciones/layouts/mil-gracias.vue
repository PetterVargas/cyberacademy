<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  background: {
    type: String,
    default: 'https://cover.divisioncero.com',
  },
})

function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

const style = computed(() => {
  const isColor = ['#', 'rgb', 'hsl'].some(v => props.background.indexOf(v) === 0)

  return {
    background: isColor ? props.background : undefined,
    color: isColor ? undefined : 'white',
    backgroundImage: isColor
      ? undefined
      : `linear-gradient(#0005, #0008), url("${resolveAssetUrl(props.background)}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }
})
</script>

<template>
  <div class="slidev-layout mil-gracias h-full grid" :style="style">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>
