import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ProviderStateInterface } from './state';

const actions: ActionTree<ProviderStateInterface, StateInterface> = {
  async init({ commit }) {
    console.log('init');
    if (window.ethereum) {

      window.ethereum.on('accountsChanged', (accounts) => {
        commit('setState', { currentAccount: accounts[0] });
      });

      window.ethereum.on('disconnect', () => {
        commit('setState', { currentAccount: null });
      });

      commit('setState', { hasProvider: true });
      try {
        const result = await window.ethereum.request({ method: 'eth_requestAccounts' });
        commit('setState', { currentAccount: result[0] });
      } catch (e) {
        console.log('ERROR', e);
      }
    }
    commit('setState', { initialized: true });
  }
};

export default actions;
