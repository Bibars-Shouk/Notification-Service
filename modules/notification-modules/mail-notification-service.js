const NotificationService = require("./notification-service");

class MailNotificationService extends NotificationService {
  pushNotification(message) {
    const sendgridMail = require("@sendgrid/mail");
    sendgridMail.setApiKey(this.serviceConfig.sendgridApiKey);

    sendgridMail
      .send({
        to: message.recipientEmailAddress,
        from: this.serviceConfig.senderEmailAddress,
        subject: message.emailSubject,
        text: message.body,
      })
      .then(() => {
        console.log(`Email sent - from Email: ${this.serviceConfig.senderEmailAddress}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = MailNotificationService;
