import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    img {
      border-radius: 100px;
      width: 30px;
    }
    .loading {
      line-height: 31px;
    }
    .active {
      font-weight: bold;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
