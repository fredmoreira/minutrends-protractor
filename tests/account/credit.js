describe('Account tests - Credit', function() {

	browser.get('/');

	it('Check initial title and click Credit button', function() {
		expect(browser.getTitle()).toEqual('bonuz Account');
		element(by.id('btnCredit')).click();
	});
});