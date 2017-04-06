export class ZombieStates {
	isSick: boolean;
	isHungry: boolean;

	constructor(state: boolean = false) {
		this.isSick = state;
		this.isHungry = state;
	}
}
