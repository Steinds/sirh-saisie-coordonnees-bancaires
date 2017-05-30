export class BanqueController {
  constructor (BanqueService, $routeParams, $location) {
    this.BanqueService = BanqueService
    this.$location = $location

    this.BanqueService.getCollaborateurs($routeParams.id)
        .then(collaborateurs => this.collaborateurs = collaborateurs)
  }
}
