import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Servers Table', cols: 2, rows: 1 },
          { title: 'Main Server', cols: 2, rows: 1 },
          { title: 'Replica 1', cols: 1, rows: 1 },
          { title: 'Replica 2', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Servers Detailed Table', cols: 2, rows: 1 },
        { title: 'Main Server', cols: 1, rows: 2 },
        { title: 'Replica 1', cols: 1, rows: 1 },
        { title: 'Replica 2', cols: 1, rows: 1 },
      ];
    })
  );
}
