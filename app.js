const program = require('commander');

const init = require('./commands/init');

program
  .version('0.1.0','-v, --version')
  .option('-i , --init', 'Create New Project')
  .parse(process.argv)

 if(program.init){
   init();
}
