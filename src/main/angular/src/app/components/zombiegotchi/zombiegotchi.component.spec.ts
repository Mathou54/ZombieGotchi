import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ZombiegotchiComponent} from "./zombiegotchi.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ZombiegotchiComponent', () => {
	let component: ZombiegotchiComponent;
	let fixture: ComponentFixture<ZombiegotchiComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
