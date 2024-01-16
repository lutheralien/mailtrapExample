const { MailtrapClient } = require("mailtrap");

require("dotenv").config({
  path: ".env",
});
const sendMail = async (email, subject, text, category) => {
  try {
    const client = new MailtrapClient({
      endpoint: process.env.MAILTRAP_ENDPOINT,
      token: process.env.MAILTRAP_TOKEN,
    });
    const sender = {
      email: process.env.MAILTRAP_SENDER_EMAIL,
      name: process.env.MAILTRAP_SENDER_NAME,
    };

   const res = await client.send({
      from: sender,
      to: [{ email }],
      subject,
      text,
      category,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMail;
