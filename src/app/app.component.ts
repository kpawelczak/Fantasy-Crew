import { Component } from '@angular/core';
import { FantasyCrewCharacter } from './store/models/fantasy-crew-character.model';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	selectedCharacter: FantasyCrewCharacter;

	isCharacterSelected(selected: FantasyCrewCharacter) {
		this.selectedCharacter = selected;
	}

}
