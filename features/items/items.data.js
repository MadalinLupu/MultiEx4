/**
 * Feature Items - Données
 * 
 * Page 6 du cours : Feature items - Données
 * 
 * Ce fichier contient les données et la logique de récupération des items.
 * 
 * Pourquoi séparer les données ?
 * - Aujourd'hui : données mockées (statiques)
 * - Demain : fetch depuis une API
 * - Les écrans changent peu, seule cette partie évolue
 * 
 * Principe : localiser la logique métier dans les features
 */

/**
 * Liste des items (mock)
 * En production, ces données viendraient d'une API
 */
export const ITEMS = [
  { id: "1", title: "Acheter du lait" },
  { id: "2", title: "Réviser RN" },
  { id: "3", title: "Faire le mini-lab" },
];

/**
 * Trouve un item par son id
 * 
 * @param {string} id - L'identifiant de l'item à rechercher
 * @returns {Object|undefined} L'item trouvé ou undefined
 */
export const findById = (id) => ITEMS.find(x => x.id === id);
