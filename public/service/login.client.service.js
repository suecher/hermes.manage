/**
 * Created by SueCher on 2016/6/5.
 */
"use strict";

angular.module('app',[])
    .controller('LoginCtrl',function($scope,$http){
        $scope.login = function(){

            $http.post('/login',{username:$scope.username,password:$scope.password})
                .success(function(data){
                    if(data.result){
                        alert('登陆成功');
                        window.location.href = "/main";
                    } else {
                        console.log(data);
                        alert('登陆失败');
                    }
                })
                .error(function(data){
                    console.log(data);
                });
        }
    });