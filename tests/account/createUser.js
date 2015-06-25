describe('Account tests - New User', function() {

	browser.get('/');

	it('Check initial title and click new user button', function() {
		expect(browser.getTitle()).toEqual('bonuz Account');
		element(by.id('btnCreate')).click();
	});

	it('Create new user', function() {
		expect(browser.getTitle()).toEqual('bonuz Account');
		element(by.model('form.name')).clear();
		element(by.model('form.name')).sendKeys("Teste Protractor");
		element(by.model('form.email')).clear();
		element(by.model('form.email')).sendKeys("testeprotractor@test.com");
		element(by.id('accountCreate')).click();
	});

	it('Check new user created', function() {
		browser.get('/#/home');
		var users = element.all(by.repeater('account in accounts'));
		expect(users.count()).toBe(1);
		webdriver.By.linkText('Teste Protractor').isPresent();
	});
});