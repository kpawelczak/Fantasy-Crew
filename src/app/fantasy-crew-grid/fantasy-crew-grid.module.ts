import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@generic-ui/ngx-grid';
import { FantasyCrewGridComponent } from './fantasy-crew-grid.component';
import { MatButtonModule, MatSelectModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		GridModule,
		MatSelectModule,
		MatButtonModule
	],
	declarations: [
		FantasyCrewGridComponent
	],
	exports: [
		FantasyCrewGridComponent
	]
})
export class FantasyCrewGridModule {
}
