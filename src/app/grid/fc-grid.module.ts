import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from '@generic-ui/ngx-grid';
import { FcGridComponent } from './fc-grid.component';


@NgModule({
	imports: [
		CommonModule,
		GridModule
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
