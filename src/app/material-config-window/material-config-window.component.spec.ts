import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialConfigWindowComponent } from './material-config-window.component';

describe('MaterialConfigWindowComponent', () => {
  let component: MaterialConfigWindowComponent;
  let fixture: ComponentFixture<MaterialConfigWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialConfigWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialConfigWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
