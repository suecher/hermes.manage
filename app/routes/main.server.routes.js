/**
 * Created by SueCh on 2016/4/17.
 */

module.exports = function(app){
    app.route('/')
        .get(function(req,res){
            res.render('main',{});
            //res.send({t1:"123"});
        });

    app.route('/main')
        .get(function(req,res){
            res.end();
        });


    app.route('/login')
        .get(function(req,res){
            res.render('login',{});
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
};