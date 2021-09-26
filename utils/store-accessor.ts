import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Keyst10100 from '~/store/keyst10100';
import Keyst10200 from '~/store/keyst10200';
import Keyst10300 from '~/store/keyst10300';
import Authentication from '~/store/authentication';
import Keyst10400 from '~/store/keyst10400';
import Keyst10500 from '~/store/keyst10500';
import Messages from '~/store/messages';
import Keyst10600 from '~/store/keyst10600';

let Keyst10100Module: Keyst10100;
let Keyst10200Module: Keyst10200;
let Keyst10300Module: Keyst10300;
let Keyst10400Module: Keyst10400;
let Keyst10500Module: Keyst10500;
let Keyst10600Module: Keyst10600;
let MessagesModule: Messages;
let AuthenticationModule: Authentication;

function initialiseStores(store: Store<any>): void {
  Keyst10100Module = getModule(Keyst10100, store);
  Keyst10200Module = getModule(Keyst10200, store);
  AuthenticationModule = getModule(Authentication, store);
  Keyst10400Module = getModule(Keyst10400, store);
  Keyst10500Module = getModule(Keyst10500, store);
  MessagesModule = getModule(Messages, store);
  Keyst10300Module = getModule(Keyst10300, store);
  Keyst10600Module = getModule(Keyst10600, store);
}

export { initialiseStores, Keyst10200Module, Keyst10300Module, Keyst10400Module, Keyst10500Module, Keyst10600Module, MessagesModule, AuthenticationModule};