<script setup lang="ts">
import Client from '../sdk/client';

const client = new Client('ws://localhost:8080/msg', 'c61e1dd2-ebc3-4ed1-9cd7-335e7fac201e')
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

</script>

<template>
    <button @click="sendMsg()">发送消息</button>
</template>

<style scoped lang="scss">
</style>