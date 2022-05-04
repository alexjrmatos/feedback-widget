import { MailService, SendMailData } from "../mailService";
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "571f752c3d57c1",
        pass: "5820d1683a813c"
    }
});

export class NodemailerMailService implements MailService {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <feed@get.com>",
            to: "Alex <alex.jrmts@gmail.com>",
            subject,
            html: body
        })
    }
}