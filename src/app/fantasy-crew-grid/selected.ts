import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FantasyCrewCharacter } from '../store/models/fantasy-crew-character.model';

@Injectable()
export class SelectedService implements OnDestroy {

	selected$: Subject<FantasyCrewCharacter> = new Subject();

	ngOnDestroy() {
		this.selected$.next();
		this.selected$.complete();
	}

	observeSelected(): Observable<FantasyCrewCharacter> {
		return this.selected$.asObservable();
	}

	getSelected(character: FantasyCrewCharacter) {
		this.selected$.next(character);
	}
}
