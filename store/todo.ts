import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';

export interface ITodo {
  userId: string;
  id: number | null;
  title: string;
  completed: boolean;
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'todo'
})
export default class Todo extends VuexModule implements ITodo {
  private _userId: string = '';
  private _id: number | null = null;
  private _title: string = '';
  private _completed: boolean = false;

  get userId(): string {
    return this._userId;
  }

  get id(): number | null {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get completed(): boolean {
    return this._completed;
  }

  get getTodo() {
    let todo: ITodo = {
      userId: this._userId,
      id: this._id,
      title: this._title,
      completed: this._completed
    };
    return todo;
  }

  @Mutation
  public SET_TODO(todo: ITodo) {
    this._userId = todo.userId;
    this._id = todo.id;
    this._title = todo.title;
    this._completed = todo.completed;
  }

  @Mutation
  public SET_USERID(value: string) {
    this._userId = value;
  }

  @Mutation
  public SET_ID(value: number) {
    this._id = value;
  }

  @Mutation
  public SET_TITLE(value: string) {
    this._title = value;
  }

  @Mutation
  public SET_COMPLETED(value: boolean) {
    this._completed = value;
  }

  @Action({ rawError: true })
  public async fetchTodo(id: string) {
    const { data } = await $axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    this.SET_ID(data.id);
    this.SET_USERID(data.userId);
    this.SET_TITLE(data.title);
    this.SET_COMPLETED(data.completed);
  }
}
