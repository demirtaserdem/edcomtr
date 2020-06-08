ng new edcom.tr --routing=true --style=scss

ng add @angular/material
ng add @fortawesome/angular-fontawesome
npm i @angular/flex-layout @angular/cdk --save

ng g m layouts/default
ng g c layouts/default --module=layouts/default

ng g m pages/main --routing=true --routing=true
ng g c pages/main --module=pages/main

ng serve --aot
ng build --prod


ng g m shared
ng g c shared/components/header --module=shared --export
ng g c shared/components/footer --module=shared --export
ng g c shared/components/sidebar --module=shared --export

ng g s services/components/layout



Nginx ayarları:
```
/etc/nginx/sites-available$ sudo vim erdemdemirtas.com.tr
```

İçerisine

```
server {
       listen 80;
       listen [::]:80;

       server_name app3.demirtas.biz;

       root /{index.html folder address};
       index index.html;

       location / {
               try_files $uri $uri/ /index.html;
       }
    
      location /media/ {
     }
}
```

Sites enabled

```
sudo ln -s /etc/nginx/sites-available/erdemdemirtas.com.tr /etc/nginx/sites-enabled/erdemdemirtas.com.tr
```

Restart Nginx

``` 
sudo systemctl restart nginx
```

Certbot

```
sudo certbot --nginx -d erdemdemirtas.com.tr
```