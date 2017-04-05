import {ZombieStates} from "./zombie-states";

export class Zombie {
	name: string;
	states: ZombieStates;

	constructor(name: string) {
		this.name = name;
		this.states = new ZombieStates();
	}
}
