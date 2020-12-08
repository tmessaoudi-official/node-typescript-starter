import index from './Controller/Index';

// @ts-ignore : it works @todo .env file and import it
const port: number = process.env.PORT | 8080;

// @ts-ignore : it works i still don't know wht it shows a warning
index.listen(port, (err) => {
	if (err) {
		return console.log(err);
	}

	return console.log(`server is listening on ${port}`);
});
