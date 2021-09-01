import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Keyst10200 from '~/store/keyst10200';
import Authentication from '~/store/authentication';
import Keyst10400 from '~/store/keyst10400';
import Messages from '~/store/messages';

let Keyst10200Module: Keyst10200;
let AuthenticationModule: Authentication;
let Keyst10400Module: Keyst10400;
let MessagesModule: Messages;

function initialiseStores(store: Store<any>): void {
  Keyst10200Module = getModule(Keyst10200, store);
  AuthenticationModule = getModule(Authentication, store);
  Keyst10400Module = getModule(Keyst10400, store);
  MessagesModule = getModule(Messages, store);
}

export { initialiseStores, Keyst10200Module, AuthenticationModule, Keyst10400Module, MessagesModule };
