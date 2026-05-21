import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer';

describe('FooterComponent', () => {

  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct bank name', () => {
    expect(component.bankName).toBe('Zorent Bank');
  });

  it('should have customer care number', () => {
    expect(component.customerCare).toBe('1800-202-9090');
  });

  it('should have emergency support number', () => {
    expect(component.emergencySupport).toBe('1800-999-1111');
  });

  it('should have support email', () => {
    expect(component.email).toBe('support@zorentbank.com');
  });

  it('should render footer title', () => {

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.footer-title')?.textContent)
      .toContain('Zorent Bank');

  });

  it('should render customer care text', () => {

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent)
      .toContain('1800-202-9090');

  });

  it('should render emergency support text', () => {

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent)
      .toContain('1800-999-1111');

  });

  it('should render support email', () => {

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent)
      .toContain('support@zorentbank.com');

  });

  it('should render copyright text', () => {

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent)
      .toContain('© 2026 Zorent Bank. All Rights Reserved.');

  });

});
