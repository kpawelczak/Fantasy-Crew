import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GuiColumn, GuiDataType, GuiRowColoring, GuiTheme } from '@generic-ui/ngx-grid';
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
		this.onCharacterSelection.emit(character[0]);
	}

}
