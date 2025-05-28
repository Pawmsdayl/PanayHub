import {StoryListEntryProps} from "@/components/StoryListEntry.tsx";
import {UriResponse} from "@/object-types.ts";
import {LatLng, latLng} from "leaflet";

export const locations: {[key:string]: LatLng} = {
  "Agdao, Tubungan, Iloilo": latLng(10.744483287359957, 122.32198964029378),
  "Aklan": latLng(11.70073283204382, 122.36726764759844),
  "Baladjay, San Remegio, Antique": latLng(10.845411676759655, 122.08227526507727),
  "Bancal, Carles, Iloilo": latLng(11.558511784604988, 123.15305819240079),
  "Batuan, Pototal, Iloilo": latLng(10.948382303657715, 122.64292161641656),
  "Bayan, Passi, Iloilo": latLng(11.150886375538876, 122.65125330444683),
  "Buenavista, Tubungan, Iloilo": latLng(10.776507014291603, 122.29907895119891),
  "Buga, Leon, Iloilo": latLng(10.80885427885064, 122.38954451035436),
  "Cabugao Sur,Pavia, Iloilo": latLng(10.788790458191334, 122.53846783384869),
  "Cadayawan, Cadiz Viejo, Cadiz City, Negros Occidental": latLng(11.000794788061313, 123.19806706260351),
  "Carit-an, Patnongon, Antique": latLng(10.95817438144191, 122.00926373318202),
  "Carol-an, Kabankalan City, Negros Occidental": latLng(9.899191910833995, 122.94448514144939),
  "Daan Norte, Tapaz, Capiz": latLng(11.26723060701895, 122.39234381390325),
  "Dalagsa-an, Libacao, Aklan": latLng(11.356691738457739, 122.2601428507284),
  "Don T. Lutero St., Janiuay, Iloilo": latLng(10.950961693479723, 122.4975542446499),
  "Duenas, Iloilo": latLng(11.064662628119347, 122.61813883815297),
  "Garangan, Calinog, Iloilo": latLng(11.17758099467049, 122.47561932851892),
  "Gua-an, Leganes, Iloilo": latLng(10.781496424689776, 122.61376171530691),
  "Guintubdan, Ara-al, La Carlota City, Negros Occidental":latLng(10.423676586042856, 123.08271528894218),
  "Hanawa, Matangkong, Sigma Capiz": latLng(11.436811697158515, 122.64966457030661),
  "Jovellar, Igbaras, Iloilo": latLng(10.707962499361617, 122.27947696040826),
  "Lalab, Batan, Aklan": latLng(11.575328215071098, 122.42906452171525),
  "Man-on, Altavas, Aklan": latLng(11.533329852393734, 122.49398990005956),
  "Nabulao, Sipalay City, Negros Occidental": latLng(9.669444270632074, 122.46099162676177),
  "Naclub, Miag-ao, Iloilo": latLng(10.667390067821673, 122.1794331216996),
  "Poblacion Norte, Tobias Fornier, Antique": latLng(10.516661336027726, 121.94445005897141),
  "Poblacion Sur, Sigma, Capiz": latLng(11.422272238245126, 122.66061135900094),
  "Poblacion, Bingawan, Iloilo": latLng(11.232822664106626, 122.56836345139787),
  "Poblacion, Malay, Aklan": latLng(11.900819670687719, 121.9098806379258),
  "Poblacion, Nueva Valencia, Guimaras": latLng(10.526242915796734, 122.53896825733301),
  "Punta Tulay, Valderama, Antique": latLng(11.00225629141278, 122.12784762565212),
  "Rizal St, Cabatuan, Iloilo": latLng(10.878673433914415, 122.48320478671765),
  "Sambaludan, Oton, Iloilo": latLng(10.705747399432362, 122.42985237826495),
  "San Pedro, Pilar, Capiz": latLng(11.497854045306719, 123.0660776341116),
  "Sebario, San Lorenzo, Guimaras": latLng(10.532227443796748, 122.68248575560466),
  "Sinamay, Alimodian, Iloilo": latLng(10.8049717943265, 122.44832204594759),
  "Tagsing, Sta. Barbara, Iloilo": latLng(10.788403068703492, 122.50772098125316),
  "Tayasan, Negros Occidental": latLng(9.943454685404381, 123.07196366757047),
  "Tulatula-an, DIngle, Iloilo": latLng(11.061708405719186, 122.69062988288982),
  "Tumkon, Ilaya, Pototan, Iloilo": latLng(10.931547851644194, 122.6278441193396)
};


export const narrativeSubtypesDictionary: {[key:string]:string} = {
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


export const researchersDictionary : {[key:string]: string} = {

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

export function createStoryListEntries(response: UriResponse):{
  provenances: string[];
  storyListEntries: StoryListEntryProps[]
}{
  const storyListEntries: StoryListEntryProps[] = [];
  const provenances: string[] = [];
  const stringArray: string[][] = response.data.values;
  stringArray.forEach((objectStringArray) => {
    const storyListEntry: StoryListEntryProps = {
      libraryLocation: "Center for West Visayan Studies",
      title: objectStringArray[0],
      storyteller: addSpacesBeforeCapitals(objectStringArray[2]),
      researcher: addSpacesBeforeCapitals(objectStringArray[3])
    };
    provenances.push(objectStringArray[1]);
    storyListEntries.push(storyListEntry);
  });


  return {
    storyListEntries,
    provenances
  };
}