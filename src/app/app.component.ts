import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public limit = 10;
  public counter = 0;

  public boxes = [];

  @HostListener("window:scroll",)
  public onScroll() {
    const fullHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const screenHeight = document.documentElement.clientHeight;
    const rest = fullHeight - (screenHeight + scrollTop);

    if (rest < 80) {
      this.pushNamesToArray();
    }
  }

  ngOnInit() {
    this.pushNamesToArray();
  }

  pushNamesToArray() {
    console.log("skip: " + (this.counter * this.limit) + ", limit: " + this.limit);

    for (let i = 0; i < 10; i++) {
      this.boxes.push("Name " + i);
    }

    this.counter++;
  }

}
