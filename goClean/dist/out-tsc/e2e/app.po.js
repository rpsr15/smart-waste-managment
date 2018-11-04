import { browser, by, element } from 'protractor';
var PdFreeAngularcliPage = /** @class */ (function () {
    function PdFreeAngularcliPage() {
    }
    PdFreeAngularcliPage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    PdFreeAngularcliPage.prototype.getParagraphText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return PdFreeAngularcliPage;
}());
export { PdFreeAngularcliPage };
//# sourceMappingURL=app.po.js.map