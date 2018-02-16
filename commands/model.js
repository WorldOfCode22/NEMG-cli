const inquirer = require('inquirer');
const fs = require('fs');
const modelText = require('../precompiled-text/model');
const modelObj = {};

const objectQuestions = [{
    type: 'lnput',
    name: 'key',
    message: 'Please Enter Key Name'
},
{
  type: 'list',
  name: 'value',
  message: 'Please Enter Key Type',
  choices: [Array, Number, String, Date, 'Buffer', Boolean, 'ObjectId','{}','[]']
},
{
  type: 'list',
  name: 'done',
  message: 'Are Their More Keys To Add To Model',
  choices: ["Yes","No"]
}]
const nameQuestions = [{
  type: 'input',
  name: 'modelName',
  message: 'Name of Model?'
}]
module.exports = function(){
  objectMaker().then((err)=>{
    inquirer.prompt(nameQuestions).then(answers=>{
      console.log(process.env.APP_NAME);
      fs.writeFile('./'+process.env.APP_NAME+'/models/'+answers.modelName+'.js',modelText(answers.modelName,JSON.stringify(modelObj),(err)=>{
        if(err){
          console.log(err);
        }else{
          console.log("Model Made!");
        }
      }))
    })
  })

}

function objectMaker(){
  return inquirer.prompt(objectQuestions).then(answers=>{
    if(answers.done === "No"){
      modelObj[answers.key] = answers.value;
      console.log("Below Is The Final Model So Far");
      console.log(modelObj);
    }else{
      modelObj[answers.key] = answers.value;
      console.log("Below Is The Model So Far");
      console.log(modelObj);
      objectMaker();
    }
  })
}
