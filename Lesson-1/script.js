const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = employers.filter(element => element.trim().length)
.map(element => element.trim().charAt(0).toUpperCase() + element.trim().substr(1).toLowerCase());

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (own=0) => {
	const everyCash = data.cash;
	let total = own;
	everyCash.forEach((element) => {
		total += +element;
	});
	return total;
}

const lesson = calcCash();

const makeBusiness = (director, allModule, gang, course, teacher = 'Максим') => {
	const sumTech = [ ...data.react, ...data.add, 'и другие'];
	console.log(`
	Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}
	Команда Академии: ${gang.join(', ')}
	Первое что изучим будет ${sumTech[0]}. Он очень похож на HTML!
	Технологии которые мы изучим:
	${sumTech.join(', ')}
	`);
}
makeBusiness('Артем', lesson, command, nameCourse);
