
module.exports = function (request, response) {
    var pathname = url.parse(request.url).pathname;
   var ext = path.extname(pathname);
   ext = ext ? ext.slice(1) : 'unknown';

   if (ext.match(config.Expires.fileMatch)) {

       var expires = new Date();

       expires.setTime(expires.getTime() + config.Expires.maxAge );

       response.setHeader("Expires", );
       
       response.setHeader("Cache-Control", "max-age=60*60*24*7");

   }
}