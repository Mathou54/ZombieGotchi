import {Component, Input, OnInit} from "@angular/core";

@Component({
	selector: 'app-zombie',
	templateUrl: './zombie.component.html',
	styleUrls: ['./zombie.component.css']
})
export class ZombieComponent implements OnInit {

	@Input() isSick: boolean;

	constructor() {
	}

	ngOnInit() {
	}

}
