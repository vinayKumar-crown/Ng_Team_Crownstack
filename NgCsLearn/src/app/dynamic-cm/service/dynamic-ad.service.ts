import { Injectable } from '@angular/core';
import { JobAdComponent } from '../components/job-ad/job-ad.component';
import { ProfileAdComponent } from '../components/profile-ad/profile-ad.component';
import { AdItem } from '../types/data';

@Injectable()
export class DynamicAdService {

  getAds() {
    return [
      new AdItem(
        ProfileAdComponent,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new AdItem(
        ProfileAdComponent,
        { name: 'Dr IQ', bio: 'Smart as they come' }
      ),
      new AdItem(
        JobAdComponent,
        { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new AdItem(
        JobAdComponent,
        { headline: 'Openings in all departments', body: 'Apply today' }
      )
    ];
  }
}
