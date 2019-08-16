import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SelectedService implements OnDestroy {

	selected$: Subject<string> = new Subject();

	ngOnDestroy() {
		this.selected$.next();
		this.selected$.complete();
	}

	observeSelected(): Observable<string> {
		return this.selected$.asObservable();
	}

	getSelected(character: string) {
		this.selected$.next(character);
	}
}
