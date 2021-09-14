export interface ProviderStateInterface {
  initialized: boolean;
  currentAccount: string;
  hasProvider: boolean;
}

function state(): ProviderStateInterface {
  return {
    initialized: false,
    currentAccount: '',
    hasProvider: false
  };
};

export default state;
