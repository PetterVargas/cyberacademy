<script setup lang="ts">
import { useNav } from "@slidev/client";
import configs from "#slidev/configs";

const { currentPage } = useNav();
</script>

<template>
  <div
    v-if="configs.watermark && currentPage !== 1"
    class="absolute bottom-2 right-3 text-[10px] tracking-wide op-20 select-none pointer-events-none z-1"
  >
    divisioncero.com
  </div>
</template>

<style>
/* El cacheo offline de la PWA se mantiene activo; solo ocultamos el aviso
   "Caching for offline…" / "Ready offline" para que no tape la presentación. */
.slidev-pwa-indicator {
  display: none !important;
}
</style>
