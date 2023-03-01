import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HEADER_MENU } from './data/header.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  headerMenu = HEADER_MENU
  menuProfile = {
    name: "Agung Priyatno",
    avatar: "/assets/images/resources/user.png",
    collapse: true
  }
  sideBar?: boolean
  Messages?: boolean
  Notifications?: boolean
  currentUrl? : string

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sideBar = false
    this.Notifications = false
    this.currentUrl = this.router.url
  }

  dropDown(index: number): void{
    this.headerMenu[index].collapse = !this.headerMenu[index].collapse
  }

  dropDownProfile(): void{
    this.menuProfile.collapse = !this.menuProfile.collapse
  }

  sidebarToggle(): void{
    this.sideBar = !this.sideBar
  }

  messageToggle(): void {
    this.Messages = !this.Messages
  }

  notifToggle(): void {
    this.Notifications = !this.Notifications
  }

  navigateTo(path: string): void{
    this.router.navigateByUrl(path).then((res) => {
      if(res){
        this.currentUrl = this.router.url
      }
    })
    console.log("triggered");
  }

}
