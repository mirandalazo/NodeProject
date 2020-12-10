const path = require('path');
module.exports={
    PORT: 3001,
    mongoUrl:'mongodb://localhost:27017/node-project',
    uploadPath: path.resolve(__dirname, '../../app/files')
};