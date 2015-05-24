'use strict';

describe('FEEDME application', function() {
  it('should suggest a nearby lunch venue', function() {
    browser.get('/');

    element(by.css('h1')).getText().then(function(actual) {
      expect(['Loungen', 'Matlåda i köket']).toContain(actual);
    });
  });
});
