import template from './banque.component.html'

class controller {
  constructor (BanqueService, $location) {
    this.BanqueService = BanqueService
    this.$location = $location
    this.collaborateurs = []
    this.selectMatricule = ''
    this.banque = ''
    this.bic = ''
    this.iban = ''
  }
  $onInit () {
    this.BanqueService.getCollaborateurs()
    .then(collaborateurs => this.collaborateurs = collaborateurs)
  }
  onSelect (matricule) {
    this.selectMatricule = matricule

    let collab = this.collaborateurs.filter(c => c.matricule === matricule)[0]
    if (collab) {
      this.banque = collab.banque
      this.bic = collab.bic
      this.iban = collab.iban
    }
  }
}

export let BanqueComponent = {
  template,
  controller,
  bindings: {
    collaborateurs: '<',
    onSelect: '&'
  }
}
