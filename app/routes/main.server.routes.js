/**
 * Created by SueCh on 2016/4/17.
 */
 "use strict";

module.exports = function(app){


    let currentClub = {
        "_id" : "573daa1f770a7355eb24d923",
        "name" : "福建省中山市飞扬射箭俱乐部",
        "logo" : "713afffa-a469-4613-8ab7-8b1e406545f0.png",
        "pictureList" : [],
        "address" : "福建省中山市石岐街道石岐区逢源食街1号三楼(市药监局对面)",
        "province" : 19,
        "city" : 205,
        "district" : 205,
        "summary" : "",
        "phone" : "0760-88383584",
        "cphone" : "0760-88383584",
        "cperson" : "赖教武",
        "houseSize" : 400,
        "arrowRoadSize" : 24,
        "wifi" : 1,
        "parking" : 1,
        "followSize" : 1,
        "memberSize" : 0
    };

    let currentManager = {};

    app.route('/')
        .get(function(req,res){
            res.render('main',{});
            //res.send({t1:"123"});
        });

    app.route('/advert')
        .get(function(req,res){
            res.render('advert',{currentClub:currentClub,currentManager:currentManager});
        });

    app.route('/main')
        .get(function(req,res){
            res.render('main',{currentClub:currentClub,currentManager:currentManager});
        });

    app.route('/login')
        .get(function(req,res){
            res.render('login',{currentClub:req.session.club,currentManager:req.session.user});
        });



    app.route('/memberinfo')
        .get(function(req,res){
            res.render('memberInfo',{});
        });

    app.route('/addmember')
        .get(function(req,res){
            res.render('addmember',{});
        });

    app.route('/product')
        .get(function(req,res){
            res.render('product',{});
        });

    app.route('/invoice')
        .get(function(req,res){
            res.render('invoice',{});
        });

    app.route('/order')
        .get(function(req,res){
            res.render('order',{});
        });

    app.route('/clubinfo')
        .get(function(req,res){
            res.render('clubinfo',{});
        });
};