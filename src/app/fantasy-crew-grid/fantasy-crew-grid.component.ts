import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { GuiColumn, GuiDataType, GuiRowColoring, GuiTheme } from '@generic-ui/ngx-grid';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FantasyCrewCharacter } from '../store/models/fantasy-crew-character.model';
import { POSITION } from '../data/fantasy-crew-rank';

import * as reducer from '../store/reducers/fantasy-crew.reducer';
import * as crewActions from '../store/actions/fantasy-crew.actions';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { FantasyCrewRoster } from '../data/database';

@Component({
	selector: 'fantasy-crew-grid',
	templateUrl: './fantasy-crew-grid.component.html',
	styleUrls: ['./fantasy-crew-grid.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FantasyCrewGridComponent implements OnInit, OnChanges {

	@Input()
	selectedCharacter: FantasyCrewCharacter;

	fantasyCrew: Observable<FantasyCrewCharacter[]>;

	filteredCharacters: Observable<Array<string>>;

	positions: Array<string> = [...Object.values(POSITION)];

	selectedPosition: string;

	selectedFantasyCharacter;

	characterNameControl = new FormControl();

	characterNameList: Array<string> = [];

	columns: Array<GuiColumn> = [
		{
			header: 'Position',
			field: 'id',
			type: GuiDataType.STRING
		}, {
			header: 'Name',
			field: 'name',
			type: GuiDataType.STRING
		}, {
			header: 'Rank',
			field: 'rank',
			type: GuiDataType.STRING
		}, {
			header: 'Species',
			field: 'species',
			type: GuiDataType.STRING
		}, {
			header: 'Score',
			field: 'score',
			type: GuiDataType.NUMBER,
			view: (score: number) => {
				if (score) {
					const scorePercentage = score * 10,
						color = this.setScoreColor(score);
					return `<div class="score-progress-bar">
								<div class="score-progress" style="width: ${scorePercentage}%; background: ${color}"></div>
							</div>`;
				} else {
					return '';
				}
			},
			width: 100
		}];

	source: Array<any>;

	rowColoring: GuiRowColoring = GuiRowColoring.NONE;

	theme: GuiTheme = GuiTheme.MATERIAL;

	constructor(private store: Store<reducer.State>) {
		this.fantasyCrew = this.store.select(reducer.selectAll);
	}


	ngOnChanges(changes: SimpleChanges): void {
		if (changes.selectedCharacter) {
			if (this.selectedCharacter) {
				this.characterNameControl.reset();
				this.characterNameControl.setValue(this.selectedCharacter.name);
			}
		}
	}

	ngOnInit() {
		this.getCharacterNames();

		this.fantasyCrew
			.subscribe((characters: any) => {
				this.source = characters;
			});

		this.filteredCharacters = this.characterNameControl.valueChanges
									  .pipe(
										  startWith(''),
										  map(value => this.filterCharacterNames(value))
									  );
	}


	addCharacter(position: string, character: FantasyCrewCharacter): void {

		if (position && character) {
			this.validateCharacter(character);

			this.store.dispatch(new crewActions
				.AddCharacter(position.toString(), {
					name: character.name,
					rank: character.rank,
					species: character.species,
					score: this.calculateScore(character.score)
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


	onPositionSelection(position: any): void {
		this.selectedPosition = position.value;
	}

	characterSelected(characterName: string): void {
		this.selectedCharacter = FantasyCrewRoster.filter((character) => characterName === character.name)[0];
	}

	private filterCharacterNames(character: string): Array<string> {
		if (character === null) {
			return;
		}

		const filterCharacter = character.toLowerCase();

		return this.characterNameList.filter(character => character.toLowerCase().includes(filterCharacter));
	}

	private getCharacterNames(): void {

		for (let i = 0; i < FantasyCrewRoster.length; i++) {
			this.characterNameList.push(FantasyCrewRoster[i].name);
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

	private isCharacterSelected(): string {
		if (this.selectedCharacter) {
			return this.selectedCharacter.name;
		} else {
			return '';
		}
	}

	private isButtonDisabled(): boolean {
		return !this.selectedFantasyCharacter || this.selectedFantasyCharacter.name === '';
	}

	private calculateScore(score: number): number {
		if (this.selectedCharacter.name === 'Data' && this.selectedPosition === (POSITION.First || POSITION.Science || POSITION.Engineering)) {
			return 9.5;
		} else if (this.selectedCharacter.position !== this.selectedPosition) {
			score -= 2;

			if (score < 1) {
				return 1;
			} else {
				return score;
			}
		} else  {
			return score
		}
	}

	private setScoreColor(score: number): string {
		if (score >= 8) {
			return '#b9f7ab';
		} else if (score >= 4) {
			return '#eda413';
		} else if (score < 4) {
			return '#ff5d47';
		}
	}
}
