import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@generic-ui/ngx-grid';
import { FantasyCrewGridComponent } from './fantasy-crew-grid.component';
import { MatButtonModule, MatSelectModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
	imports: [
		CommonModule,
		GridModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		MatButtonModule,
		MatAutocompleteModule,
		FormsModule,
		ReactiveFormsModule
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
