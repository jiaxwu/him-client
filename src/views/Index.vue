<script setup lang="ts">
import Client from '../sdk/client';
import { useStore } from 'vuex'
import { getFriendInfos } from '@/api/friend';

const store = useStore()
const client = Client.newClient(store.state.wsURL, store.state.token)
client.start()

const sendMsg = () => {
    client.sendMsg({
        Receiver: {
            Type: "User",
            ReceiverID: 2
        },
        Content: {
            TextMsg: {
                Content: "测试测试哈哈哈"
            }
        }
    })
}


getFriendInfos({
    isFriend: true
}).then(res=>{
    console.log(res)
}).catch(res=>{
    console.log(res)
})

</script>

<template>
    <button @click="sendMsg()">发送消息</button>
</template>

<style scoped lang="scss">
</style>