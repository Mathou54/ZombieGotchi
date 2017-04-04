import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {ZombiegotchiComponent} from "./components/zombiegotchi/zombiegotchi.component";
import {ZombieComponent} from "./components/zombiegotchi/zombie/zombie.component";
import {ControlsComponent} from "./components/zombiegotchi/controls/controls.component";

@NgModule({
	declarations: [
		AppComponent,
		ZombiegotchiComponent,
		ZombieComponent,
		ControlsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
