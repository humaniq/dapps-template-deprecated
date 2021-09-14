import { MutationTree } from 'vuex';
import { ProviderStateInterface } from 'src/store/provider/state';


const mutation: MutationTree<ProviderStateInterface> = {
  setState(state, payload) {
    Object.assign(state, payload);
  }
};

export default mutation;
