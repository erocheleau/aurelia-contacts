import {RouterConfiguration, Router} from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { WebAPI } from './web-api';

@inject(WebAPI)
export class App {

  router: Router;

  constructor(public api: WebAPI) {}

  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = 'Contacts';

    config.map([
      { route: '',              moduleId: 'routes/no-selection/no-selection',   title: 'Select' },
      { route: 'contacts/:id',  moduleId: 'routes/contact-detail/contact-detail', name: 'contacts' }
    ]);

    this.router = router;
  }
}