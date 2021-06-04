import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoEditorComponent } from './demo-editor.component';

describe('DemoEditorComponent', () => {
  let component: DemoEditorComponent;
  let fixture: ComponentFixture<DemoEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
