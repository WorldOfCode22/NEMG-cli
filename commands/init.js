const inquirer = require('inquirer');
const fs = require('fs');
const appText = require('../precompiled-text/app');
const envText = require('../precompiled-text/env');
const packageText = require('../precompiled-text/package')
const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Name of Project? '
  },
  {
    type: 'input',
    name: 'databaseURI',
    message: 'Mongo Database URI? '
  },
  {
    type: 'input',
    name: "port",
    message: "Port To Run Backend On?"
  },
  {
  type: 'input',
  name: 'author',
  message: "Name of Backend Author(s)"
  }
]
module.exports = function(){
  console.log("Initalizing");
  inquirer.prompt(questions).then(answers => {
  fs.mkdir('./'+answers.projectName,(err)=>{
    if(err){
      console.log("Error Occured Making Base Project Folder: " + err);
    }else{
      fs.writeFile('./'+answers.projectName+'/app.js', appText,(err)=>{
        if(err){
          console.log("Error Occurred Making Base Project File "+err);
        }else{
          console.log("Base File Created");
          fs.writeFile('./'+answers.projectName+'/.env', envText(answers.projectName,answers.databaseURI,answers.port),(err)=>{
            if(err){
              console.log("Error Creating .env File: "+ err);
            }else{
              console.log("env file created");
              fs.writeFile('./'+answers.projectName+'/package.json',packageText(answers.projectName,answers.author),(err)=>{
                if(err){
                  console.log("Error Creating NPM package");
                }else{
                  console.log("Created NPM package");
                  fs.mkdir('./'+answers.projectName+'/models',(err)=>{
                    if(err){
                      console.log("Error Creating Model File " + err);
                    }else{
                      console.log("Created Model File");
                      fs.writeFile('./.env','APP_NAME='+answers.projectName,(err)=>{
                        if(err){
                          console.log("Error creating refernce env file" + err);
                        }else{
                          console.log("Created refernce env file");
                          console.log("Project Created");
                        }
                      })
                    }
                  })
                }
              })
            }
          });
        }
      })
    }
  })

});
}
