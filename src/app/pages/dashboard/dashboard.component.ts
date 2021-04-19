import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  bookList = [
    {
      name: 'The Stand',
      price: '12.39$',
      author: 'Stephen King',
      isAvailable: true,
      description:"Arguably the greatest horror novel ever written by the greatest horror novelist, this is a true Modern Classic that was first published in 1978, and then re-published in 1990, complete and unabridged, with 150,000 words cut from the first edition restored, and now accompanied by unusual and imaginative line art."
    },
    {
      name: 'The Shining',
      price: '32.69$',
      author: 'Stephen King',
      isAvailable: true,
      description:"This description may be from another edition of this product. Before Doctor Sleep, there was The Shining, a classic of modern American horror from the undisputed master, Stephen King. Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start."
    },
    {
      name: 'Black Boy: A Record of Childhood and Youth',
      price: '16.09$',
      author: 'Richard Wright',
      isAvailable: true,
      description:"This description may be from another edition of this product. A special 75th anniversary edition of Black Boy , Richard Wright's powerful and eloquent memoir of his journey from innocence to experience in the Jim Crow South."
    },
  ];
  constructor() {}

  ngOnInit() {}
}
