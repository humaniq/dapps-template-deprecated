import { makeAutoObservable } from 'mobx';
import { useProviderStore } from 'src/store/providerStore';

const provider = useProviderStore();

export class LayoutModel {

  init() {
    void provider.init();
  }

  get connectBtnProps() {
    return {
      label: provider.currentAccount
        ? `${ provider.currentAccount.slice(0, 4) }...${ provider.currentAccount.substring(provider.currentAccount.length - 4) }`
        : 'connect',
      action: provider.currentAccount ? () => null : () => {
        window.ethereum.enable();
      }
    };
  }

  constructor() {
    makeAutoObservable(this);
  }
}
