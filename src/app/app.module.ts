import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/fantasy-crew.reducer';

import { FantasyCrewGridModule } from './fantasy-crew-grid/fantasy-crew-grid.module';
import { FcGridModule } from './grid/fc-grid.module';


@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FcGridModule,
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
