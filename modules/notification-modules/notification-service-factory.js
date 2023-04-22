const MailNotificationService = require("./mail-notification-service");
const SmsNotificationService = require("./sms-notification-service");

class NotificationServiceFactory {
  createNotificationService(serviceConfig) {
    switch (serviceConfig.serviceType) {
      case "email":
        return new MailNotificationService(serviceConfig);

      case "sms":
        return new SmsNotificationService(serviceConfig);

      default:
        throw new Error(`Unexpected notification service type: ${serviceConfig.serviceType}`);
    }
  }
}

module.exports = NotificationServiceFactory;
