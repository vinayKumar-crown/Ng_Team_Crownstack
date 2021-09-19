import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, mergeMap } from 'rxjs/operators';
import { DynamicHostDirective } from './directive/dynamic-host.directive';
import { ProfileService } from './service/profile.service';

@Component({
  selector: 'app-dynamic-cm-user',
  templateUrl: './dynamic-cm-user.component.html',
  styleUrls: ['./dynamic-cm-user.component.scss']
})
export class DynamicCmUserComponent implements OnInit, OnDestroy {

  @ViewChild(DynamicHostDirective, { static: true }) profileHost!: DynamicHostDirective;
  private destroySubject = new Subject();

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    const viewContainerRef = this.profileHost.viewContainerRef;

    this.profileService.isLoggedIn$
      .pipe(
        takeUntil(this.destroySubject),
        mergeMap(isLoggedIn =>
          this.profileService.loadComponent(viewContainerRef, isLoggedIn)
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
