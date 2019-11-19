import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/fantasy-crew.reducer';

import { FantasyCrewGridModule } from './fantasy-crew-grid/fantasy-crew-grid.module';
import { CharactersListGridModule } from './characters-list-grid/characters-list-grid.module';


@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CharactersListGridModule,
		FantasyCrewGridModule,
		StoreModule.forRoot({
			character: reducer
		})
	],
	declarations: [
		AppComponent,
		AppHeader
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
