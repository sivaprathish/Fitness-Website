import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { BmiComponent } from './fitcal/bmi/bmi.component';
import { BmrComponent } from './fitcal/bmr/bmr.component';
import { CalorieComponent } from './fitcal/calorie/calorie.component';
import { FitcalComponent } from './fitcal/fitcal.component';
import { HealthComponent } from './health/health.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MessegerComponent } from './messeger/messeger.component';
import { TodoComponent } from './todo/todo.component';
import { WorkoutComponent } from './workout/workout.component';
import { YogaComponent } from './yoga/yoga.component';

const routes: Routes = [
  {path:"mainpage",component:MainpageComponent},
  {path:"fitcal",component:FitcalComponent,
  children:[
    {path:"bmi",component:BmiComponent},
    {path:"bmr",component:BmrComponent},
    {path:"calorie",component:CalorieComponent}
  ]},
  {path:"messeger",component:MessegerComponent},
  {path:"workout",component:WorkoutComponent},
  {path:"todo",component:TodoComponent},
  {path:"yoga",component:YogaComponent},
  {path:"health",component:HealthComponent},
  {path:"about",component:AboutComponent},
  {path:"chatbot",component:ChatbotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
