import {Component, Input, OnInit} from "@angular/core";
import {Zombie} from "../../../model/zombie";

@Component({
	selector: 'app-zombie',
	templateUrl: './zombie.component.html',
	styleUrls: ['./zombie.component.css']
})
export class ZombieComponent implements OnInit {

	@Input() zombie: Zombie;

	constructor() {
	}

	ngOnInit() {
	}

}
