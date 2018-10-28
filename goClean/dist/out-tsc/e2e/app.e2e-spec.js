import { PdFreeAngularcliPage } from './app.po';
describe('pd-free-angularcli App', function () {
    var page;
    beforeEach(function () {
        page = new PdFreeAngularcliPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map