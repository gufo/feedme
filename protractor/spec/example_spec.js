'use strict';

describe('FEEDME application', function() {
  it('should suggest a nearby lunch venue', function() {
    browser.get('/');

    var heading = element(by.css('h1'));
    expect(heading.getText()).toEqual('Loungen');
  });
});
