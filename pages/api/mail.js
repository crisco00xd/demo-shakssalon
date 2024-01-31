const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
	const body = JSON.parse(req.body);

	const message = `
    Name: ${body.name}\r\n
    Phone: ${body.phone}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
`;

	const data = {
		to: 'jake@weblavida.com', // Your email where you'll receive emails
		from: 'jake@weblavida.com', // your website email address here
		subject: 'New web form message',
		text: message,
		html: message.replace(/\r\n/g, '<br>'),
	};

	await mail.send(data);
	// console.log(body);
	res.status(200).json({ status: 'Ok' });
};
