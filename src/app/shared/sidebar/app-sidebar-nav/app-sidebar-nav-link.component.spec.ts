import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarNavLinkComponent } from './app-sidebar-nav-link.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('AppSidebarNavLinkComponent', () => {
  let component: AppSidebarNavLinkComponent;
  let fixture: ComponentFixture<AppSidebarNavLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidebarNavLinkComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarNavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
