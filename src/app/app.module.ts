import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './app-config.service';

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

const AppConfigServiceProvider = {
  provide: APP_INITIALIZER,
  useFactory: appInitializerFn,
  multi: true,
  deps: [AppConfigService]
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AppConfigService,
    AppConfigServiceProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
