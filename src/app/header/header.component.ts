import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toHome(){
    document.getElementById("Home")?.scrollIntoView({behavior:"smooth"});
  }
  toServices(){
    document.getElementById("services")?.scrollIntoView({behavior:"smooth"});
  }
  toOur(){
    document.getElementById("our-approach")?.scrollIntoView({behavior:"smooth"});
  }
  toAbout(){
    document.getElementById("About")?.scrollIntoView({behavior:"smooth"});
  }
  toContant(){
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }


}
