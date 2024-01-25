import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwnImageComponent } from './twn-image.component';

describe('TwnImageComponent', () => {
  let component: TwnImageComponent;
  let fixture: ComponentFixture<TwnImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwnImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwnImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
