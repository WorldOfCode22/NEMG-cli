require('dotenv').config();
const program = require('commander');

const init = require('./commands/init');
const model = require('./commands/model');

program
  .version('0.1.0','-v, --version')
  .option('-i , --init', 'Create New Project')
  .option('-m, --model', 'Create New Mongoose Model')
  .parse(process.argv)

 if(program.init){
   init();
}
if(program.model){
  model();
}
