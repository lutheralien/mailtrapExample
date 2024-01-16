const sendMail = require("./app");

sendMail(process.env.MAILTRAP_RECIPIENT_EMAIL,"Account Activation",`Account activation for ${process.env.MAILTRAP_RECIPIENT_EMAIL}`,"Account Activation")
