export interface IMessage {
    id: string,
    type: 'default' | 'error' | 'help' | 'info' | 'maintenance' | 'new' | 'success' | 'warning' | undefined,
    text: string
}
