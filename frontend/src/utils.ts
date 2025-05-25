

export const narrativeSubtypesDictionary = {
  "Animal Tales": "AnimalTales",
  "Didactic Tales": "DidacticTales",
  "Fables": "Fables",
  "Jocular Tales": "JocularTales",
  "Marchen or Tales of Magic": "MarchenOrTalesOfMagic",
  "Miscellaneous Tales": "MiscellaneousTales",
  "Novelistic Tales": "NovelisticTales",
  "How Places and Things Got Their Names": "HowPlacesAndThingsGotTheirNames",
  "Origin of Animals":"OriginOfAnimals",
  "Origin of Plants":"OriginOfPlants",
  "Heroic Legends":"HeroicLegends",
  "Legends on Supernatural Beings":"LegendsOnSupernaturalBeings",
  "Miscellaneous Legends":"MiscellaneousLegends",
  "Religious Legends":"ReligiousLegends",
  "Creation Myths": "CreationMyths",
  "Death Myths":"DeathMyths",
  "Miscellaneous Myths":"MiscellaneousMyths",
  "Mythological Stories":"MythologicalStories",
  "Mythology and Deities": "MythologyAndDeities",
  "Myths on Human Nature": "MythsOnHumanNature",
  "Myths on Natural Phenomena":"MythsOnNaturalPhenomena",
  "Myths on Pestilence":"MythsOnPestilence",
  "Myths on Supernatural Creatures":"MythsOnSupernaturalCreatures"
}


export const researchersDictionary = {

  "Alicia P Magos": "AliciaPMagos",
  "Bel Sobrevega": "BelSobrevega",
  "Eliodora L Dimzon":"EliodoraLDimzon",
  "F. Landa Jocano": "F.LandaJocano",
  "Maximo Ramos": "MaximoRamos",
  "Randy Madrid":"RandyMadrid"
}

export function cleanUris(uriArray: string[][]): string[] {
  const cleanedUris: string[] = [];
  uriArray.forEach((uri) => {
    const uriString = uri[0];
    const splitUri = uriString.split("#");
    if (splitUri.length > 1) {
      cleanedUris.push(splitUri[1]);
    } else {
      cleanedUris.push("");
    }
  });

  return cleanedUris;
}
export function addSpacesBeforeCapitals(text: string): string {
    return text.replace(/([A-Z])/g, ' $1').trim();
}

export function removeSpaces(text: string): string {

  return text.replace(/\s+/g, '');

}

  // const cleanedUris: string[] = [];
  // uris.forEach((uri,) => {
  //   const splitUri = uri.split("#");
  //   if (splitUri.length > 1) {
  //     cleanedUris.push(splitUri[1]);
  //   } else {
  //     cleanedUris.push("");
  //   }
  // });
  //
  // return cleanedUris;
  //

  // const splitUri = uri.split("#");
  // if (splitUri.length > 1) {
  //   return splitUri[1];
  // }else {
  //   return "";
  // }