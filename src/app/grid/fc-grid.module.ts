import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from '@generic-ui/ngx-grid';
import { FcGridComponent } from './fc-grid.component';
import { MatButtonModule, MatSelectModule } from '@angular/material';


@NgModule({
	imports: [
		CommonModule,
		GridModule,
		MatSelectModule,
		MatButtonModule
	],
	declarations: [
		FcGridComponent
	],
	exports: [
		FcGridComponent
	]
})
export class FcGridModule {
}
