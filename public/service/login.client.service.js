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
                        swal("登陆成功", "验证信息正确","success");
                        window.location.href = "/main";
                    } else {
                        sweetAlert("登陆信息错误!", "登陆失败","error");
                    }
                })
                .error(function(data){
                    sweetAlert("登陆信息错误!", "登陆失败", "error");
                });
        }
    });