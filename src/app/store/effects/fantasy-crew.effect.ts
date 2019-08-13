import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import * as crewActions from '../actions/fantasy-crew.actions';
import { concatMap, tap, withLatestFrom } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as reducer from '../reducers/fantasy-crew.reducer';


@Injectable()
export class FantasyCrewEffects {

	constructor(private actions: Actions,
				private store: Store<reducer.State>) {
	}

	AddCharacter = createEffect(
		() =>
			this.actions.pipe(
				ofType(crewActions.ADD_CHARACTER),
				concatMap(action => of(action).pipe(
					withLatestFrom(this.store.pipe(select(reducer.initialState)))
				)),
				tap(([action, crew]) => {
					if (crew.length === 1) {
						window.alert('x');
					} else {
						window.alert('y' + crew.length);
					}
				})
			),
		{ dispatch: false }
	);
}
