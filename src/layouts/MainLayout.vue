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
                 @click='state.connectBtnProps.action'
                 :label='state.connectBtnProps.label'
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
import { useProviderStore } from 'src/store2/providerStore';
import { makeAutoObservable } from 'mobx';

const provider = useProviderStore();
void provider.value.init();

class LayoutModel {

  get connectBtnProps() {
    return {
      label: provider.value.currentAccount
        ? `${ provider.value.currentAccount.slice(0, 4) }...${ provider.value.currentAccount.substring(provider.value.currentAccount.length - 4) }`
        : 'connect',
      action: provider.value.currentAccount ? () => null : () => {
        window.ethereum.enable();
      }
    };
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const state = new LayoutModel();

</script>
