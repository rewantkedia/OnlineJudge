
var request = require('request');

var program = {
    script : "#include<iostream> \n int main() {     std::cout<<56;return 0; }",
    language: "cpp",
    versionIndex: "0",
    clientId: "e1296a045c8fd205c2bc478cde607bf5",
    clientSecret:"61863b5c2bf62d8898dbb62630a961ec8c14c8e3c6ba2f91759d2d5a391e7b06"
};
request({
    url: 'https://api.jdoodle.com/execute',
    method: "POST",
    json: program
},
function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});
      

