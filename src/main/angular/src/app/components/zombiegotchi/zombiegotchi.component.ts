import {Component, OnInit} from "@angular/core";

@Component({
	selector: 'app-zombiegotchi',
	templateUrl: './zombiegotchi.component.html',
	styleUrls: ['./zombiegotchi.component.css']
})
export class ZombiegotchiComponent implements OnInit {

	isZombieSick: boolean;

	constructor() {
	}

	ngOnInit() {
		this.isZombieSick = false;

		this.startLife();
	}

	private startLife(): void {
		this.startSick();
	}

	private startTimeout(func: () => void): void {
		setTimeout(func, 1000);
	}

	private startSick(): void {
		this.startTimeout(() => {
			this.isZombieSick = true;
		});
	}

	public giveMedicine(event): void {
		this.isZombieSick = false;
		this.startSick();
	}
}
