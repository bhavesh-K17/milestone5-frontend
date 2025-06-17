import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ provideHttpClient()],
      imports: [AppComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Milestone5-frontend' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Milestone5-frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Milestone5-frontend');
  });
});
