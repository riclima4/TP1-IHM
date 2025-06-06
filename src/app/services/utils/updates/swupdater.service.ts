import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwupdaterService {
  constructor(public updates: SwUpdate) {
    if (updates.isEnabled) {
      interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate().then(() => console.log('checking for updates')));
    }
  }

  public checkForUpdates(): void {
    this.updates.versionUpdates.
      pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        map(evt => ({
          type: 'UPDATE_AVAILABLE',
          current: evt.currentVersion,
          available: evt.latestVersion,
        }))).subscribe(evt => {
          this.promptUser();
        });
  }

  private promptUser(): void {
    this.updates.activateUpdate().then(async (res) => {
      console.log("updating...")
      document.location.reload();
    });
  }
}
