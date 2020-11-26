import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mapTo, tap, delay } from 'rxjs/operators';

import { TestComponent } from './test.component';

@Injectable({ providedIn: 'root' })
export class TestNavigateGuard implements CanActivate {
  canActivate(): Observable<boolean> {
    return of(true).pipe(delay(0), mapTo(true), tap(console.log));
  }
}

const routes = [
  {
    path: '',
    component: TestComponent,
    canActivate: [TestNavigateGuard],
  },
];

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TestModule {}
