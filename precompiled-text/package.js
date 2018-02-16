module.exports = function(name, author){
  let package = {
    name,
    version: '0.1.0',
    description: 'created with NEMG-cli',
    main: 'app.js',
    scripts: {
      start: 'node app.js'
    },
    author,
    license: "MIT",
    dependencies: {
      express: '^4.16.2',
      mongoose: '^5.0.5',
      dotenv: '^v5.0.0'
    }
  }
  return JSON.stringify(package);
};
