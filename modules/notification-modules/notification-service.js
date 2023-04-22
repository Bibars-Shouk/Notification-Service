class NotificationService {
  constructor(serviceConfig) {
    this.serviceConfig = serviceConfig;
  }

  pushNotification(message) {
    throw new Error("pushNotification method must be implemented!");
  }
}

module.exports = NotificationService;
