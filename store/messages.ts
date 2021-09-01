import {
  VuexModule,
  Module,
  Mutation
} from 'vuex-module-decorators';

export interface IMessages {
  messageList: string[]
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'messages'
})
export default class Messages extends VuexModule implements IMessages {
  private _messageList: string[] = [];

  get messageList(): string[] {
    return this._messageList;
  }

  @Mutation
  SET_MESSAGE_LIST(messageList: string[]) {
    this._messageList.push(...messageList);
  }

  @Mutation
  CLEAR_MESSAGE_LIST() {
    this._messageList.splice(0);
  }

}
