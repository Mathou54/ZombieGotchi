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
		this.startHunger();
	}

	private startTimeout(func: () => void): any {
		return setTimeout(func, this.getRandomTime());
	}

	private getRandomTime(): number {
		return Math.round(Math.random() * 60000);
	}

	private startSick(): void {
		if (this.timers['sick']) {
			clearTimeout(this.timers['sick']);
		}
		this.timers['sick'] = this.startTimeout(() => {
			this.zombie.states.isSick = true;
			this.ZombieChanged();
		});
	}

	private startHunger(): void {
		if (this.timers['hunger']) {
			clearTimeout(this.timers['hunger']);
		}
		this.timers['hunger'] = this.startTimeout(() => {
			this.zombie.states.isHungry = true;
			this.ZombieChanged();
		});
	}

	public updateZombieStates(states: ZombieStates): void {
		this.zombie.states = states;
		this.startLife();
	}

	private ZombieChanged() {
		this.zombie.states.happy--;
	}
}
