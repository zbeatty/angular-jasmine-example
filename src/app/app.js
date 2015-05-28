(function() {

    var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/Expense/expense.html'
            })
            .when('/admin', {
                templateUrl: 'app/Admin/admin.html'
            })
            .otherwise( { redirectTo: '/' } );
    });

}());