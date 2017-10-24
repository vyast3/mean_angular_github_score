import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service"; // <-- imported

@Component({
  selector: 'app-git-score',
  templateUrl: './git-score.component.html',
  styleUrls: ['./git-score.component.css']
})
export class GitScoreComponent implements OnInit {
  heading:String = "GitHub Score";

  username:String = "";

  result2:any = [];

  score:number;
  notExist:boolean = false;

  constructor(private _myServices: ServicesService) { 
    
    
  }

  onSubmit(){
     this.result2 = this._myServices.retrieveInfo(this.username,
      (xyz) => {this.result2 = xyz;
        this.username = '';
      },
      ()=> {this.notExist = true;
        this.username = '';
            
      } //error
      
    );
   
  }
 
  // calculate(){
  //     // this.score = this.result2.public_repos + this.result2.followers;
  //     console.log("score",this.result2.public_repos);
  // }

  ngOnInit() {
  }

}
