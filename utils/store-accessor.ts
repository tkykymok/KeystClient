import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Keyst10200 from '~/store/keyst10200';
import Authentication from '~/store/authentication';

let Keyst10200Module: Keyst10200;
let AuthenticationModule: Authentication;

function initialiseStores(store: Store<any>): void {
  Keyst10200Module = getModule(Keyst10200, store);
  AuthenticationModule = getModule(Authentication, store);
}

export { initialiseStores, Keyst10200Module, AuthenticationModule};
