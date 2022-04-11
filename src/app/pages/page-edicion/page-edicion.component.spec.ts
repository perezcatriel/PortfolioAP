import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEdicionComponent } from './page-edicion.component';

describe('PageEdicionComponent', () => {
  let component: PageEdicionComponent;
  let fixture: ComponentFixture<PageEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEdicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
