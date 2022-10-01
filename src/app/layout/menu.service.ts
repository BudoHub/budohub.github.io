import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, shareReplay, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../shared/loading.service';
import { MenuLink } from './menu-link-list/menu-link';

@Injectable()
export class MenuService {

  private subject = new BehaviorSubject<any[]>([
    { order: 0, description: 'Home', route: '' }]);

   // menu!: AngularFirestoreDocument<MenuLink>;
    links$: Observable<any[]> = this.subject.asObservable();

  constructor(
    private http: HttpClient,
    private loading: LoadingService) {
    this.loadAllLinks();
  }

  loadAllLinks() {
    const loadMenu$ = this.http.get<MenuLink[]>(`${environment.expressApiUrl}/api/v1/menu`)
      .pipe(
        map(response => response[<any>"payload"] as unknown as MenuLink[]),
        catchError(err => {
          const message = "Could not load courses";
          console.log(message, err);
          return throwError(() => err);
        }),
        tap(links => this.subject.next(links))
      );
    this.loading.showLoaderUntilCompleted(loadMenu$).subscribe();
  }

  // todo figure out if we want to make the menu configurable
  filterByOrganization(orgainzation_id: string): Observable<MenuLink[]> {
    return this.links$;
  }
}
