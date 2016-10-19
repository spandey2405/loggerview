/**
 * Created by saurabh on 16/9/16.
 */
var totalItems = 0;
var items;
var searchq = '?q=*.*';
(function() {
    'use strict';

    angular
        .module('app', [])
        .factory('PagerService', PagerService)
        .controller('ExampleController', ExampleController);

    function ExampleController(PagerService) {
        var vm = this;

        vm.dummyItems = _.range(1, 151); // dummy array of items to be paged
        vm.pager = {};
        vm.setPage = setPage;
        vm.searchquery    = searchquery;

        initController();

        function initController() {
            // initialize to page 1
            vm.setPage(1);
        }
        var pageSize = 100;
        function searchquery(page){

            searchq = query_maker();
            vm.items = get_data(page, pageSize, searchq);
            console.log(totalItems);
            vm.pager = PagerService.GetPager(totalItems, page, pageSize);

        }

        function setPage(page) {
            if (page < 1 || page > vm.pager.totalPages) {
                return;
            }

            // default page size is 1000

            vm.items = get_data(page, pageSize);
            // get pager object from service
            console.log(totalItems);
            vm.pager = PagerService.GetPager(totalItems, page, pageSize);

            // get current page of items

        }
    }

    function PagerService() {
        // service definition
        var service = {};

        service.GetPager = GetPager;

        return service;

        // service implementation
        function GetPager(totalItems, currentPage, pageSize) {
            // default to first page
            currentPage = currentPage || 1;




            // calculate total pages
            console.log(totalItems);
            var totalPages = Math.ceil(totalItems / pageSize);

            var startPage, endPage;
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            } else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                } else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                } else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }

            // calculate start and end item indexes
            var startIndex = (currentPage - 1) * pageSize;
            var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

            // create an array of pages to ng-repeat in the pager control
            var pages = _.range(startPage, endPage + 1);

            // return object with all pager properties required by the view
            return {
                totalItems: totalItems,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: pages
            };
        }
    }
})();
$('#pagination-js-navigation').attr("ng-if","vm.pager.pages.length");

$('#pagination-js-navigation').append('<li ng-class="{disabled:vm.pager.currentPage === 1}"><a ng-click="vm.setPage(1)">First</a> </li>');
$('#pagination-js-navigation').append('<li ng-class="{disabled:vm.pager.currentPage === 1}"><a ng-click="vm.setPage(vm.pager.currentPage - 1)">«</a> </li>');
$('#pagination-js-navigation').append('<li ng-repeat="page in vm.pager.pages" ng-class="{active:vm.pager.currentPage === page}"> <a ng-click="vm.setPage(page)">{{page}}</a> </li>');
$('#pagination-js-navigation').append('<li ng-class="{disabled:vm.pager.currentPage === vm.pager.totalPages}"> <a ng-click="vm.setPage(vm.pager.currentPage + 1)">»</a> </li>');
$('#pagination-js-navigation').append('<li ng-class="{disabled:vm.pager.currentPage === vm.pager.totalPages}"> <a ng-click="vm.setPage(vm.pager.totalPages)">Last</a> </li>');