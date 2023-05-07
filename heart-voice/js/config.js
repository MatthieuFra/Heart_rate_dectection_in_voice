/*

EXPERIMENT CONFIGURATION FILE: 

Here's the configuration file, to modify the parameters of the experiment.

*/

// email used to contact the research team if needed
const EMAIL = "example@mail.com";

// here to modify the instructions
const CONSIGNE1 = `
<div style="text-align: justify; text-justify: inter-word;">
<p>
Des recherches récentes ont montré que les gens sont capables de percevoir le rythme cardiaque de quelqu'un rien qu'en regardant son visage: par exemple, via le rythme de clignement des yeux, ou bien un subtil changement de couleur de la peau. 
Dans cette expérience, nous nous demandons si, de la même manière, il est possible de deviner le rythme cardiaque de quelqu'un en entendant le son de sa voix. 
</p>
<p>
Pour cela, vous allez entendre des extraits d'enregistrements de plusieurs personnes en train de prononcer le son <b>/a/</b>, et nous allons aussi vous présenter des enregistrements de différents rythmes cardiaques (<i>sous la forme d'un petit carré rouge qui clignote</i>) enregistrés pendant que les gens parlent. 
</p>
<p>
La difficulté est que parfois nous vous présenterons des voix et des rythmes cardiaques qui correspondent (<i>c'est à dire qui ont été enregistrés en même temps, par la même personne et au même moment</i>), et parfois qui ne correspondent pas (<i>par ex. la voix d'une personne avec le rythme cardiaque d'une autre personne, ou bien avec le rythme cardiaque de la personne qui parle mais mesuré plusieurs minutes plus tard</i>). A chaque fois, vous devrez nous dire si vous pensez que la voix et le rythme cardiaque qui vous sont présentés correspondent (= ont été enregistrés en même temps), ou non. 
</p>
</div>`;
const CONSIGNE2 = `
<div style="text-align: justify; text-justify: inter-word;">
<p>
En plus de détails, l'expérience comprend 3 parties, correspondant chacune à un type de questions différent.  
</p>
<p>
- dans une premiere partie, nous allons vous présenter 2 voix et 1 seul rythme cardiaque. Les deux voix auront été enregistrées par 2 personnes différentes (ex. un homme et une femme), et  le rythme cardiaque présenté correspondra à une seule des deux voix (ex. une voix d'homme, une voix de femmes, et le rythme cardiaque de la femme). Votre tâche sera de determiner à quelle voix correspond celui-ci (par ex. ici à la voix de la femme, et pas à celle de l'homme). 
</p>
<p>
- dans une seconde partie, nous allons vous présenter 2 voix enregistrée par la même personne (ex. la même femme) mais à des instants différents. A nouveau, le rythme cardiaque présenté correspondra à un seul des enregistrements, cad qu'il a été mesuré pendant le premier enregistrement ou bien le second enregistrement de la personne. Votre tâche sera de determiner à quelle enregistrement correspond celui-ci (par ex. au second enregistrement de voix de la femme, et pas au premier enregistrement).
</p>
<p>
- enfin, dans une troisième partie, nous allons vous présenter une seule voix, et 2 rythmes cardiaques différents. Comme précédemment, un seul des 2 rythmes cardiaques présenté correspondra à la voix entendue, et vous devrait déterminer lequel. 
</p></div>`;
const CONSIGNE3 = `
<div style="text-align: justify; text-justify: inter-word;">
<p>
Dans tous les cas, quelque soit la question posée, la procédure sera toujours la même: vous verrez à l'écran 2 vidéos, une à gauche et une à droite. Chacune des videos comprend à la fois un enregistrement de voix et un rythme cardiaque, sous la forme d'un carré rouge qui clignote en même temps que la voix. Dans l'une des videos, les 2 enregistrements (voix et rythme cardiaque) correspondent (cad qu'ils ont été enregistrés en même temps, par la même personne et au même moment), dans l'autre non (par ex. la voix d'une personne avec le rythme cardiaque d'une autre personne, ou bien avec le rythme cardiaque de la personne qui parle mais mesuré plusieurs minutes plus tard). 
</p>
<p>
Votre tâche, à chaque fois, est de sélectionner dans quelle video la voix et le rythme correspondent. Pour cela, vous pourrez appuyer sur des touches du clavier pour désigner la video de gauche ou la video de droite. 
L'expérience comprend 3 parties de 30 minutes environ, pour une durée total de 1h30. L'ordre des parties est aléatoire. Nous vous informerons de quel type de question vous est posé au début de chaque partie. A la fin de chaque partie, nous vous demanderons de faire une petite pause. 
</p>
</div>`;


const CONSIGNE_BLOC1 = `
<div style="text-align: justify; text-justify: inter-word;">
<p>
Dans cette partie, nous allons vous présenter des paires de video constituées de 2 voix et 1 seul rythme cardiaque. Les deux voix ont été enregistrées par 2 personnes différentes (ex. un homme et une femme) et, à chaque fois, le rythme cardiaque présenté correspond à une seule de ces deux voix (ex. le rythme cardiaque de la femme). Votre tâche est de déterminer à laquelle des deux voix correspond le rythme cardiaque. 
</p>
<p>
Pour cela, vous devrez sélectionner soit la vidéo de gauche (si vous pensez que c'est dans cette vidéo, et non la vidéo de droite, que la voix et le rythme cardiaque correspondent), soit la vidéo de droite (si vous pensez que c'est dans cette vidéo, et non la vidéo de gauche, que la voix et le rythme cardiaque correspondent). 
</p>
</div>`;

const CONSIGNE_BLOC2 = `
<div style="text-align: justify; text-justify: inter-word;">
<p>
Dans cette partie, nous allons vous présenter des paires de video constituées de 2 voix et 1 seul rythme cardiaque. Les deux voix ont été enregistrées par la même personne (ex. la même femme) mais à des instants différents. A chaque fois, le rythme cardiaque présenté correspond à un seul des enregistrements, cad qu'il a été mesuré soit pendant le premier enregistrement, soit bien le second enregistrement de la personne. Votre tâche est de déterminer à quelle enregistrement de voix correspond le rythme cardiaque (par ex. au second enregistrement de voix de la femme, et pas au premier enregistrement). 
</p>
<p>
Pour cela, vous devrez sélectionner soit la vidéo de gauche (si vous pensez que c'est dans cette vidéo, et non la vidéo de droite, que la voix et le rythme cardiaque correspondent), soit la vidéo de droite (si vous pensez que c'est dans cette vidéo, et non la vidéo de gauche, que la voix et le rythme cardiaque correspondent). 
</p>
</div>`;

const CONSIGNE_BLOC3 = `
<div style="text-align: justify; text-justify: inter-word;">
<p>
Dans cette partie, nous allons vous présenter des paires de video constituées de 1 seule voix et de 2 rythmes cardiaques différents. Un seul des 2 rythmes cardiaques présentés correspond à la voix entendue, cad que la voix a été enregistrée soit en même temps que le premier rythme, soit en même temps que le second rythme. Votre tâche sera de determiner auquel des 2 rythmes cardiaques correspond la voix présentée. 
</p>
<p>
Pour cela, vous devrez sélectionner soit la vidéo de gauche (si vous pensez que c'est dans cette vidéo, et non la vidéo de droite, que la voix et le rythme cardiaque correspondent), soit la vidéo de droite (si vous pensez que c'est dans cette vidéo, et non la vidéo de gauche, que la voix et le rythme cardiaque correspondent). 
</p>
</div>`;
