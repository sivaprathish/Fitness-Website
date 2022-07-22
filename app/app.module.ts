import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FitcalComponent } from './fitcal/fitcal.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BmiComponent } from './fitcal/bmi/bmi.component';
import { BmrComponent } from './fitcal/bmr/bmr.component';
import { CalorieComponent } from './fitcal/calorie/calorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessegerComponent } from './messeger/messeger.component';
import { WorkoutComponent } from './workout/workout.component';
import { YogaComponent } from './yoga/yoga.component';
import { HealthComponent } from './health/health.component';
import { environment } from 'src/environments/environment';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    FitcalComponent,
    MainpageComponent,
    BmiComponent,
    BmrComponent,
    CalorieComponent,
    MessegerComponent,
    WorkoutComponent,
    YogaComponent,
    HealthComponent,
    TodoComponent,
    AboutComponent,
    ChatbotComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
