/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce() <--
 *
 * - Clone an array
 * - Shuffle an array
 */

/**
 * Numbers
 */
/*
const simple_numbers = [ 3, 7, 13, 19 ];

// old way 🤮
// let sum = 0;
// simple_numbers.forEach(num => {
// 	sum = sum + num;
// });

// new way 😎
const total_sum = simple_numbers.reduce( (sum, num) => {
	console.log(`Sum is ${sum} and num is ${num}`, sum);
	return sum + num;
}, 1295);
// const total_sum2 = simple_numbers.reduce( (sum, num) => sum + num, 1295 )
console.log("The sum of all the numbers is:", total_sum);
*/


/*
const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 5, 33 ];
const numbers_sum = numbers.reduce( (prevValue, curr) => {
	return prevValue + curr;
}, 0 );
console.log(`Reducer complete, numbers_sum is ${numbers_sum}`);
*/


/**
 * Students
 */
/*
const students = [
	{
		name: "Johan",
		points: 13,
	},
	{
		name: "Peter",
		points: 3,
	},
	{
		name: "Alicia",
		points: 42,
	},
	{
		name: "Elliot",
		points: 88,
	},
	{
		name: "Maja",
		points: 35,
	},
];
const total_points = students.reduce( (sum, student) => {
	return sum + student.points;
}, 0 );
console.log("Total points for all students:", total_points);
*/


/*
const products = [
	{
		sku: "CORR-BWL",
		name: "Corrosive bowl",
		in_stock: 321,
		price: 0.99,
	},
	{
		sku: "CTN-SPCE",
		name: "Cotton spice rack",
		in_stock: 2,
		price: 149.99,
	},
	{
		sku: "GOOD-COOKIES",
		name: "Inside-out Oreo cookies",
		in_stock: 18,
		price: 2.49,
	},
	{
		sku: "BACK-BREAKER",
		name: "The uncomfortable broom",
		in_stock: 1,
		price: 28.65,
	},
];

// calculate total stock value
const total_stock_value = products.reduce((sum, product) => {
	return sum + product.price * (product.in_stock);
}, 0);
console.log(`The total stock value is $ ${total_stock_value}.`);
*/

const friends = [
	{ name: 'John', grade: 2, year: 3, sex: 'M' },
	{ name: 'Sarah', grade: 3, year: 2, sex: 'F' },
	{ name: 'Bob', grade: 3, year: 5, sex: 'M' },
	{ name: 'Johnny', grade: 2, year: 2, sex: 'M' },
	{ name: 'Ethan', grade: 4, year: 1, sex: 'M' },
	{ name: 'Paula', grade: 4, year: 5, sex: 'F' },
	{ name: 'Donald', grade: 5, year: 5, sex: 'M' },
	{ name: 'Jennifer', grade: 3, year: 3, sex: 'F' },
	{ name: 'Courtney', grade: 3, year: 1, sex: 'F' },
	{ name: 'Jane', grade: 4, year: 3, sex: 'F '}
];

// calculate average grade for all friends
const average_grade = friends.reduce((sum, friend) => {
	return sum + friend.grade;
}, 0) / friends.length;
console.log("The average grade for all friends is:", average_grade);

// calculate average grade for all girls
const girls = friends.filter(friend => friend.sex === 'F');
const average_grade_girls = girls.reduce((sum, friend) => sum + friend.grade, 0) / girls.length;
console.log("The average grade for all girl-friends is:", average_grade_girls);
