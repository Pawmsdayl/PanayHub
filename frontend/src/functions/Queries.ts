import {UserChoiceState} from "@/contexts/UserChoiceContext.ts";


function withNarrativeType(narrativeType: string): string {

  return `  
  MATCH (n)-[rdf__type]->(sc:owl__Class)-[rdfs__subClassOf]->(c:owl__Class)
  WHERE c.uri ENDS WITH '#${narrativeType}'
  RETURN n.ns0__title, n.ns0__provenance\n`;
}

function withStoryteller(researcher:string) : string {
  return `
  MATCH (n)-[ns0__hasKeyInformant]->(ki:Resource)
  WHERE ki.uri ENDS
  WITH '#${researcher}\n'
  `;
}

function withResearcher(storyteller:string): string {
  return `
  MATCH (n)-[ns0__hasResearcherOrRecorder]->(r:Resource)
  WHERE r.uri ENDS
  WITH '#${storyteller}\n'
  `;
}



export function createQuery(userChoices:UserChoiceState): string {
  const {
    narrativeType,
    narrativeSubtype,
    researcher,
    storyteller
  } = userChoices

  let query = storyteller? withStoryteller(storyteller): "";
  query += researcher? withResearcher(researcher): "";
  query += narrativeType? withNarrativeType(narrativeType): "";

  return query;
}
