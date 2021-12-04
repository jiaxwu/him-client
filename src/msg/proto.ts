// 发送消息请求
export class SendMsgReq {
  Receiver!: {
    Type: string,
    ReceiverID: number
  }
  SendTime?: number
  CorrelationID?: string
  Content!: {
    TextMsg: {
      Content: string
    }
  }
}