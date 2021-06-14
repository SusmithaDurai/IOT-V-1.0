import { AlertController } from '@ionic/angular';
import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';
import { LoggingErrorService } from './logging-error.service';

@Injectable({
  providedIn: 'root'
})
export class IotErrorHandlerService implements ErrorHandler{

  constructor(private injector:Injector,private alertController:AlertController) { }
  handleError(error: Error | HttpErrorResponse){

    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggingErrorService);

    let message;
    let stackTrace;

    if(error instanceof HttpErrorResponse) {
      //server error
      //console.log("Server Side Error");
      message=errorService.getServerMessage(error);
      stackTrace=errorService.getServerStack(error);
      console.log("Server Side Error",stackTrace,error.name);
    }else{
      
      message=errorService.getClientMessage(error);
      stackTrace=errorService.getClientStack(error);
      console.log("Client Side Error",error);
    }
    this.defaultErrorMessage(message);
    logger.logError(message,stackTrace);
    //throw new Error("Method not implemented.");
  }

  async defaultErrorMessage(message:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Something went <strong>WRONG</strong><br>Please try again later!!!',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
