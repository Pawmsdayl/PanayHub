import {UserChoiceState} from "@/contexts/UserChoiceContext.ts";
import {narrativeSubtypesDictionary, removeSpaces, researchersDictionary} from "@/utils.ts";
const url = "https://85be2d53.databases.neo4j.io/db/neo4j/query/v2";
const credentials = `${import.meta.env.VITE_AURA_CREDENTIALS}`;


export async function storytellersOnly(): Promise<UriResponse> {
  const statement = `MATCH (ki:ns0__KeyInformant)
  RETURN ki.uri`;
  const cypherQuery = {
    "statement": statement
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify(cypherQuery),
    });
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const result = await response.json();
    console.log("Query Result:", result);
    return result;
  }catch (e){
    console.error("Error fetching storytellers:", e);
  }
}

export const queryNeo4j = async (userChoiceState: UserChoiceState) => {
  const statement = createQuery(userChoiceState);
  const cypherQuery = {
    // "statement": "MATCH (n:ns0__AnimalTales) RETURN n LIMIT 25;"
    "statement": statement
  };

  console.log(statement);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify(cypherQuery),
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const result = await response.json();
    console.log("Query Result:", result);
    // setData(result);
  } catch (err) {
    // setError(err.message);
  }
};


function withNarrativeType(narrativeType: string): string {
  if (narrativeType === "Legends"){
    return `
    MATCH (n)-[:rdf__type]->(m)-[:rdfs__subClassOf*]->(c:owl__Class)
    WHERE c.uri ENDS WITH '#Legends'
    RETURN n.ns0__title, n.ns0__provenance\n
    `;
  }
  return `  
  MATCH (n)-[rdf__type]->(sc:owl__Class)-[rdfs__subClassOf]->(c:owl__Class)
  WHERE c.uri ENDS WITH '#${narrativeType}'
  RETURN n.ns0__title, n.ns0__provenance\n`;
}

function withStoryteller(storyteller:string) : string {
  return `
  MATCH (n)-[ns0__hasKeyInformant]->(ki:Resource)
  WHERE ki.uri ENDS
  WITH '#${storyteller}'\n
  `;
}

function withResearcher(researcher:string): string {
  return `
  MATCH (n)-[ns0__hasResearcherOrRecorder]->(r:Resource)
  WHERE r.uri ENDS
  WITH '#${researcher}'\n
  `;
}

function withNarrativeSubtype(subtype:string): string {
  return `
  MATCH (n:ns0__${subtype}) 
  RETURN n.ns0__title, n.ns0__provenance\n
  `;
}

export function createQuery(userChoices:UserChoiceState): string {
  const {
    narrativeType,
    narrativeSubtype,
    researcher,
    storyteller
  } = userChoices
  console.log(userChoices);
  let query = storyteller? withStoryteller(removeSpaces(storyteller)): "";
  query += researcher? withResearcher(researchersDictionary[researcher]): "";
  if (narrativeSubtype) {
    query += withNarrativeSubtype(narrativeSubtypesDictionary[narrativeSubtype]);
    return query
  }
  query += narrativeType? withNarrativeType(narrativeType): "";
  return query;
}
