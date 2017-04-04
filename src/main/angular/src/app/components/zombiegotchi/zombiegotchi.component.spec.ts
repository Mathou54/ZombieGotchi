import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ZombiegotchiComponent} from "./zombiegotchi.component";

describe('ZombiegotchiComponent', () => {
	let component: ZombiegotchiComponent;
	let fixture: ComponentFixture<ZombiegotchiComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ZombiegotchiComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ZombiegotchiComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
