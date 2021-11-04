export interface Notification {
  message: string;
  type: NotificationType;
}

export enum NotificationType {
  Error,
  Success,
  Warning
}
