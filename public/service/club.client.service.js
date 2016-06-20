/**
 * Created by Administrator on 2016/6/3.
 */

"use strict";

angular.module('app',[])
    .controller('ClubCtrl',function($scope,$http){
       //alert( $("#currentClubInfo").text().toString());

        //$scope.userId = currentUserInfo.address;
        //
        //var json = "<%=currentClub%>";


        //currentClub currentManager 俱乐部以及 当前管理者的数据是在页面上定义的 因为ejs模板的关系;


        $scope.ngClubInfo = currentClub;
        $scope.ngManagerInfo = currentManager;



        $http.get("/province")
            .success(function(data) {
                for(var item of data){
                    if(item.ProID == currentClub.province){
                        $scope.ngClubInfo.provinceName = item.name;
                    }
                }

            });

        $http.get("/city")
            .success(function(data) {
                for(var item of data){
                    if(item.CityID == currentClub.city){
                        $scope.ngClubInfo.cityName = item.name;
                    }
                }
            });


        $http.get("/district")
            .success(function(data) {

                for(var item of data){
                    if(item.Id == currentClub.district){
                        $scope.ngClubInfo.districtName = item.DisName;
                    }
                }
            });


        // 重置基本数据
        $scope.btnReload = function(){

        };

        $scope.btnSaveClub = function(){
            swal({
                title: "您确定修改俱乐部数据吗?",
                text: "更新完后，所有客户端的数据都将马上更新为最新的数据",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "提交",
                cancelButtonText:"取消",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    $http.post("/updateclub",$scope.ngClubInfo)
                        .success(function(data) {
                            swal("确定!", "修改成功", "success");
                        })
                        .error(function(data){
                            console.log(data);
                        });


                } else {
                    swal("取消", "放弃修改", "error");
                }
            });
        }
    });