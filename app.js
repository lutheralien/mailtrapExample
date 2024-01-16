const { MailtrapClient } = require("mailtrap");

require("dotenv").config({
    path: ".env",
  });

const client = new MailtrapClient({ endpoint: process.env.MAILTRAP_ENDPOINT, token: process.env.MAILTRAP_TOKEN });
const sender = {
    email: process.env.MAILTRAP_SENDER_EMAIL,
    name: process.env.MAILTRAP_SENDER_NAME,
  };
  const recipients = [
    {
      email: process.env.MAILTRAP_RECIPIENT_EMAIL,
    },
  ];
     client
    .send({
      from: sender,
      to: recipients,
      subject: "Activate your account",
      text: `Hello lutherAlien`,
      category: process.env.MAILTRAP_CATEGORY,
    })
    .then(console.log, console.error);
  