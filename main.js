const cron = require("node-cron");
const NotificationServiceFactory = require("./modules/notification-modules/notification-service-factory");

// create service factory
const notificationServiceFactory = new NotificationServiceFactory();

// setup cron delivery details where (*) value means all/every and (x-y) value means from x to y
// minute	0-59
const minutes = "0";
// hour	0-23
const hours = "0";
// day of month	1-31
const dayOfMonth = "*";
// month	1-12 (or names)
const month = "*";
// day of week	0-7 (or names, 0 or 7 are sunday)
const dayOfWeek = "1-5";

// schedule cron job
cron.schedule(`${minutes} ${hours} ${dayOfMonth} ${month} ${dayOfWeek}`, async () => {
  console.log("Cron job executed!");

  //....
  //....

  // setup email & sms service config objects
  const mailServiceConfig = {
    serviceType: "email",
    sendgridApiKey: "<<sendgrid api key>>",
    senderEmailAddress: "<<sendgrid verified sender>>",
  };

  const smsServiceConfig = {
    serviceType: "sms",
    twilioAccountSid: "<<twilio account SID>>",
    twilioAuthToken: "<<twilio auth token>>",
    senderPhoneNumber: "<<twilio granted phone number>>",
  };

  // create email & sms services
  const mailNotificationService = notificationServiceFactory.createNotificationService(mailServiceConfig);
  const smsNotificationService = notificationServiceFactory.createNotificationService(smsServiceConfig);

  // setup messages
  const emailMessage = {
    recipientEmailAddress: "bibars.shouk1@gmail.com",
    emailSubject: "Cron email notification",
    body: "Hi there, this is a sendgrid test email!",
  };

  const smsMessage = {
    recipientPhoneNumber: "+962799676705",
    body: "Hi there, this is a twilio test sms!",
  };

  // push messages
  mailNotificationService.pushNotification(emailMessage);
  smsNotificationService.pushNotification(smsMessage);
});
