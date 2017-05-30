import angular from 'angular'
import RouteModule from 'angular-route'

import 'bootstrap/dist/css/bootstrap.css'

import { routes } from './routes.config'
import { BanqueComponent } from './banque/banque.component'
import { BanqueService } from './banque.service'

angular.module('app', [
  RouteModule
])
.component('dtaBanque', BanqueComponent)

.service('BanqueService', BanqueService)

.config(routes)
