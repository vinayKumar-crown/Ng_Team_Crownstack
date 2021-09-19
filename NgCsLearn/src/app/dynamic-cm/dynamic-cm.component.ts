import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DynamicHostDirective } from './directive/dynamic-host.directive';
import { DynamicAdService } from './service/dynamic-ad.service';
import { AdItem } from './types/data';

@Component({
  selector: 'app-dynamic-cm',
  templateUrl: './dynamic-cm.component.html',
  styleUrls: ['./dynamic-cm.component.scss']
})
export class DynamicCmComponent implements OnInit {

  currentAdIndex = -1;
  ads: AdItem[] = [];
  interval: any;

  @ViewChild(DynamicHostDirective, { static: true }) dynamicHost!: DynamicHostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private dynamicAdService: DynamicAdService
  ) { }

  ngOnInit() {
    this.ads = this.dynamicAdService.getAds();
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<{data: any}>(componentFactory);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
