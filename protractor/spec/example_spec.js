'use strict';

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('/');

    var heading = element(by.css('h1'));
    expect(heading.getText()).toEqual('\'Allo, \'Allo!');
  });
});
