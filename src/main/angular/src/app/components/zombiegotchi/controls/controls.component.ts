import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

	@Output() giveMedicineEvent: EventEmitter<any> = new EventEmitter();

	constructor() {
	}

	ngOnInit() {
	}

	public giveMedicine(): void {
		this.giveMedicineEvent.emit(true);
	}

}
