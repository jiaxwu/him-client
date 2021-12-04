import moment from "moment";
import { v4 as uuid } from "uuid";
import { SendMsgReq } from "./proto";
import WSServer from "./ws_server";

// 客户端
export default class Client {
    // 单例模式
    private static client: Client
    // WSServer
    private wsServer: WSServer
    // 是否已经启动
    private isStart: boolean = false

    private constructor() {
        this.wsServer = WSServer.newWSServer(this.eventHandler)
    }

    // 创建Client
    public static newClient() {
        if (this.client === undefined) {
            this.client = new Client()
            this.client.start()
        }
        return this.client
    }

    // 发送消息
    public sendMsg(sendMsgReq: SendMsgReq) {
        sendMsgReq.SendTime = moment().unix()
        sendMsgReq.CorrelationID = uuid()
        if (this.wsServer.isOpen()) {
            this.wsServer.sendMsg(JSON.stringify(sendMsgReq))
        }
    }

    // 启动客户端（自能start一次）
    private start() {
        if (this.isStart) {
            return
        }
        this.isStart = true
    }

    // 事件处理器
    private eventHandler(event: string) {
        console.log(event)
    }

}