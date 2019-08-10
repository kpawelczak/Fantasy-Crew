import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FcGridModule } from './grid/fc-grid.module';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/fantasy-crew.reducer';
import { FantasyCrewGridModule } from './fantasy-crew-grid/fantasy-crew-grid.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
		AppComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
