var OAuth = require("oauth").OAuth,
oa = new OAuth(
    "https://api.twitter.com/oauth/request_token",
    "https://api.twitter.com/oauth/access_token",
    "I0lygkTyXKydpn16tDHbT7bec",
    "0Ha7tjt26sOjw8lW6Ht4IiUtdzvbAKTcpw17ddXGPYVDanh0QM",
    "1.0",
    "",
    "HMAC-SHA1"
);

var access_token = "YOUR-ACCESS-TOKEN";
var access_token_secret = "YOUR-ACCESS-TOKEN-SECRET";
var request = oa.get("https://stream.twitter.com/1.1/statuses/filter.json?track=node", access_token, access_token_secret);
request.addListener('response', function(response) {
    response.setEncoding('utf8');
    response.addListener('data', function(chunk) {
        console.log(chunk);
    });
    response.addListener('end', function() {
        console.log('-- END --');
    });
});
request.end();
