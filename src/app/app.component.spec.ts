import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SlimLoadingBarModule, SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        RouterTestingModule,
        SlimLoadingBarModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));

  function setup() {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    return { fixture, app };
  }

  it('should create the app', () => {
    const { app } = setup();
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular 7 CRUD App'`, () => {
    const { app } = setup();
    expect(app.title).toEqual('Angular 7 CRUD App');
  });
});
