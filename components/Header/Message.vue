<template>
  <div class='w-full'>
    <span v-for='(message, idx) of messageList' :key='idx' class='fixed w-full z-50'>
      <input
        type='checkbox'
        :id='`message-${idx}`'
        class='hidden'
        @click='removeMessage(message)'
      >
      <label class='cursor-pointer flex items-center justify-between w-full p-2 shadow opacity-100'
             :class="
             (messageType === messageTypeConstant.Success.name)? 'bg-green-300 text-green-900'
             :(messageType === messageTypeConstant.Warning.name)? 'bg-yellow-300 text-yellow-900'
             :(messageType === messageTypeConstant.Danger.name)? 'bg-red-300 text-red-900'
             :'bg-blue-300 text-blue-900'"
             title='close'
             :for='`message-${idx}`'>
        {{ message }}
        <svg class='fill-current text-white'
             :class="
             (messageType === messageTypeConstant.Success.name)? 'text-green-900'
             :(messageType === messageTypeConstant.Warning.name)? 'text-yellow-900'
             :(messageType === messageTypeConstant.Danger.name)? 'text-red-900'
             :'text-blue-900'"
             xmlns='http://www.w3.org/2000/svg'
             width='18'
             height='18'
             viewBox='0 0 18 18'>
          <path
            d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
        </svg>
      </label>
    </span>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator';
import { MessagesModule } from '~/utils/store-accessor';
import { MessageType } from '~/constant/messageType';

@Component({
  components: {}
})
export default class Message extends Vue {
  public messageTypeConstant = MessageType;

  get messageList(): string[] {
    return JSON.parse(JSON.stringify(MessagesModule.messageList));
  }

  get messageType() {
    return MessagesModule.messageType;
  }

  removeMessage(message: string) {
    const result = this.messageList.filter(msg => msg != message);
    MessagesModule.CLEAR_MESSAGE_LIST();
    MessagesModule.SET_MESSAGE_LIST(result);
  }

}
</script>
