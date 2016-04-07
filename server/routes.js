/**
 * Created by Tauqeer Ahmed on 3/15/2016.
 */

var Firebase = require('firebase');
var DBSchemas = require('./models/DatabaseSchema');    //Importing a model

module.exports = function (app) {

    //For rendering index.html
    app.get('/', function (req, res) {
        res.sendFile('index.html');
    });
    //For signup route
    app.post('/signup', function (req, res) {
        console.log('Sign up body ', req.body);
        var ref = new Firebase("https://appsalesman1.firebaseio.com/");
        ref.createUser({
            email: req.body.email,
            password: req.body.password
        }, function (err, data) {
            if (err) {
                //Error Email is already taken
                res.send({status: false, message: 'Can not Sign up to firebase', error: err})
            }
            else {
                req.body.firebaseUserId = data.uid;
                var company = new DBSchemas.Company(req.body);    //Creating instance from model
                company.save(function (err, success) {
                    if (err) {
                        res.send({status: false, message: "Can not sign up to mongodb", errorData: err});
                    }
                    else {
                        res.send({status: true, message: 'Sign Up Successfully', successData: success});
                    }
                })
            }
        });
    });
    //For Signin Route
    app.post('/signin', function (req, res) {
        console.log("Login Body ", req.body);
        var ref = new Firebase("https://appsalesman1.firebaseio.com/");
        ref.authWithPassword({
            email: req.body.email,
            password: req.body.password
        }, function (err, authData) {
            if (err) {
                res.send({status: false, message: 'Login error firebase ', errorData: err});
            }
            else {
                DBSchemas.Company.find({email: req.body.email}, function (err, success) {
                    if (err) {
                        res.send({status: false, message: 'Login error', errorData: err});
                    }
                    else {
                        res.send({
                            status: true,
                            message: 'Login Successfully',
                            successData: success,
                            authData: authData
                        });
                    }
                });

            }
        })
    });
    //For Adding Salesman
    app.post('/addSalesman', function (req, res) {
        console.log('Salesman ', req.body);
        var ref = new Firebase("https://appsalesman1.firebaseio.com/");
        ref.createUser({
            email: req.body.email,
            password: req.body.password
        }, function (err, data) {
            if (err) {
                res.send(err);
            }
            else {
                req.body.firebaseSalesmanId = data.uid;
                var salesman = new DBSchemas.Salesman(req.body);
                salesman.save(function (err, success) {
                    if (err) {
                        res.send({status: true, message: "Salesman not Added", error: err});
                    }
                    else {
                        //res.send(success);
                        res.send({status: true, message: 'Salesman Added', success: success});
                    }
                })
            }
        })
    });
    app.get('/viewSalesman/:id', function (req, res) {
        DBSchemas.Salesman.find({companyId: req.params.id}, function (err, success) {
            if (err) {
                res.send({status: false, message: 'Error fetching the salesman', errorData: err});
            }
            else {
                res.send({status: true, message: 'Successfully fetch the salesman', successData: success});
            }
        });
    });

};