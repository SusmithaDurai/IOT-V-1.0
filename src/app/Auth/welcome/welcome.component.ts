import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'src/app/providers/cognito.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { userInfo } from 'src/app/providers/userInfo';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  userinfo: userInfo;

  constructor(private route: Router,
    private router: ActivatedRoute,
    private cogservice: CognitoService,
    private http: HttpClientModule,
    private cookie: CookieService,
    private routerurl: Router) {

    const user = this.cookie.get('UserName');
    if (user) {
      this.userinfo = { username: user };
      this.route.navigateByUrl('/home');
    }

  }

  ngOnInit() {
    this.router.fragment.subscribe((params) => {
      console.log('cechking URL params');
      if (params) {
        const fragments = params.split('&');
        const paramsMap = {};
        fragments.forEach((fragment) => {
          const keyValue = fragment.split('=');
          paramsMap[keyValue[0]] = keyValue[1];

        });
        let id_token = paramsMap["id_token"];
        this.cogservice.setData(paramsMap);
      }
    });

    //console.log(this.cogservice.paramTokens);
    if (this.cogservice.paramTokens) {
      this.cogservice.getUserInfo().subscribe(
        data => {

          this.userinfo = data;
          console.log(this.userinfo.username);
          this.cookie.set('UserName', this.userinfo.username);
          this.cookie.set('Email', this.userinfo.email);
          this.routerurl.navigate(['/home']);
        },
        err => {
          //console.log(err);
        }
      );
    }

  }



  login() {
    console.log("clicked");
    const URL = "https://iotapp.auth.ap-south-1.amazoncognito.com/login?response_type=token&client_id=26p5uscia4d1pq3ahulnp146mu&redirect_uri=http://localhost:8100";
    window.location.assign(URL);
  }

}
