ng new edcom.tr --routing=true --style=scss

ng add @angular/material
ng add @fortawesome/angular-fontawesome
npm i @angular/flex-layout @angular/cdk --save

ng g m layouts/default
ng g c layouts/default --module=layouts/default

ng g m pages/main --routing=true --routing=true
ng g c pages/main --module=pages/main

ng serve --aot

ng g m shared
ng g c shared/components/header --module=shared --export
ng g c shared/components/footer --module=shared --export
ng g c shared/components/sidebar --module=shared --export

ng g s services/components/layout