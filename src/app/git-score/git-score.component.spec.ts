import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitScoreComponent } from './git-score.component';

describe('GitScoreComponent', () => {
  let component: GitScoreComponent;
  let fixture: ComponentFixture<GitScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
