# Email marketing with Mailgun and Cobalt Intelligence

This package is a simple script that allows users with little to no coding experience to leverage [Cobalt Intelligence](https://cobaltintelligence.com) and [Mailgun](https://www.mailgun.com/) for email marketing.

## Getting Started

Ensure that you have [NodeJS](https://nodejs.org/en/) installed.

Clone or download the repository and run `npm install`. 

Set apiKey and domain that was setup with Mailgun in `.sample.env`. You will also need to set the DNS records which could take 24-48 hours.

Rename `.sample.env` to `.env`

Use `npm run start:test` in order to test the code. Change the html, subject, from, and to address in `src/tester.ts` in order to test it. Make sure your csv with your leads is formatted as a csv from Cobalt Intelligence would be.

After you feel comfortable with the test code, update the html, from, and subject in `src/index.ts`.

After that, you just need to run `npm start`. This will send out emails to everyone in the csv list.

[Full Guide Here](https://blog.cobaltintelligence.com/easy-email-marketing-with-mailgun/)

### Prerequisites

Tested on Node v12.4.0 and NPM v6.9.0.

### Installing

After installing [NodeJS](https://nodejs.org/en/) you should be able to just run the following in the terminal.

```
npm i
```

## Built With

* [Mailgun](https://github.com/mailgun/mailgun-js) - Mailgun's JS library
* [NodeJS](https://nodejs.org/en/) - NodeJS
* [csv-parser](https://github.com/mafintosh/csv-parser) - Library to parse csvs

## Authors

* **Jordan Hansen** - *Initial work* - [Jordan Hansen](https://github.com/aarmora)


## License

This project is licensed under the ISC License

