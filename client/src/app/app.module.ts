import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { AppHttpInterceptor } from './interceptors/AppHttpInterceptor';
import { TodoListServiceService } from './service/todo-list-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { AppComponent } from './app.component';
import {MatListModule, MatExpansionModule, MatCheckboxModule, MatButtonModule, MatBottomSheetModule, MatInputModule, MatFormFieldModule, MatIconModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/interceptors/spinner/spinner.component';
import { TodoItemSaveComponent } from './components/todo-item-save/todo-item-save.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemsComponent,
    TodoItemSaveComponent,
    SpinnerComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
 
  ],
  providers: [
    TodoListServiceService,
    AppHttpInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    TodoItemSaveComponent
  ]
  
})
export class AppModule { }
