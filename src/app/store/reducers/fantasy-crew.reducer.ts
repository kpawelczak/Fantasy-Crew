import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { FantasyCrewData } from '../../data/fantasy-crew.data';
import { FantasyCrewCharacter } from '../models/fantasy-crew-character.model';

import * as crewActions from '../actions/fantasy-crew.actions';

export interface State extends EntityState<FantasyCrewCharacter> {
}

export const characterAdapter: EntityAdapter<FantasyCrewCharacter> = createEntityAdapter<FantasyCrewCharacter>();

export const initialState: State = characterAdapter.getInitialState(FantasyCrewData);

export const crew: any = FantasyCrewData;

export function reducer(
	state: State = initialState,
	action: crewActions.Actions) {

	return characterAdapter.updateOne({
		id: action.id,
		changes: action.changes
	}, state);

}

export const getCharacterState = createFeatureSelector<State>('character');

export const { selectAll } = characterAdapter.getSelectors(getCharacterState);
