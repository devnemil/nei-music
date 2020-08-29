const DOMAIN = process.env.DOMAIN;
const http = require("http");
const request = require("request");
function pingURL(url) {
 return new Promise((resp, rej) => {
   request(url,{ headers: { 'User-Agent': `${Math.floor(Math.random() * (99999999999999999 - 1)) + 1}` } }, (err, res, body) => {
     if (err) {rej()} else {resp();}
     
  
   });
 });
}

function ping()
{
  if (!process.env.DOMAIN) return;
pingURL(DOMAIN);
    }
setInterval(() => {
 ping();
}, 180000);

ping();
