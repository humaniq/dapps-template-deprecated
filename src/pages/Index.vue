<template>
  <q-page class='row items-center justify-evenly'>
    <div @click='() => prov.counter++'>{{ prov.counter }}</div>
  </q-page>
</template>

<script setup lang='ts'>

// const provider = useProviderStore();
import { useProviderStore } from 'src/store/providerStore';

const prov = useProviderStore();

</script>
