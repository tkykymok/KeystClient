import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Todo from '~/store/todo';

let TodoModule: Todo;

function initialiseStores(store: Store<any>): void {
  TodoModule = getModule(Todo, store);
}

export { initialiseStores, TodoModule };
