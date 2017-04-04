import {ZombieGotchiPage} from "./app.po";

describe('zombie-gotchi App', () => {
	let page: ZombieGotchiPage;

	beforeEach(() => {
		page = new ZombieGotchiPage();
	});

	it('should display message saying app works', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('app works!');
	});
});
