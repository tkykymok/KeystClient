import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Keyst10100 from '~/store/keyst10100';
import Keyst10200 from '~/store/keyst10200';
import Authentication from '~/store/authentication';
import Keyst10400 from '~/store/keyst10400';

let Keyst10100Module: Keyst10100;
let Keyst10200Module: Keyst10200;
let AuthenticationModule: Authentication;
let Keyst10400Module: Keyst10400;

function initialiseStores(store: Store<any>): void {
  Keyst10100Module = getModule(Keyst10100, store);
  Keyst10200Module = getModule(Keyst10200, store);
  AuthenticationModule = getModule(Authentication, store);
  Keyst10400Module = getModule(Keyst10400, store);
}

export { initialiseStores, Keyst10100Module, Keyst10200Module, AuthenticationModule, Keyst10400Module };