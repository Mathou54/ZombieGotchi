import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ZombieStates} from "../../../model/zombie-states";

@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

	@Input() states: ZombieStates;

	@Output() event: EventEmitter<ZombieStates> = new EventEmitter();

	constructor() {
	}

	ngOnInit() {
	}

	public giveMedicine(): void {
		this.states.isSick = false;
		this.event.emit(this.states);
	}

	public giveFood(): void {
		this.states.isHungry = false;
		this.event.emit(this.states);
	}

}
