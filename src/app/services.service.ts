import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported

@Injectable()
export class ServicesService {

  result1 = [];

  constructor(private _http: Http) { } // <— Injected

   retrieveInfo(username,callback,errorback){
       this._http.get("https://api.github.com/users/"+username).subscribe(
         (response)=>{//console.log(response.json());
                       this.result1 = response.json();
                       callback(this.result1);
        },
         (error)=>{//console.log(error);
                  errorback(error);
                  
        }
       );

   }

}
