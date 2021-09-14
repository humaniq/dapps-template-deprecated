<template>
  <Observer>
    <q-layout view='lHh Lpr lFf'>
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>
            Humaniq Home
          </q-toolbar-title>
          <q-btn v-if='provider.hasProvider' flat
                 :disable='!!provider.currentAccount'
                 icon='fab fa-connectdevelop'
                 @click='view.connectBtnProps.action'
                 :label='view.connectBtnProps.label'
          />
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </Observer>
</template>

<script setup lang='ts'>
import { LayoutModel } from 'layouts/MainLayoutModel';
import { useProviderStore } from 'src/store/providerStore';

const provider = useProviderStore();
const view = new LayoutModel();
view.init();

</script>
