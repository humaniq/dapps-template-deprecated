import { createGlobalObservable, useLocalObservable } from 'mobx-vue-lite';

export const useProviderStore = createGlobalObservable(() => {
  return useLocalObservable(() => ({
    initialized: false,
    currentAccount: null,
    hasProvider: false,
    async init() {
      console.log('init');
      if (window.ethereum) {
        this.hasProvider = true;

        window.ethereum.on('accountsChanged', (accounts) => {
          this.currentAccount = accounts[0];
        });

        window.ethereum.on('disconnect', () => {
          this.currentAccount = null;
        });

        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          this.currentAccount = accounts[0];
        } catch (e) {
          console.log('ERROR', e);
        }
      }
      this.initialized = true;
    }
  }));
});
