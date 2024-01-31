var userModel = require('../models/userModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createUserDBService = (userDetails) =>{

  return new Promise(function myfn(resolve, reject){

    var userModelData = new userModel();

    userModelData.username = userDetails.username;
    userModelData.email = userDetails.email;
    userModelData.mobile = userDetails.mobile;
    userModelData.password = userDetails.password;
    var encrypted = encryptor.encrypt(userDetails.password);
    userModelData.password = encrypted;

    userModelData.save(function resultHandle(error, result){
      if(error){
        reject(false);
      }
      else{
        resolve(true);
      }
    });


  });
}
