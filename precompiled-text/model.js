module.exports = function(name, obj){
return "const mongoose = require('mongoose');\n const Schema = mongoose.Schema; \n"+
"let schema = new Schema("+obj+")\n"+
`module.exports = mongoose.model(${name},scheam)`
}
