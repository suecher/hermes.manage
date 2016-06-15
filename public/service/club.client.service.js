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
                $scope.provincemodel = data;

                for(var item of data){
                    if(item.ProId == currentClub.province){

                    }
                }
            });

        $http.get("/city")
            .success(function(data) {
                $scope.citymodel = data;

            });



        $http.get("/district")
            .success(function(data) {
                $scope.districtmodel = data;
            });

        $scope.btnSaveClub = function(){
            alert('修改数据');
        }
    });