import {Component, OnInit} from "@angular/core";
import {Zombie} from "../../model/zombie";
import {ZombieStates} from "../../model/zombie-states";

@Component({
	selector: 'app-zombiegotchi',
	templateUrl: './zombiegotchi.component.html',
	styleUrls: ['./zombiegotchi.component.css']
})
export class ZombiegotchiComponent implements OnInit {

	zombie: Zombie;

	private timers: any[] = [];

	constructor() {
	}

	ngOnInit() {
		this.zombie = new Zombie('Zombie');

		this.startLife();
	}

	private startLife(): void {
		this.startSick();
	}

	private startTimeout(func: () => void): any {
		return setTimeout(func, 1000);
	}

	private startSick(): void {
		if (this.timers['sick']) {
			clearTimeout(this.timers['sick']);
		}
		this.timers['sick'] = this.startTimeout(() => {
			this.zombie.states.isSick = true;
		});
	}

	public updateZombieStates(states: ZombieStates): void {
		this.zombie.states = states;
		this.startLife();
	}
}
