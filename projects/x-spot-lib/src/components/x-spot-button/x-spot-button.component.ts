import { Component, Input } from "@angular/core";

@Component({
  selector: "x-spot-button",
  templateUrl: "./x-spot-button.component.html",
  styleUrls: ["./x-spot-button.component.scss"],
})
export class XSpotButtonComponent {
  @Input()
  public size: "small" | "normal";

  @Input()
  public disabled: "small" | "normal";

  constructor() {}
}
