
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatCheckbox, MatAccordion, MatList, MatExpansionPanel, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelHeader, MatRipple } from '@angular/material';
import { CdkPortalOutlet } from '@angular/cdk/portal';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MatCheckbox,
        MatAccordion,
        MatList,
        MatExpansionPanel,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelHeader,
        MatRipple,
        CdkPortalOutlet,
        
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'elbitTodo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('elbitTodo');
  });

  it('should render title in col-12', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.col-12').textContent).toContain('Elbit To-Do List');
  });
});
