import {MatSlider} from "../Interfaces/MatSlider";

export class MatSliderG implements MatSlider
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
  value:        number  = 32;
  vertical:     boolean = false;
}
