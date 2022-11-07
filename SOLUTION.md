### Combien de temps as-tu passé sur ce test ?

J'ai passé environ 20 heures sur ce projet.

---

### Pour quelle raison as-tu choisi ce boilerplate ou ce framework ?

J'ai choisi Nextjs car c'est un framework réputé avec lequel j'ai déjà de l'expérience. TailwindCSS m'a permis de rapidement intégrer le site.

---

### Quel est ton niveau actuel dans le framework utilisé ? (aucune expérience, débutant, intermédiaire, expert)

J'ai une bonne expérience _intermédiaire_ avec Nextjs et une expérience de _débutant_ avec Storyblok.

---

### Quelles seraient tes pistes d'améliorations sur la partie technique si tu devais envoyer ce site en production ?

Je n'ai pas abordé plusieurs points tels que la gestion SEO ou l'optimisation des Assets. La modifiation du code et du contenu devrait aussi déclancher un CI qui redéploie le site.

---

### As-tu rencontré des problèmes que tu as laissé de côté pour finir dans les temps et quelles seraient tes pistes pour les résoudre ?

Réponse :

Il était difficile pour moi de choisir quelles fonctionnalités devait remplir le CMS. J'ai décidé de faire réagir les bloks et leurs enfants à un "theme" et à un "layout". Ainsi, après avoir renseigné une nouvelle section, l'utilisateur a la possibilité de changer son apparence sans la créer à nouveau et obtiendra un résultat satisfaisant peu importe la combinaison "theme/layout" choisie.

En partant du principe que le site serait fourni en amont avec une collection d'icônes en svg, j'ai décidé d'utiliser un enum pour sélectionner chaque icône par son nom. Cepedant certains icônes ont un style dépendants du thème (un icône sur une feature card avec un theme light a un dégradé).
