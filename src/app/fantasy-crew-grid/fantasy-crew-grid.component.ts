import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GuiColumn } from '@generic-ui/ngx-grid';
import { FantasyCrewCharacter } from '../store/models/fantasy-crew-character.model';
import * as reducer from '../store/reducers/fantasy-crew.reducer';
import * as CharacterActions from '../store/actions/fantasy-crew.actions';
import { POSITION } from '../data/fantasy-crew-rank';

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
		}, {
			header: 'Score',
			field: 'score'
		}];

	source: Array<any> = [];

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

			this.store.dispatch(new CharacterActions
				.AddCharacter(position.toString(), {
					name: character.name,
					rank: character.rank,
					species: character.species,
					score: character.score
				}));
		}
	}

}
