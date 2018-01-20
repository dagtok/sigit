

sudo npm install @angular-devkit/schematics@0.0.48 --save
sudo npm install @angular-devkit/schematics@0.0.46 --save
sudo npm install @angular/compiler@5.2.0 --save
sudo npm install @angular/core@5.2.0 --save

sudo npm install @angular-devkit/core@latest --save
sudo npm install @angular-devkit/schematics@latest --save
npm install @angular-devkit/schematics@latest --save
npm install @angular/common@latest @angular/compiler@latest @angular/compiler-cli@latest @angular/core@latest @angular/forms@latest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest @angular/animations@latest --save


sudo npm install typescript@2.4 --save-dev

sudo npm install @angular/common@latest @angular/compiler@latest @angular/compiler-cli@latest @angular/core@latest @angular/forms@latest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest @angular/animations@latest --save


/Users/Maksita/.ssh/id_rsa
dagtok


cat ~/.ssh/id_rsa.pub | ssh root@[your.ip.address.here] "cat >> ~/.ssh/authorized_keys"


ssh root@104.236.191.171
29325db199975e24c100b79012


wget https://nodejs.org/dist/v8.9.4/node-v8.9.4-linux-x64.tar.xz
wget https://nodejs.org/dist/v4.2.3/node-v4.2.3-linux-x64.tar.gz


curl -w "\n" http://104.236.191.171:8080/metadata/v1/interfaces/private/0/ipv4/address


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');

curl http://localhost:8080


server {
    listen 80;

    server_name 104.236.191.171;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}


sudo shutdown -h now
sudo poweroff


CREAR UNA LLAVE SSH DESDE EL SERVIDOR

curl http://localhost:8000

cp -a /sigit/componentes/dist. /var/www/html/

cp -R dist /var/www/html/


sudo mongoexport --db sigit -c restaurants --out newdbexport.json


mongodump -d sigit -o dany


mongorestore -d sigit sigit


pm2 start app.js --name sigit_backend