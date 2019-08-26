import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuLayoutService } from 'src/app/core/service/menu.service';
import { TokenStorage } from 'src/app/core/service/token.storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showLogin : boolean = false;
  constructor(private route : Router,
    private menuService : MenuLayoutService,
    private tokenStorage : TokenStorage) {
      this.menuService.showLogin.subscribe(result => {
        this.showLogin = result;
      })
     }

  ngOnInit() {
  }

  navigate(){
    this.route.navigate(['/home'])
  }
  navigatetoaddblog(){
    this.route.navigate(['/addBlog'])
  }
  logout(){
    this.navigate();
    this.tokenStorage.clear();
    this.menuService.getShowMenuStatus();
  }
}
