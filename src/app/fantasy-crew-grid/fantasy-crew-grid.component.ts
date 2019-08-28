import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { GuiColumn, GuiRowColoring, GuiTheme } from '@generic-ui/ngx-grid';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FantasyCrewCharacter } from '../store/models/fantasy-crew-character.model';
import { POSITION } from '../data/fantasy-crew-rank';

import * as reducer from '../store/reducers/fantasy-crew.reducer';
import * as crewActions from '../store/actions/fantasy-crew.actions';

@Component({
	selector: 'fantasy-crew-grid',
	templateUrl: './fantasy-crew-grid.component.html',
	styleUrls: ['./fantasy-crew-grid.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FantasyCrewGridComponent implements OnInit {

	@Input()
	selectedCharacter;

	fantasyCrew: Observable<FantasyCrewCharacter[]>;

	positions: Array<string> = [...Object.values(POSITION)];

	selectedPosition: string;

	selectedFantasyCharacter;

	columns: Array<GuiColumn> = [
		{
			header: 'Position',
			field: 'id'
		}, {
			header: 'Name',
			field: 'name'
		}, {
			header: 'Rank',
			field: 'rank'
		}, {
			header: 'Species',
			field: 'species'
		}];

	source: Array<any> = [];

	rowColoring: GuiRowColoring = GuiRowColoring.NONE;

	theme: GuiTheme = GuiTheme.MATERIAL;

	constructor(private store: Store<reducer.State>) {
		this.fantasyCrew = this.store.select(reducer.selectAll);
	}

	ngOnInit() {
		this.fantasyCrew
			.subscribe((characters: any) => {
				this.source = characters;
			});
	}

	onPositionSelection(position: any): void {
		this.selectedPosition = position.value;
	}

	addCharacter(position: string, character: FantasyCrewCharacter): void {

		if (position && character) {

			this.validateCharacter(character);

			this.store.dispatch(new crewActions
				.AddCharacter(position.toString(), {
					name: character.name,
					rank: character.rank,
					species: character.species,
					score: character.score
				}));

		}
	}

	removeCharacter(character: any): void {
		if (this.selectedFantasyCharacter) {
			this.store.dispatch(new crewActions
				.RemoveCharacter(character.id, {}));
			this.selectedFantasyCharacter = '';
		}
	}

	private validateCharacter(character: FantasyCrewCharacter): void {
		for (let i = 0; i < this.source.length; i++) {

			if (this.source[i].name !== '') {
				if (this.source[i].name === character.name) {
					this.source[i].name = '';
					this.source[i].rank = '';
					this.source[i].species = '';
					this.source[i].score = null;
				}
			}
		}
	}

	private onItemSelected(character: Array<FantasyCrewCharacter>): void {
		this.selectedFantasyCharacter = character[0];
	}

	private isCharacterSelected(): boolean {
		if (this.selectedCharacter) {
			return this.selectedCharacter.name;
		}
	}

	private isButtonDisabled(): boolean {
		return !this.selectedFantasyCharacter || this.selectedFantasyCharacter.name === '';
	}
}
