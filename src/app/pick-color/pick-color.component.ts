import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSliderR} from "../beans/MatSliderR";
import {MatSliderB} from "../beans/MatSliderB";
import {MatSliderG} from "../beans/MatSliderG";
import {PickColorServiceService} from "../service/pick-color-service.service";
import {PickColorRGB} from "../Interfaces/PickColorRGB";
import {WebsocketService} from "../webSocketService/web-socket-service.service";

@Component({
  selector: 'app-pick-color',
  templateUrl: './pick-color.component.html',
  styleUrls: ['./pick-color.component.css'],
  providers: [WebsocketService]
})
export class PickColorComponent implements OnInit, OnDestroy {

  pickColor:     string | undefined = "#000019";
  pickColorText: string | undefined = "#ffffff"
  matSliderR = new MatSliderR();
  matSliderB = new MatSliderB();
  matSliderG = new MatSliderG();
  textArea   = "Enter text here";

  constructor(private pickColorServiceService: PickColorServiceService) {}

  // constructor(private WebsocketService: WebsocketService) {
  //   WebsocketService.messages.subscribe(msg => {
  //     this.received.push(msg);
  //     console.log("Response from websocket: " + msg);
  //   });
  // }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  setNumbersOnly(event: KeyboardEvent): boolean
  {
    const charCode =  (event.which) ? event.which : event.key;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  getColorSpaceRvalue(key: number) {
    if (key > 255) {key = 255;}
    this.matSliderR.value = key;
    this.createPickColorRGB();
  }

  getColorSpaceBvalue(key: number) {
    if (key > 255) {key = 255;}
    this.matSliderB.value = key;
    this.createPickColorRGB();
  }

  getColorSpaceGvalue(key: number) {
    if (key > 255) {key = 255;}
    this.matSliderG.value = key;
    this.createPickColorRGB();
  }

  getEnterTextHere(key: string) {
    this.textArea = key;
  }

  createPickColorRGB() {

    if (!this.matSliderR.value) this.matSliderR.value = 0;
    if (!this.matSliderB.value) this.matSliderB.value = 0;
    if (!this.matSliderG.value) this.matSliderG.value = 0;

    const pickColorRGB: PickColorRGB =
      {
        redComponent:   this.matSliderR.value,
        blueComponent:  this.matSliderB.value,
        greenComponent: this.matSliderG.value,
      }
      this.pickColorServiceService.createPickColorRGB$(pickColorRGB).subscribe(pickColorI => {
        this.pickColor     = pickColorI?.pickColor;
        this.pickColorText = pickColorI?.pickColorText;
      })
    //this.sendMsg(pickColorRGB: PickColorRGB)

  }

  onChange() {
    this.createPickColorRGB();
  }

  // sendMsg(pickColorRGB: PickColorRGB) {
  //
  //   let message = {
  //     redComponent: pickColorRGB.redComponent,
  //     blueComponent: pickColorRGB.blueComponent,
  //     greenComponent: pickColorRGB.greenComponent
  //   };
  //
  //   this.SocketService.messages.next(message);
  // }

}
