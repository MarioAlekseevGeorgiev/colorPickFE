import {MatSlider} from "../Interfaces/MatSlider";

export class MatSliderR implements MatSlider
{
  autoTicks:    boolean = false;
  disabled:     boolean = false;
  invert:       boolean = false;
  max:          number  = 255;
  min:          number  = 0;
  showTicks:    boolean = false;
  step:         number  = 1;
  thumbLabel:   boolean = false
  tickInterval: number  = 1;
  value:        number  = 128;
  vertical:     boolean = false;
}
