import {Component} from '@angular/core';

/**
 * @title Basic checkboxes
 */

@Component({
  selector: 'checkbox-overview-example',
  templateUrl: 'checkbox-overview-example.html',
  styleUrls: ['checkbox-overview-example.css'],
})

export class CheckboxOverviewExample {

  data = {
    approved: false,
    checked: false,
  };

  data3 = {
    checked: false,
  };

  approval() {
    this.data.approved = false;
  }

  isIndeterminate() {
    return this.data.checked && !this.data.approved;
  }
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */