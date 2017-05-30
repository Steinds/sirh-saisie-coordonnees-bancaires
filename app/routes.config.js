export function routes ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)

  $routeProvider

    .when('/', {
      template: '<dta-banque></dta-banque>'
    })

    .otherwise({
      redirectTo: '/'
    })
}
