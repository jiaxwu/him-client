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

    private constructor(wsURL: string, token: string) {
        this.wsServer = WSServer.newWSServer(wsURL, token, this.eventHandler)
    }

    // 创建Client
    public static newClient(wsURL: string, token: string) {
        if (this.client === undefined) {
            this.client = new Client(wsURL, token)
        }
        return this.client
    }

    // 启动客户端（自能start一次）
    public start() {
        if (this.isStart) {
            return
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