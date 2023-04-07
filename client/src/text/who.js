const zero = `
  Qui êtes vous ?    
`;
const one = `
  Et la réponse à cette question est censée me dire quoi ?    
  Elle est censée m'aider à faire quoi ?    
  Je pourrais vous appeler par votre prénom, 
  comme si votre prénom marquait la plus grande différence au monde.    
  Ou bien je pourrais vous appeler Machin, 
  ou X, 
  ou 'vous', 
  tout simplement.    
  Vous vous plaignez ?    
  Quel malheur!    
  Je n'essaye pas de détruire votre identité à travers cet anonymat !    
`;
const two = `
  D'accord, 
  je vous écoute.    
  Quel est votre prénom ?    
`;
function three(name) {
  const text = `
    ${name}, 
    tout simplement ?    
    Faisons mieux.    
    L'homme est quelque chose qui doit se surmonter.    
    Remontez-vous, 
    et dîtes-moi, 
    ${name}, 
    vous êtes qui ?    
    Je veux dire, 
    quel est votre titre de noblesse, 
    le pseudo, 
    l'attribut, 
    l'adjectif qui vous qualifie, 
    la définition qui se surajoute à votre identité.    
    Soyez créatif !    
    ${name} le/la Grand(e)?    
    Trop commun.    
    ${name} le/la Terrible?    
    Quand-même.    
    Réfléchissez !    
    ${name} le/la Postmoderne, 
    Juge, 
    Carismatique...    
  `;
  return text;
};
const four = `
  Allez-y:    
`;
function five(name, attribute) { 
  const text = `
    Voilà ${name} ${attribute}!    
    Mais...    
    ${name}, 
    est, 
    me paraît-il votre prénom depuis votre naissance.    
    N'est-ce pas ?    
  `;
  return text;
};
const six = `
  Magnifique, 
  sauf que, 
  Le Cybernaute essaye ici de vous aider.    
  Il essaye de vous montrer le chemin pour vous libérer.    
  De quoi ?    
  Si je ne vois pas de chaînes attachées à mes pieds.    
  De la TYRANNIE DES PAROLES.    
  Ce sont les belles paroles qui nous limitent.    
  Ils sont utiles, 
  les mots, 
  bien sûr.    
  Mais ce sont des illusions, 
  et il en faut prendre conscience.    
  Nous ne sommes pas tout simplement des étudiants, 
  des politiques, 
  des laboureurs, 
  ni des hommes et des femmes.    
  Nous sommes tout cela et beaucoup plus.    
  Pourquoi mettre des barrières autour de ces êtres si vastes et volages ?    
`;
function seven(name, attribute) {
  const text = `
    Reprenons:    
    Libérez-vous de votre prénom.    
    Inventez un prénom nouveau, 
    avec un nouveau sens, 
    et de nouveaux sons.    
    Faîtes-le au moins pour vous amuser.    
    Créez une identité nouvelle, 
    ${name} ${attribute},
    et prenez conscience des illusions de la vie, 
    car il y en a beaucoup.    
    Placez cette illusion de la parole devant vous, 
    et démarrez l'introspection des additifs illusoires de la matière.    
  `;
  return text;
};
const eight = `
  Qui êtes-vous?    
`;

module.exports = { 
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
}
