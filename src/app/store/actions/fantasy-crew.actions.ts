import { Action } from '@ngrx/store';
import { FantasyCrewCharacter } from '../models/fantasy-crew-character.model';


export const ADD_CHARACTER = '[CHARACTER] ADD_CHARACTER';

export class AddCharacter implements Action {
	readonly type = ADD_CHARACTER;

	constructor(public id: string,
				public changes: Partial<FantasyCrewCharacter>) {
	}
}

export type Actions = AddCharacter
