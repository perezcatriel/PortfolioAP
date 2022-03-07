import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePictureAndBackgroundComponent } from './profile-picture-and-background.component';

describe('ProfilePictureAndBackgroundComponent', () => {
  let component: ProfilePictureAndBackgroundComponent;
  let fixture: ComponentFixture<ProfilePictureAndBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePictureAndBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePictureAndBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
