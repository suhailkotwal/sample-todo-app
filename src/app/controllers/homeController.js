(function () {
    'use strict';

    angular.module('todo.ui')
        .controller('homeController', function ($scope, localStorageService) {
            var savedTodos = localStorageService.get('todos');
            var savedCompleted = localStorageService.get('completed');

            $scope.todosList = savedTodos || [];
            $scope.completedList = savedCompleted || []; 

            $scope.$watch('todosList', function () {
                localStorageService.set('todos', $scope.todosList);
            }, true);
            $scope.$watch('completedList', function () {
                localStorageService.set('completed', $scope.completedList);
            }, true);

            $scope.addTodo = function () {
                $scope.todosList.push($scope.todo);
                $scope.todo = '';
            };
            
            $scope.completeTodo = function(index) {
                $scope.completedList.push($scope.todosList[index]);
                $scope.removeTodo(index);
                $scope.todo = '';
            }

            $scope.removeTodo = function (index) {
                $scope.todosList.splice(index, 1);
            };
        
            $scope.removeCompletedTodo = function (index) {
                $scope.completedList.splice(index, 1);                
            }

        });
}())
