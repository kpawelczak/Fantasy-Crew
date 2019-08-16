import { POSITION } from './fantasy-crew-rank';
import { FantasyCrewCharacter } from '../store/models/fantasy-crew-character.model';

export const FantasyCrewRoster: FantasyCrewCharacter[] = [
	{
		name: 'Q the Ordinary',
		rank: 'Civilian',
		position: POSITION.Morale,
		species: 'Q',
		score: 1
	}, {
		name: 'Jean-Luc Picard',
		rank: 'Captain',
		position: POSITION.Command,
		species: 'Human',
		score: 9.5
	}, {
		name: 'Christopher Pike',
		rank: 'Admiral',
		position: POSITION.Command,
		species: 'Human',
		score: 7.5
	}, {
		name: 'William Riker',
		rank: 'Commander',
		position: POSITION.First,
		species: 'Human',
		score: 8.5
	}, {
		name: 'Sarek',
		rank: 'Ambassador',
		position: POSITION.Morale,
		species: 'Vulcan',
		score: 9
	}, {
		name: 'Saru',
		rank: 'Commander',
		position: POSITION.First,
		species: 'Kelpien',
		score: 6
	}, {
		name: 'Benjamin Sisko',
		rank: 'Captain',
		position: POSITION.Command,
		species: 'Human',
		score: 8
	}, {
		name: 'Spock',
		rank: 'Ambassador',
		position: POSITION.Science,
		species: 'Vulcan / Human',
		score: 9.5
	}, {
		name: 'T\'\Pol',
		rank: 'Commander',
		position: POSITION.Science,
		species: 'Vulcan',
		score: 6
	}, {
		name: 'Chakotay',
		rank: 'Commander',
		position: POSITION.First,
		species: 'Human',
		score: 7
	}, {
		name: 'Pavel Chekov',
		rank: 'Lieutenant',
		position: POSITION.Helmsman,
		species: 'Human',
		score: 7
	}, {
		name: 'Tuvok',
		rank: 'Lt. Commander',
		position: POSITION.Security,
		species: 'Vulcan',
		score: 8
	}, {
		name: 'Odo',
		rank: 'Constable',
		position: POSITION.Security,
		species: 'Changeling',
		score: 9
	}, {
		name: 'The Doctor',
		rank: 'none',
		position: POSITION.Medical,
		species: 'Hologram',
		score: 8
	}, {
		name: 'Leonard McCoy',
		rank: 'Lt. Commander',
		position: POSITION.Medical,
		species: 'Human',
		score: 7
	}, {
		name: 'Katherine Pulaski',
		rank: 'Commander',
		position: POSITION.Medical,
		species: 'Human',
		score: 6
	}, {
		name: 'Geordi La Forge',
		rank: 'Lt. Commander',
		position: POSITION.Engineering,
		species: 'Human',
		score: 8
	}, {
		name: 'B\'Elanna Torres',
		rank: 'Lieutenant',
		position: POSITION.Engineering,
		species: 'Klingon/Human',
		score: 7
	}, {
		name: 'Montgomery Scott',
		rank: 'Lt. Commander',
		position: POSITION.Engineering,
		species: 'Human',
		score: 7
	}, {
		name: 'Miles O\'Brien',
		rank: 'Chief Petty Officer',
		position: POSITION.Helmsman,
		species: 'Human',
		score: 7
	}, {
		name: 'Data',
		rank: 'Lt. Commander',
		position: `${POSITION.Science}, ${POSITION.First}, ${POSITION.Engineering}, ${POSITION.Helmsman}`,
		species: 'Android',
		score: 9.5
	}, {
		name: 'Jadzia Dax',
		rank: 'Lt. Commander',
		position: POSITION.Science,
		species: 'Trill',
		score: 8
	}, {
		name: 'Hikaru Sulu',
		rank: 'Lieutenant',
		position: POSITION.Helmsman,
		species: 'Human',
		score: 6
	}, {
		name: 'Wesley Crusher',
		rank: 'Ensign',
		position: POSITION.Helmsman,
		species: 'Human',
		score: 7
	}, {
		name: 'Kes',
		rank: 'Civilian',
		position: POSITION.Medical,
		species: 'Ocampa',
		score: 4
	}, {
		name: 'Travis Mayweather',
		rank: 'Lieutenant',
		position: POSITION.Helmsman,
		species: 'Human',
		score: 5
	}, {
		name: 'Hoshi Sato',
		rank: 'Lt. Commander',
		position: POSITION.Science,
		species: 'Human',
		score: 3
	}, {
		name: 'Tom Paris',
		rank: 'Lieutenant',
		position: POSITION.Helmsman,
		species: 'Human',
		score: 2
	}, {
		name: 'Malcolm Reed',
		rank: 'Lieutenant',
		position: POSITION.Security,
		species: 'Human',
		score: 4
	}, {
		name: 'Deanna Troi',
		rank: 'Commander',
		position: POSITION.Morale,
		species: 'Human/Betazoid',
		score: 7
	}, {
		name: 'Jonathan Archer',
		rank: 'Captain',
		position: POSITION.Command,
		species: 'Human',
		score: 5
	}, {
		name: 'Phlox',
		rank: 'Civilian',
		position: POSITION.Medical,
		species: 'Denobulan',
		score: 4
	}, {
		name: 'Quark ',
		rank: 'Civilian',
		position: POSITION.Morale,
		species: 'Ferengi',
		score: 7.5
	}, {
		name: 'Tasha Yar',
		rank: 'Lieutenant',
		position: POSITION.Security,
		species: 'Human',
		score: 3
	}, {
		name: 'Seven of Nine',
		rank: 'Civilian',
		position: POSITION.Science,
		species: 'Borg drone',
		score: 8
	}, {
		name: 'Charles Tucker',
		rank: 'Commander',
		position: POSITION.Engineering,
		species: 'Human',
		score: 2
	}, {
		name: 'Julian Bashir',
		rank: 'Commander',
		position: POSITION.Medical,
		species: 'Human',
		score: 7
	}, {
		name: 'Beverly Crusher',
		rank: 'Commander',
		position: POSITION.Medical,
		species: 'Human',
		score: 7
	}, {
		name: 'Kathryn Janeway',
		rank: 'Captain',
		position: POSITION.Command,
		species: 'Human',
		score: 7
	}, {
		name: 'Kira Nerys',
		rank: 'Major',
		position: POSITION.First,
		species: 'Bajoran',
		score: 8.5
	}, {
		name: 'Worf ',
		rank: 'Lieutenant',
		position: POSITION.Security,
		species: 'Klingon',
		score: 8
	}, {
		name: 'James T. Kirk',
		rank: 'Captain',
		position: POSITION.Command,
		species: 'Human',
		score: 9
	}, {
		name: 'Elim Garak',
		rank: 'Civilian',
		position: POSITION.Morale,
		species: 'Cardassian',
		score: 7
	}, {
		name: 'Guinan',
		rank: 'Civilian',
		position: POSITION.Morale,
		species: 'El-Aurian',
		score: 7.3
	}, {
		name: 'Alexander Rozhenko',
		rank: 'Civilian',
		position: POSITION.Security,
		species: 'Klingon',
		score: 4
	}, {
		name: 'Ro Laren',
		rank: 'Lieutenant',
		position: POSITION.Helmsman,
		species: 'Bajoran',
		score: 4
	}, {
		name: 'Neelix',
		rank: 'Civilian',
		position: POSITION.Morale,
		species: 'Talaxian',
		score: 9
	}, {
		name: 'Dukat',
		rank: 'Gul',
		position: POSITION.Command,
		species: 'Cardassian',
		score: 8
	}, {
		name: 'Damar',
		rank: 'Legate',
		position: POSITION.Command,
		species: 'Cardassian',
		score: 7
	}, {
		name: 'Sela',
		rank: 'Commander',
		position: POSITION.First,
		species: 'Romulan/Human',
		score: 5
	}, {
		name: 'Nero',
		rank: 'Captain',
		position: POSITION.Command,
		species: 'Romulan',
		score: 3
	}, {
		name: 'Alidar Jarok',
		rank: 'Admiral',
		position: POSITION.Command,
		species: 'Romulan',
		score: 9
	}, {
		name: 'Ba\'el',
		rank: 'Civilian',
		position: POSITION.Morale,
		species: 'Klingon/Romulan',
		score: 4
	}, {
		name: 'Lwaxana Troi',
		rank: 'Ambassador',
		position: POSITION.Morale,
		species: 'Betazoid',
		score: 7
	}, {
		name: 'Michael Burnham',
		rank: 'Commander',
		position: POSITION.Science,
		species: 'Human',
		score: 7
	}, {
		name: 'Katrina Cornwell',
		rank: 'Vice Admiral',
		position: POSITION.Command,
		species: 'Human',
		score: 4
	}, {
		name: 'Emperor Kahless',
		rank: 'Emperor of the Klingon Empire',
		position: POSITION.Command,
		species: 'Klingon clone',
		score: 8
	}, {
		name: 'Mora Pol',
		rank: 'none',
		position: POSITION.Science,
		species: 'Bajoran',
		score: 3
	}, {
		name: 'Borg Queen',
		rank: 'Queen',
		position: POSITION.Command,
		species: 'Borg',
		score: 8
	}, {
		name: 'B\'Etor',
		rank: 'Commander',
		position: POSITION.First,
		species: 'Klingon',
		score: 6
	}, {
		name: 'Tomalak',
		rank: 'Commander',
		position: POSITION.Command,
		species: 'Romulan',
		score: 6
	}, {
		name: 'Odan',
		rank: 'Ambassador',
		position: POSITION.Morale,
		species: 'Trill',
		score: 4
	}, {
		name: 'Emperor Georgiou',
		rank: 'Emperor',
		position: POSITION.First,
		species: 'Human',
		score: 7
	}, {
		name: 'Martok',
		rank: 'General',
		position: POSITION.First,
		species: 'Klingon',
		score: 5
	}, {
		name: 'Gowron',
		rank: 'Chancellor',
		position: POSITION.Command,
		species: 'Klingon',
		score: 7
	}, {
		name: 'Keyla Detmer',
		rank: 'Lieutenant',
		position: POSITION.Helmsman,
		species: 'Human',
		score: 4
	}, {
		name: 'Ash Tyler',
		rank: 'Lieutenant',
		position: POSITION.Security,
		species: 'Klingon / Human',
		score: 7
	}, {
		name: 'Gabriel Lorca',
		rank: 'Captain',
		position: POSITION.Command,
		species: 'Human',
		score: 3
	}];
