var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
        $scope.pageClass="hello";
    }
]);

bookStoreCtrls.controller('BookListCtrl', ['$scope',
    function($scope) {
        $scope.books = [{
            title: "PAK88",
            author: "YH"
        }, {
            title: "PAK75",
            author: "YH"
        }, {
            title: "PAK50",
            author: "YH"
        }];
        $scope.pageClass="list";
    }
]);

/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */
