export class ZombieStates {
	isSick: boolean;
	isHungry: boolean;
	happy: number;

	constructor(state: boolean = false) {
		this.isSick = state;
		this.isHungry = state;
		this.happy = 0;
	}
}
