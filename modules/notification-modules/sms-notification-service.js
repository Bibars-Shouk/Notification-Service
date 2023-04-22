const NotificationService = require("./notification-service");

class SmsNotificationService extends NotificationService {
  pushNotification(message) {
    const twilioClient = require("twilio")(
      this.serviceConfig.twilioAccountSid,
      this.serviceConfig.twilioAuthToken
    );

    twilioClient.messages
      .create({
        body: message.body,
        from: this.serviceConfig.senderPhoneNumber,
        to: message.recipientPhoneNumber,
      })
      .then((msg) => console.log(`Message Sent - from SID: ${msg.accountSid}`))
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = SmsNotificationService;
