import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { ProviderStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const provider: Module<ProviderStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};
