import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from '@generic-ui/ngx-grid';
import { CharactersListGridComponent } from './characters-list-grid.component';


@NgModule({
	imports: [
		CommonModule,
		GridModule
	],
	declarations: [
		CharactersListGridComponent
	],
	exports: [
		CharactersListGridComponent
	]
})
export class CharactersListGridModule {
}
