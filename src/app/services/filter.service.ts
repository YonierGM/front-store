import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  categorySelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
}
