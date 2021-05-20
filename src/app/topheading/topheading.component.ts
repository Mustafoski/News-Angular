import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

// Default option

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css'],
})
export class TopheadingComponent implements OnInit {
  business = 'business';
  entertainment = 'entertainment';
  general = 'general';
  science = 'science';
  technology = 'technology';
  categories = [
    this.business,
    this.entertainment,
    this.general,
    this.science,
    this.technology,
  ];
  constructor(private _service: NewsapiserviceService) {}

  // Display data
  topHeadingDisplay: any = [];
  getArticles(value: any) {
    this._service
      .topHeading(`top-headlines?pageSize=100&country=us&category=${value}`)
      .subscribe((result) => {
        console.log(result);
        this.topHeadingDisplay = result.articles;
      });
  }

  selectChangeHandler(event) {
    event.preventDefault();
    let currentDropDown: any = this.topHeadingDisplay;
    console.log(currentDropDown);

    for (let i = 0; i < this.categories.length; i++) {
      if (currentDropDown === this.topHeadingDisplay) {
        this.getArticles(currentDropDown);
        break;
      } else {
        return;
      }
    }
  }

  // Landing page

  // Search Term
  onTerm(term: string) {
    this._service
      .searchHeading(`everything?pageSize=100&q=${term}`)
      .subscribe((result) => {
        console.log(result);
        this.topHeadingDisplay = result.articles;
      });
  }

  ngOnInit(): void {
    this._service
      .landingNews(`top-headlines?pageSize=100&country=us&category=business`)
      .subscribe((result) => {
        this.topHeadingDisplay = result.articles;
      });

    this.selectChangeHandler(this.topHeadingDisplay);
  }
}
