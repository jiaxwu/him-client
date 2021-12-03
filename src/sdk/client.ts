import moment from "moment";
import { v4 as uuid } from "uuid";
import { SendMsgReq } from "./proto";
import WSServer from "./ws_server";

// 客户端
export default class Client {
    private wsServer: WSServer
    private isStart: boolean = false
    constructor(wsURL: string, token: string) {
        this.wsServer = WSServer.newWSServer(wsURL, token, this.eventHandler)
    }

    // 启动客户端
    public start() {
        if (this.isStart) {
            throw new Error("client has been start")
        }
        this.isStart = true
        this.wsServer.run()
    }

    // 发送消息
    public sendMsg(sendMsgReq: SendMsgReq) {
        sendMsgReq.SendTime = moment().unix()
        sendMsgReq.CorrelationID = uuid()
        if (this.wsServer.isOpen()) {
            this.wsServer.sendMsg(JSON.stringify(sendMsgReq))
        }
    }

    // 事件处理器
    private eventHandler(event: string) {
        console.log(event)
    }

}