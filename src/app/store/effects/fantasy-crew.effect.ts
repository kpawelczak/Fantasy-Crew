import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as crewActions from '../actions/fantasy-crew.actions';
import { concatMap, map, withLatestFrom } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as reducer from '../reducers/fantasy-crew.reducer';
import { of } from 'rxjs';


@Injectable()
export class FantasyCrewEffects {

	constructor(private actions: Actions,
				private store: Store<reducer.State>) {
	}

	AddCharacter$ = createEffect(
		() =>
			this.actions.pipe(
				ofType(crewActions.ADD_CHARACTER),
				concatMap(action => of(action).pipe(
					withLatestFrom(this.store.pipe(select(reducer.selectAll)))
				)),

				map(([action, crew]) => {

					let x = action.changes.name;
					// let y = x
					console.log(x, crew[1].name);

				})
			),
		{ dispatch: false }
	);
}
