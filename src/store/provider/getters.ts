import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ProviderStateInterface } from './state';

const getters: GetterTree<ProviderStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
