import { Compiler, Component, ComponentFactory, Injector, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-conditional-module',
  templateUrl: './conditional-module.component.html',
  styleUrls: ['./conditional-module.component.scss']
})
export class ConditionalModuleComponent implements OnInit {

  @ViewChild('anchor', { read: ViewContainerRef })
  anchor!: ViewContainerRef;
  loaded = false;

  constructor(
    private compiler: Compiler,
    private injector: Injector
  ) { }

  ngOnInit() { }

  async load() {
     // Dynamic import, activate code splitting and on demand loading of feature module
     import('../without-route/without-route.module').then(({ WithoutRouteModule }) => {
      // Compile the module
      this.compiler.compileModuleAsync(WithoutRouteModule).then(moduleFactory => {
        // Create a moduleRef, resolve an entry component, create the component
        this.loaded = true;
        const moduleRef = moduleFactory.create(this.injector);
        const componentFactory = moduleRef.instance.resolveComponent();
        const { instance } = this.anchor.createComponent(componentFactory);
        // Do whatever you want to do with this instance
      });
    });
  }
}
