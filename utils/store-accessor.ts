import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Keyst10200 from '~/store/keyst10200';
import Authentication from '~/store/authentication';
import Keyst10400 from '~/store/keyst10400';
import Keyst10500 from '~/store/keyst10500';
import Messages from '~/store/messages';
import Keyst10600 from '~/store/keyst10600';

let Keyst10200Module: Keyst10200;
let AuthenticationModule: Authentication;
let Keyst10400Module: Keyst10400;
let Keyst10500Module: Keyst10500;
let MessagesModule: Messages;
let Keyst10600Module: Keyst10600;

function initialiseStores(store: Store<any>): void {
  Keyst10200Module = getModule(Keyst10200, store);
  AuthenticationModule = getModule(Authentication, store);
  Keyst10400Module = getModule(Keyst10400, store);
  Keyst10500Module = getModule(Keyst10500, store);
  MessagesModule = getModule(Messages, store);
  Keyst10600Module = getModule(Keyst10600, store);
}

export { initialiseStores, Keyst10200Module, AuthenticationModule, Keyst10400Module, Keyst10500Module, MessagesModule, Keyst10600Module };