import { Routes } from "@angular/router";
import { TutStandaloneBasicComponent } from "src/app/tut-standalone-basic/tut-standalone-basic.component";
import { TutStandaloneBootstrapComponent } from "src/app/tut-standalone-bootstrap/tut-standalone-bootstrap.component";
import { TutStandaloneRoutingComponent } from "src/app/tut-standalone-routing/tut-standalone-routing.component";
import { TutStandaloneComponent } from "src/app/tut-standalone/tut-standalone.component";

export const TutRoutes: Routes = [
    {
      path: '',
      component: TutStandaloneComponent,
      children: [
        {
          path: 'basic',
          component: TutStandaloneBasicComponent
        },
        {
          path: 'bootstrap',
          component: TutStandaloneBootstrapComponent
        },
        {
          path: 'routing',
          component: TutStandaloneRoutingComponent
        },
        {
          path: '',
          redirectTo: 'basic'
        }
      ]
    }
  ];