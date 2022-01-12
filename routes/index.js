const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Employee }= require('../models/person');

router.get('/api/persons',(req,res)=>{
    Employee.find({},(err,data)=>{
        if(!err){
            res.send(data);
        }else{
            console.log(err); 
        }
    });
});

router.post('/api/person/add',(req,res)=>{
    const emp = new Employee({
        fname: req.body.fname,
        lname: req.body.lname,
        age: req.body.age,
        gender:req.body.gender
    });
    emp.save((err,data)=>{
        res.status(200).json({code: 200 , message:'Employee added successfully', addEmployee: data})
    });
});

//update 
router.put('/api/person/edit/:id',(req,res)=>{
    const emp = {
        fname: req.body.fname,
        lname: req.body.lname,
        age: req.body.age,
        gender: req.body.gender
    };
    //console.log('req.params.id', req.params.id);
    //res.json(emp);
    Employee.findByIdAndUpdate(req.params.id,{ $set:emp },{ new:true },(err,data) => {
        if(!err){
            res.status(200).json({code: 200 , message:'Employee added successfully', updateEmployee: data})
        }else{
            console.log(err);
        }
    })

});

//delete
router.delete('/api/person/:id',(req,res)=>{
    Employee.findByIdAndRemove(req.params.id,(err,data)=>{
        if(!err){
            res.status(200).json({code: 200 , message:'Employee removed successfully', deleteEmployee: data});
        }else{
            console.log(err);
        }
    });
});

module.exports = router;


