/**
 * Created by mikema on 10/5/17.
 */
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './aot/src/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
