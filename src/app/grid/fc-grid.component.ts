import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GuiColumn } from '@generic-ui/ngx-grid';
import { FantasyCrewRoster } from '../data/database';
import { FantasyCrewCharacter } from '../store/models/fantasy-crew-character.model';

@Component({
	selector: 'fc-grid',
	templateUrl: './fc-grid.component.html',
	styleUrls: ['./fc-grid.component.scss'],

	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FcGridComponent implements OnInit {

	@Output()
	onCharacterSelection = new EventEmitter();

	columns: Array<GuiColumn> = [{
		header: 'Name',
		field: 'name'
	}, {
		header: 'Rank',
		field: 'rank'
	}, {
		header: 'Position',
		field: 'position'
	}, {
		header: 'Species',
		field: 'species'
	}
		// , {
		// 	header: 'Score',
		// 	field: 'score',
		// 	width: 50
		// }
	];

	source: Array<any> = [];

	ngOnInit() {
		this.source = FantasyCrewRoster;
	}

	onItemSelected(character: Array<FantasyCrewCharacter>) {
		this.onCharacterSelection.emit(character[0]);
	}

}
