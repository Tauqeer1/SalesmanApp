/**
 * Created by Tauqeer Ahmed on 3/22/2016.
 */
var mongoose = require('mongoose');


//=================Define Schema========================
//Company Schema
var CompanySchema = mongoose.Schema({
    companyName : { type : String , required : true},
    userName : { type : String , required : true},
    firstName : { type : String , required : true},
    lastName : { type : String , required : true},
    email : { type : String , required : true , unique : true},
    firebaseUserId : { type : String },
    createdOn : { type : Date , default : Date.now()}

});
//Salesman Schema
var SalesmanSchema = mongoose.Schema({
    name : { type : String , required : true },
    email : {type : String , required : true , unique : true},
    password : { type : String , required : true},
    firebaseSalesmanId : {type : String},
    companyId : {type : mongoose.Schema.Types.ObjectId , ref : 'Company'}
});
//Product Schema
var ProductSchema = mongoose.Schema({
    name : {type : String , required : true},
    description : {type : String , required : true},
    quantity : {type : Number , required : true},
    companyId : { type : mongoose.Schema.Types.ObjectId , ref : 'Company'}
});

module.exports.Company = mongoose.model('Company',CompanySchema);
module.exports.Salesman = mongoose.model('Salesman', SalesmanSchema);
module.exports.Product = mongoose.model('Product',ProductSchema);

