import { Component, OnInit} from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Many Many Happy Returns of the day';
  ngOnInit(){
    $("#slideshow > div:gt(0)").hide();
    
    setInterval(function() { 
      $('#slideshow > div:first')
        .fadeOut(1500)
        .next()
        .fadeIn(1500)
        .end()
        .appendTo('#slideshow');
    },  3000);
    $('button').click(function(){
      alert('Hello');
    });
    




    

   
    
   
  }
}
