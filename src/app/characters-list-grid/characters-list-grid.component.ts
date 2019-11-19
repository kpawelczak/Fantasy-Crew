import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GuiColumn, GuiDataType, GuiRowColoring, GuiTheme } from '@generic-ui/ngx-grid';
import { FantasyCrewRoster } from '../data/database';
import { FantasyCrewCharacter } from '../store/models/fantasy-crew-character.model';

@Component({
	selector: 'characters-list-grid',
	templateUrl: './characters-list-grid.component.html',
	styleUrls: ['./characters-list-grid.component.scss'],

	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersListGridComponent implements OnInit {

	@Output()
	onCharacterSelection = new EventEmitter();

	columns: Array<GuiColumn> = [{
		header: 'Name',
		field: 'name',
		type: GuiDataType.STRING
	}, {
		header: 'Rank',
		field: 'rank',
		type: GuiDataType.STRING
	}, {
		header: 'Position',
		field: 'position',
		type: GuiDataType.STRING
	}, {
		header: 'Species',
		field: 'species',
		type: GuiDataType.STRING
	}];

	source: Array<any> = [];

	rowColoring: GuiRowColoring = GuiRowColoring.NONE;

	theme: GuiTheme = GuiTheme.MATERIAL;

	ngOnInit() {
		this.source = FantasyCrewRoster;
	}

	onItemSelected(character: Array<FantasyCrewCharacter>) {
		if (!character[0]) {
			return;
		}
		this.onCharacterSelection.emit(character[0]);
	}

}
