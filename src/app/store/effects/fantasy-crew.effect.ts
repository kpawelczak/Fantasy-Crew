import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, tap, withLatestFrom } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';

import { SelectedService } from '../../fantasy-crew-grid/selected';

import * as crewActions from '../actions/fantasy-crew.actions';
import * as reducer from '../reducers/fantasy-crew.reducer';


@Injectable()
export class FantasyCrewEffects {

	constructor(private actions: Actions,
				private store: Store<reducer.State>,
				private selected: SelectedService) {
	}

	RemoveCharacter$ = createEffect(
		() =>
			this.actions.pipe(
				ofType(crewActions.ADD_CHARACTER),
				concatMap(action => of(action).pipe(
					withLatestFrom(this.store.pipe(select(reducer.selectAll)))
				)),
				tap(([action, crew]) => {

					this.selected.observeSelected().subscribe(selected => {

						for (let i = 0; i < crew.length; i++) {

							if (crew[i].name !== '') {
								if (crew[i].name === selected.name) {

									crew[i].name = '';
									crew[i].rank = '';
									crew[i].species = '';
									crew[i].score = null;
								}
							}
						}
					});
				})
			),
		{ dispatch: false }
	);

}
