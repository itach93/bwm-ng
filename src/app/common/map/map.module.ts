import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';


@NgModule({
   declarations: [
      MapComponent
   ],
   exports: [
    MapComponent
   ],
   imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDIobSSZCAYyaI7IwvkvI-8Hg4OY5ybY_0'
      })
   ],
   providers: [
       MapService
   ],
})
export class MapModule { }
