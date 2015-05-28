describe('expensesController', function() {
    beforeEach(module('app'));

    var $controllerConstructor;
    var scope;


    beforeEach(inject(function($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));

    it('should have three expense items', function() {
        var ctrl = $controllerConstructor('expensesController', {$scope: scope});
        expect(ctrl.expenseItems.length).toBe(3);
    });

});