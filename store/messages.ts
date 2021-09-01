import {
  VuexModule,
  Module,
  Mutation
} from 'vuex-module-decorators';
import { MessageType } from '~/constant/messageType';

export interface IMessages {
  messageList: string[],
  messageType: string
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'messages'
})
export default class Messages extends VuexModule implements IMessages {
  private _messageList: string[] = [];
  private _messageType: string = MessageType.Success.name;

  get messageList(): string[] {
    return this._messageList;
  }

  get messageType(): string {
    return this._messageType;
  }

  @Mutation
  SET_MESSAGE_LIST(messageList: string[]) {
    this._messageList.splice(0);
    this._messageList.push(...messageList);
  }

  @Mutation
  CLEAR_MESSAGE_LIST() {
    this._messageList.splice(0);
  }

  @Mutation
  SET_MESSAGE_TYPE(messageType: string) {
    this._messageType = messageType;
  }



}
