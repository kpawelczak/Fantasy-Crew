import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { GuiColumn, GuiRowColoring, GuiTheme } from '@generic-ui/ngx-grid';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FantasyCrewCharacter } from '../store/models/fantasy-crew-character.model';
import { POSITION } from '../data/fantasy-crew-rank';
import { SelectedService } from './selected';

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
		}
		// , {
		// 	header: 'Score',
		// 	field: 'score'
		// }
	];

	source: Array<any> = [];

	rowColoring: GuiRowColoring = GuiRowColoring.NONE;

	theme: GuiTheme = GuiTheme.MATERIAL;

	constructor(private store: Store<reducer.State>,
				private selectedService: SelectedService) {
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

			this.selectedService.getSelected(character);

			this.store.dispatch(new crewActions
				.AddCharacter(position.toString(), {
					name: character.name,
					rank: character.rank,
					species: character.species,
					score: character.score
				}));

		}
	}

}
