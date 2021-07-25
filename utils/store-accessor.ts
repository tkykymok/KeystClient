import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Keyst10200 from '~/store/keyst10200';
import Keyst10400 from '~/store/keyst10400';

let Keyst10200Module: Keyst10200;
let Keyst10400Module: Keyst10400;

function initialiseStores(store: Store<any>): void {
  Keyst10200Module = getModule(Keyst10200, store);
  Keyst10400Module = getModule(Keyst10400, store);
}

export { initialiseStores, Keyst10200Module, Keyst10400Module };
