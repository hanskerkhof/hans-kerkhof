import { ScrollSpyDirective } from './scroll-spy.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollSpyService } from './scroll-spy.service';

@Component({
  template: ` <div
    scrollSpy
    [spiedTags]="['section']"
    (sectionChange)="onSectionChange($event)"
  >
    <section id="one"></section>
    <section id="two"></section>
    <section id="three"></section>
  </div>`,
})
class TestComponent {
  constructor(public scrollSpyService: ScrollSpyService) {}

  onSectionChange(e) {}
}

describe('ScrollSpyDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ScrollSpyDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    component.scrollSpyService.scrollSpy$.subscribe((id) => {
      console.log(id);
    });
    expect(component).toBeDefined();
  });

  it('should be able to subscribe', () => {
    component.scrollSpyService.scrollSpy$.subscribe((id) => {});
  });
});
