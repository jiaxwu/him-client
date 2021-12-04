import moment from 'moment'
import store from '@/store'

// 处理网络长连接
export default class WSServer {
    // 单例模式
    private static wsServer: WSServer
    // WebSocket
    private ws!: WebSocket
    // 是否已经调用run()
    private isRun: boolean = false
    // 心跳间隔
    private heartbeatTimeInterval: number = 50 * 1000
    // 上次重连时间
    private lastConnectTime: number = 0
    // 最小重连间隔
    private minReconnectTimeInterval: number = 5 * 1000
    // 事件处理器
    private eventHandler: (event: string) => void

    private constructor(eventHandler: (event: string) => void) {
        this.eventHandler = eventHandler
    }

    // 创建WSServer
    public static newWSServer(eventHandler: (event: string) => void) {
        if (this.wsServer === undefined) {
            this.wsServer = new WSServer(eventHandler)
            this.wsServer.run()
        }
        return this.wsServer
    }

    // 发送消息
    public sendMsg(msg: string) {
        // 连接必须打开
        if (!this.isOpen()) {
            throw new Error("WsServer not open")
        }

        // 发送消息
        this.ws.send(msg)
    }

    // 判断连接是否正常
    public isOpen(): boolean {
        if (this.ws !== undefined && this.ws.readyState === WebSocket.OPEN) {
            return true
        }
        return false
    }

    // 判断是否是连接中
    public isConnecting(): boolean {
        if (this.ws !== undefined && (this.ws.readyState === WebSocket.CONNECTING)) {
            return true
        }
        return false
    }

    // 开始连接
    private run() {
        // 如果已经启动
        if (this.isRun) {
            throw new Error("WSServer is running")
        }
        this.isRun = true
        this.connect()
        this.handleHeartbeat()
    }

    // 连接
    private connect() {
        // 如果已经打开或正在打开则抛出异常
        if (this.isConnecting() || this.isOpen()) {
            return
        }

        // 建立新的WebSocket
        this.lastConnectTime = moment().valueOf()
        new Promise((resolve, reject) => {
            if (store.state.token == '') {
                reject("token is empty")
                return
            }
            this.ws = new WebSocket(`${store.state.wsURL}?Token=${store.state.token}`)
            this.ws.onopen = () => {
                console.log("websocket open " + moment().toLocaleString())
            }
            this.ws.onmessage = (e) => {
                this.handleEvent(e.data)
            }
            this.ws.onclose = (e) => {
                reject("websocket close " + e)
                return
            }
            this.ws.onerror = (e) => {
                reject("websocket error " + e)
                return
            }
        }).catch(e => {
            this.handleReconnect()
        })
    }

    // 处理重连
    private handleReconnect() {
        const now = moment().valueOf()
        let delay = Math.max(this.minReconnectTimeInterval - (now - this.lastConnectTime), 0)
        setTimeout(() => {
            if (this.isOpen() || this.isConnecting()) {
                return
            }
            this.connect()
        }, delay)
    }

    // 处理心跳
    private handleHeartbeat() {
        setInterval(() => {
            try {
                if (this.isOpen()) {
                    this.ping()
                }
            } catch (e) { }
        }, this.heartbeatTimeInterval)
    }

    // 处理事件
    private handleEvent(data: string) {
        this.eventHandler(data)
    }

    // ping 请求
    private ping() {
        console.log("ping " + moment().toLocaleString())
        this.sendMsg('')
    }
}