import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  list:any[]=[];
  addtask(item:any){
    this.list.push({id:Math.random(),name:item})
    console.log(this.list)
  }
  Removeitem(id:any)
  {
    this.list = this.list.filter(item=>item.id!==id)
  }

}
