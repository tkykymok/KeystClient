import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Keyst10200 from '~/store/keyst10200';

let Keyst10200Module: Keyst10200;

function initialiseStores(store: Store<any>): void {
  Keyst10200Module = getModule(Keyst10200, store);
}

export { initialiseStores, Keyst10200Module};
