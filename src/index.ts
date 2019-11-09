import { sampleHtml } from './sample-html';
import cheerio from 'cheerio';

const $ = cheerio.load(sampleHtml);

// Search by element
const title = $('title').text();

console.log('title', title);

// Search by class
const homeButton = $('.home_link').text();

console.log('Home button', homeButton);

// Search by class and child
const topNavButtons = $('.word-only li').text();

console.log('top nav buttons', topNavButtons);

// Search by property
const pizzaNews = $('a[href="/pizza-news"]').text();

console.log('pizza news', pizzaNews);

// Search by property and find only the first
const firstNavLink = $('li a').first().text();

console.log('first nav link', firstNavLink);

// Search by property and find only the last
const lastNavLink = $('li a').last().text();

console.log('last  nav link', lastNavLink);

// Get propery from element
const funFactsLink = $('.last a').prop('href');

console.log('fun facts link', funFactsLink);

// Access each of a list in a loop
$('li').each(function (index, element) {
	console.log('this text', $(element).text());
});
