
// How to start 1 + 2 = 3
const howToStart = (param1, param2) => {
  console.log("Vous pouvez récupéré les paramètres ainsi");
  console.log("Voir les surcharger pour tester d'autres cas");

  param1 = 1;
  param2 = 2;

  console.log("Vous verrez les console.log dans la fenêtre react-native metro au lancement de npm run android");
  console.log("N'oubliez pas de retourner le résultat");
  return (param1 + param2);
}

//-------------------------- Object operation -------------------------------//
/*
    utilisez l'opérateur ... pour renvoyer une copie de l'objet passé en paramètre
*/
const objectCopy = undefined
/*
    utilisez l'opérateur ... pour fusionner 2 objets passé en paramètre
*/
const objectFusion = undefined

/*
    utilisez l'opérateur ... pour créer un nouvel objet et lui ajouter (ou modifer) une sous valeure value
*/
const objectFusionAddOrUpdate = undefined

/* 
  utilisez l'opérateur de destructuration sur le paramètre 1 pour extraire la valeure value
  param1.value n'est pas autorisé
*/
const objectExtract = undefined

//-------------------------- Array Operation -------------------------------//

/*
  Utilisez l'opérateur de copie sur le paramètre 1 pour renvoyer une copie de l'objet
*/
const arrayCopy = undefined

/*
  Utilisez l'opérateur de copie pour fusionner les 2 tableaux passé en paramètre
*/
const arrayFusion = undefined

/*
  Utilisez l'exraction pour extraire le 2e element du tableau
  param1[1] interdit
*/
const arrayExtract = undefined


//-------------------------- Arrow Functions -------------------------------//

/*
  créez une fonction flêchée qui renvoi "success" si le paramètre 1 est true
                                        "failed" si le paramètre 2 est false
  return explicite,
*/
const arrowFunctionExplicit = undefined

/*
  créez une fonction flêchée qui renvoi "success" si le paramètre 1 est true
                                        "failed" si le paramètre 2 est false
  return implicite, pas de if autorisé
*/
const arrowFunctionUnplicit = undefined

//-------------------------- Asynchrone -------------------------------//
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const sleepReject = (ms) => new Promise((resolve, reject) => setTimeout(reject, ms));

/*
  créez une fonction flêchée asynchrone
  x2
    - un avec .then
    - un avec await
  renvoi "success" après 3 secondes (utilisez sleep)
*/
const AsyncSuccess = undefined;

/*
  créez une fonction flêchée asyncrhone
  renvoi "failed" si sleepReject echoue

  x2
    - un avec try catch
    - un avec .catch()
*/
const AsyncReject = undefined;

export {
  howToStart,
  objectCopy,
  objectFusion,
  objectFusionAddOrUpdate,
  objectExtract,
  arrayCopy,
  arrayFusion,
  arrayExtract,
  arrowFunctionExplicit,
  arrowFunctionUnplicit,
  AsyncSuccess,
  AsyncReject
};