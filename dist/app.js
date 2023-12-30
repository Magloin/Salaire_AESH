"use strict";
console.log('hello');
// git add . 
// git commit -m "third commit"
// git push origin main
//Catalogue des établissements
// https://data.education.gouv.fr/explore/dataset/fr-en-etablissements-ep/table/?disjunctive.ep_2022_2023&disjunctive.type_etablissement&disjunctive.libelle_academie&disjunctive.libelle_departement&disjunctive.nom_commune&disjunctive.libelle_region&disjunctive.uai_tete_de_reseau&disjunctive.qp_a_proximite_o_n&refine.ep_2022_2023=REP%2B
//circulaire coefficient indemnite de residence
// https://sgen-cfdt.fr/contenu/uploads/sites/3/2016/12/circulaire_fp_12_03_2001_ind_residence.pdf
// Methode calcul SFT
// https://www.fonction-publique.gouv.fr/files/files/Publications/Publications%20DGAFP/2022/guide_SFT.pdf
// taux prime REP  et REP+ pour 2023
// texte reglementtaire :  https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000046711260
// texte reglementaire initiale : https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031113279
// texte reglementaire avec montant part fixe et part varialble : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000046711303
// Liste des etablissements classés REP : https://cache.media.education.gouv.fr/file/6/58/8/ensel0057_annexe_listeREP_388588.pdf
//pour mémoire : En REP 1106 euros bruts annuels pour un temps plein 
//pour mémoire : En REP+ 3263 euros bruts annuels pour un temps plein
// valeur des constantes
const pointDIndice = 4.9227;
const ValPrimFonct = 1529;
let montantPrimRep = 0;
let primeRep = 0;
let totalPercu = 0;
let indFonctCar = 0;
