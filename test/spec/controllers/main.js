'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('feedmeApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  function mockResponse() {
    $httpBackend.expectGET('/places/nearby.json').respond(200, {
      'response': {
        'groups': [ {
          'items': [
            {
              'venue': { 'name': 'Lounge Lizards' }
            },
            {
              'venue': { 'name': 'Kitchen Kittens' }
            }]
        } ]
      }
    });
    $httpBackend.flush();
  }

  it('should fetch a list of venues and expose the first one', function () {
    mockResponse();
    expect(scope.venue).toEqual({name: 'Lounge Lizards'});
  });
});
