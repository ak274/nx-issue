import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('@test-org/test-lib').then((m) => m.TestLibModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('@test-org/another-test-lib').then((m) => m.AnotherTestLibModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [],
  declarations: [],
})
export class AppRoutingModule {}
