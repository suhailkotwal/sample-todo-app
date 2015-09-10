(function () {
    angular
        .module('todo.ui', ['ngRoute',
                            'LocalStorageModule'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'homeController'
                });
        }]).config(['localStorageServiceProvider', function (localStorageServiceProvider) {
            localStorageServiceProvider.setPrefix('ls');
}]);
})();
