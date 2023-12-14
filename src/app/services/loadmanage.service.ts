import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadmanageService {
  private loadingSource = new BehaviorSubject<boolean>(false);
  public loadingState$ = this.loadingSource.asObservable();

  openLoading() {
    this.loadingSource.next(true);
  }

  hideLoading() {
    this.loadingSource.next(false);
  }
}
