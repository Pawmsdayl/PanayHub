from typing import Any, Text, Dict, List
from neo4j import GraphDatabase
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet
from fuzzywuzzy import process
# from parrot import Parrot
import torch
import random

import Levenshtein


# parrot = Parrot(model_tag="prithivida/parrot_paraphraser_on_T5")


# def paraphrase(text: str) -> str:
#     para_phrases = parrot.augment(
#         input_phrase=text,
#         adequacy_threshold=0.00,
#         fluency_threshold=0.00
#     )

#     if para_phrases:
#         return random.choice([para[0] for para in para_phrases])
#     return text

class ActionGetStoryCharacters(Action):
    def name(self) -> Text:
        return "action_get_story_characters"

    def run(self, dispatcher: CollectingDispatcher, 
            tracker: Tracker, 
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        story_title = tracker.get_slot("story_title")
        if not story_title:
            dispatcher.utter_message("I couldn't find the story title. Can you specify the title again?")
            return []

        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        title_query = "MATCH (s) RETURN s.ns0__title AS title"
        with driver.session() as session:
            result = session.run(title_query)
            available_titles = [record["title"] for record in result if record["title"]]

        if not available_titles:
            dispatcher.utter_message("I couldn't find any available story titles.")
            return []

        title_match = min(available_titles, key=lambda t: Levenshtein.distance(story_title, t))

        print(title_match)  

        query = """
        MATCH (character)-[:ns0__isCharacterOf]->(story)
        WHERE story.ns0__title = $title
        RETURN DISTINCT replace(split(character.uri, "#")[1], "_", " ") AS character_name
        LIMIT 10
        """
        
        characters = []
        with driver.session() as session:
            result = session.run(query, title=title_match)
            characters = [record["character_name"] for record in result]
        
        driver.close()
        
        # if characters:
        #     dispatcher.utter_message(paraphrase(f"Some of the characters you'll include in the story'{title_match}' include: {', '.join(characters)}."))
        # else:
        #     dispatcher.utter_message(paraphrase(f"I couldn't find characters for '{title_match}'."))
        
        if characters:
            dispatcher.utter_message((f"Some of the characters you'll include in the story'{title_match}' include: {', '.join(characters)}."))
        else:
            dispatcher.utter_message((f"I couldn't find characters for '{title_match}'."))
        
        SlotSet("character", characters)
        
        return []

class InvActionGetStoryCharacters(Action):
    def name(self) -> Text:
        return "inv_action_get_story_characters"

    def run(self, dispatcher: CollectingDispatcher, 
            tracker: Tracker, 
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        character = tracker.get_slot("character")
        if not character:
            dispatcher.utter_message("I couldn't find the character name. Can you specify the name again?")
            return []

        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        character_query = "MATCH (character:ns0__Character) RETURN split(character.uri, \"#\")[1] AS character"
        with driver.session() as session:
            result = session.run(character_query)
            available_characters = [record["character"] for record in result if record["character"]]

        if not available_characters:
            dispatcher.utter_message("I couldn't find any matching character names.")
            return []

        character_match = min(available_characters, key=lambda t: Levenshtein.distance(character, t))

        print(character_match)  

        query = """
        MATCH (character:ns0__Character)-[:ns0__isCharacterOf]->(story)
        WHERE character.uri ENDS WITH $character
        RETURN DISTINCT story.ns0__title as title
        LIMIT 10
        """

        stories = []
        with driver.session() as session:
            result = session.run(query, character=character_match)
            stories = [record["title"] for record in result]

        driver.close()

        # if characters:
        #     dispatcher.utter_message(paraphrase(f"Some of the characters you'll include in the story'{title_match}' include: {', '.join(characters)}."))
        # else:
        #     dispatcher.utter_message(paraphrase(f"I couldn't find characters for '{title_match}'."))

        if stories:
            dispatcher.utter_message((f"Some of the stories that mention '{character_match}' include: {', '.join(stories)}."))
        else:
            dispatcher.utter_message((f"I couldn't find stories for '{character_match}'."))
        
        SlotSet("story_title", stories)
        
        return []

class ActionGetResearcher(Action):
    def name(self) -> Text:
        return "action_get_researcher"

    def run(self, dispatcher: CollectingDispatcher, 
            tracker: Tracker, 
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        story_title = tracker.get_slot("story_title")
        if not story_title:
            dispatcher.utter_message("I need the story's title before I can give you the name/s of its researcher/s. Can you specify the title again?")
            return []

        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        title_query = "MATCH (s) RETURN s.ns0__title AS title"
        with driver.session() as session:
            result = session.run(title_query)
            available_titles = [record["title"] for record in result if record["title"]]

        if not available_titles:
            dispatcher.utter_message("I couldn't find any available story titles.")
            return []

        title_match = min(available_titles, key=lambda t: Levenshtein.distance(story_title, t))

        print(title_match)  


        query = """
        MATCH (researcher)-[:ns0__conductedResearchOrRecorded]->(story)
        WHERE story.ns0__title = $title
        RETURN DISTINCT replace(split(researcher.uri, "#")[1], "_", " ") AS researcher_name
        LIMIT 10
        """

        researcher = []
        with driver.session() as session:
            result = session.run(query, title=title_match)
            researcher = [record["researcher_name"] for record in result]

        driver.close()

        # if researcher:
        #     dispatcher.utter_message(paraphrase(f"The people that are responsible for researching or recording '{title_match}' include: {', '.join(researcher)}."))
        # else:
        #     dispatcher.utter_message(paraphrase(f"I couldn't find any reseacher/recorder for '{title_match}'."))
        
        if researcher:
            dispatcher.utter_message((f"The people that are responsible for researching or recording '{title_match}' include: {', '.join(researcher)}."))
        else:
            dispatcher.utter_message((f"I couldn't find any reseacher/recorder for '{title_match}'."))
        
        
        SlotSet("researcher", researcher)

        return []

class InvActionGetResearcher(Action):
    def name(self) -> Text:
        return "inv_action_get_researcher"

    def run(self, dispatcher: CollectingDispatcher, 
            tracker: Tracker, 
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        researcher = tracker.get_slot("researcher")
        if not researcher:
            dispatcher.utter_message("I need the researcher's name before I can give you the title/s of stories they've researched. Can you specify the name again?")
            return []

        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        researcher_query = "MATCH (researcher:ns0__ResearcherOrRecorder) RETURN split(researcher.uri, \"#\")[1] AS researcher"
        with driver.session() as session:
            result = session.run(researcher_query)
            available_researchers = [record["researcher"] for record in result if record["researcher"]]

        if not available_researchers:
            dispatcher.utter_message("I couldn't find any available researchers.")
            return []

        researcher_match = min(available_researchers, key=lambda t: Levenshtein.distance(researcher, t))

        print(researcher_match)  

        query = """
        MATCH (researcher:ns0__ResearcherOrRecorder)-[:ns0__conductedResearchOrRecorded]->(story)
        WHERE researcher.uri ENDS WITH $researcher
        RETURN DISTINCT story.ns0__title as title
        LIMIT 10
        """

        stories = []
        with driver.session() as session:
            result = session.run(query, researcher=researcher_match)
            stories = [record["title"] for record in result]

        driver.close()

        # if researcher:
        #     dispatcher.utter_message(paraphrase(f"The people that are responsible for researching or recording '{title_match}' include: {', '.join(researcher)}."))
        # else:
        #     dispatcher.utter_message(paraphrase(f"I couldn't find any reseacher/recorder for '{title_match}'."))
        
        if stories:
            dispatcher.utter_message((f"The stories researched or recorded by '{researcher_match}' include: {', '.join(stories)}."))
        else:
            dispatcher.utter_message((f"I couldn't find any stories reseached/recorded by '{researcher_match}'."))
        
        SlotSet("story_title", stories)
        
        return []

class ActionGetStoryGenres(Action):
    def name(self) -> Text:
        return "action_get_story_genres"

    def run(self, dispatcher: CollectingDispatcher, 
            tracker: Tracker, 
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        story_title = tracker.get_slot("story_title")
        if not story_title:
            dispatcher.utter_message("I can't provide the genres of a story without its title. Can you provide the title again?")
            return []

        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        title_query = "MATCH (s) RETURN s.ns0__title AS title"
        with driver.session() as session:
            result = session.run(title_query)
            available_titles = [record["title"] for record in result if record["title"]]

        if not available_titles:
            dispatcher.utter_message("I couldn't find any available story titles.")
            return []

        title_match = min(available_titles, key=lambda t: Levenshtein.distance(story_title, t))

        print(title_match)  
        
        query = """
        MATCH (story)-[:rdf__type]->(genre)
        WHERE story.ns0__title = $title
        RETURN DISTINCT replace(split(genre.uri, "#")[1], "_", " ") AS genre_name
        LIMIT 10
        """

        genres = []
        with driver.session() as session:
            result = session.run(query, title=title_match)
            genres = [record["genre_name"] for record in result if record["genre_name"] != "NamedIndividual"]

        driver.close()

        # if genres:
        #     dispatcher.utter_message(paraphrase(f"'{title_match}' falls under the following genre(s): {', '.join(genres)}."))
        # else:
        #     dispatcher.utter_message(paraphrase(f"I couldn't find genres for '{title_match}'."))

        if genres:
            dispatcher.utter_message((f"'{title_match}' falls under the following genre(s): {', '.join(genres)}."))
        else:
            dispatcher.utter_message((f"I couldn't find genres for '{title_match}'."))

        SlotSet("genre", genres)
        

        return []

class InvActionGetStoryGenres(Action):
    def name(self) -> Text:
        return "inv_action_get_story_genres"

    def run(self, dispatcher: CollectingDispatcher, 
            tracker: Tracker, 
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        genre = tracker.get_slot("genre")
        if not genre:
            dispatcher.utter_message("I can't provide the stories of a without the genre. Can you provide the genre again?")
            return []

        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        genre_query = "MATCH (genre)-[:rdfs__subClassOf*]->(c:owl__Class) RETURN DISTINCT split(genre.uri, \"#\")[1] AS genre"
        with driver.session() as session:
            result = session.run(genre_query)
            available_genres = [record["genre"] for record in result if record["genre"]]

        if not available_genres and genre.lower() not in ['legends', 'myths', 'folktales', 'legend', 'myth', 'folktale']:
            dispatcher.utter_message("I couldn't find any available genres.")
            return []
        
        stories = []
        if available_genres:
            genre_match = min(available_genres, key=lambda t: Levenshtein.distance(genre, t))
            query = f"""
                MATCH (story:ns0__{genre_match})
                RETURN DISTINCT story.ns0__title as title
                LIMIT 10
            """
            with driver.session() as session:
                result = session.run(query)
                stories = [record["genre_name"] for record in result if record["genre_name"] != "NamedIndividual"]
            driver.close()
        else:
            genre_match = genre.title()
            query = """
                MATCH (story)-[:rdf__type]->(m)-[:rdfs__subClassOf*]->(c:owl__Class)
                WHERE c.uri ENDS WITH $genre
                RETURN DISTINCT story.ns0__title as title
                LIMIT 10
            """
            with driver.session() as session:
                result = session.run(query, genre=genre_match)
                stories = [record["title"] for record in result]
            driver.close()
            
        print(genre_match)  

        # if genres:
        #     dispatcher.utter_message(paraphrase(f"'{title_match}' falls under the following genre(s): {', '.join(genres)}."))
        # else:
        #     dispatcher.utter_message(paraphrase(f"I couldn't find genres for '{title_match}'."))

        if stories:
            dispatcher.utter_message((f"'Stories that fall under the category {genre_match}' include: {', '.join(stories)}."))
        else:
            dispatcher.utter_message((f"I couldn't find stories for '{genre_match}'."))

        SlotSet("story_title", stories)
        return []


class ActionGetKeyInformant(Action):
    def name(self) -> Text:
        return "action_get_key_informant"

    def run(self, dispatcher: CollectingDispatcher, 
            tracker: Tracker, 
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        story_title = tracker.get_slot("story_title")
        if not story_title:
            dispatcher.utter_message("I need the story's title before I can give you the name/s of its key_informant/s. Can you specify the title again?")
            return []

        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        title_query = "MATCH (s) RETURN s.ns0__title AS title"
        with driver.session() as session:
            result = session.run(title_query)
            available_titles = [record["title"] for record in result if record["title"]]

        if not available_titles:
            dispatcher.utter_message("I couldn't find any available story titles.")
            return []

        title_match = min(available_titles, key=lambda t: Levenshtein.distance(story_title, t))

        print(title_match)  


        query = """
        MATCH (key_informant:ns0__KeyInformant)-[:ns0__isKeyInformantOf]->(story)
        WHERE story.ns0__title = $title
        RETURN DISTINCT replace(split(key_informant.uri, "#")[1], "_", " ") AS key_informant_name
        LIMIT 10
        """

        key_informant = []
        with driver.session() as session:
            result = session.run(query, title=title_match)
            key_informant = [record["key_informant_name"] for record in result]

        driver.close()

        # if researcher:
        #     dispatcher.utter_message(paraphrase(f"The people that are responsible for researching or recording '{title_match}' include: {', '.join(researcher)}."))
        # else:
        #     dispatcher.utter_message(paraphrase(f"I couldn't find any reseacher/recorder for '{title_match}'."))
        
        if key_informant:
            dispatcher.utter_message((f"The key informant that told the story of'{title_match}' was: {', '.join(key_informant)}."))
        else:
            dispatcher.utter_message((f"I couldn't find any key informant for '{title_match}'."))
        
        
        SlotSet("key_informant", key_informant)

        return []



class InvActionGetKeyInformant(Action):
    def name(self) -> Text:
        return "inv_action_get_key_informant"

    def run(self, dispatcher: CollectingDispatcher, 
            tracker: Tracker, 
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        key_informant = tracker.get_slot("key_informant")
        if not key_informant:
            dispatcher.utter_message("I need the key informant's name before I can give you the title/s of stories they've recounted. Can you specify the name again?")
            return []

        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        key_informant_query = "MATCH (key_informant:ns0__KeyInformant) RETURN split(key_informant.uri, \"#\")[1] AS key_informant"
        with driver.session() as session:
            result = session.run(key_informant_query)
            available_key_informants = [record["key_informant"] for record in result if record["key_informant"]]

        if not available_key_informants:
            dispatcher.utter_message("I couldn't find any available key informants.")
            return []

        key_informant_match = min(available_key_informants, key=lambda t: Levenshtein.distance(key_informant, t))

        print(key_informant_match)  

        query = """
        MATCH (key_informant:ns0__KeyInformant)-[:ns0__isKeyInformantOf]->(story)
        WHERE key_informant.uri ENDS WITH $key_informant
        RETURN DISTINCT story.ns0__title as title
        LIMIT 10
        """

        stories = []
        with driver.session() as session:
            result = session.run(query, key_informant=key_informant_match)
            stories = [record["title"] for record in result]

        driver.close()

        # if researcher:
        #     dispatcher.utter_message(paraphrase(f"The people that are responsible for researching or recording '{title_match}' include: {', '.join(researcher)}."))
        # else:
        #     dispatcher.utter_message(paraphrase(f"I couldn't find any reseacher/recorder for '{title_match}'."))
        
        if stories:
            dispatcher.utter_message((f"The stories recounted by '{key_informant_match}' include: {', '.join(stories)}."))
        else:
            dispatcher.utter_message((f"I couldn't find any stories retold by '{key_informant_match}'."))
        
        SlotSet("story_title", stories)
        
        return []



class ActionGetLanguage(Action):
    def name(self) -> Text:
        return "action_get_language"

    def run(self, dispatcher: CollectingDispatcher, 
            tracker: Tracker, 
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        story_title = tracker.get_slot("story_title")
        if not story_title:
            dispatcher.utter_message("I need the story's title before I can tell you what language it uses. Could you provide the title?")
            return []

        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        title_query = "MATCH (s) RETURN s.ns0__title AS title"
        with driver.session() as session:
            result = session.run(title_query)
            available_titles = [record["title"] for record in result if record["title"]]

        if not available_titles:
            dispatcher.utter_message("I couldn't find any available story titles.")
            return []

        title_match = min(available_titles, key=lambda t: Levenshtein.distance(story_title, t))

        query = """
        MATCH (lang:ns0__Language)-[:ns0__isLanguageIn]->(story)
        WHERE story.ns0__title = $title
        RETURN DISTINCT replace(split(lang.uri, "#")[1], "_", " ") AS language_name
        """

        languages = []
        with driver.session() as session:
            result = session.run(query, title=title_match)
            languages = [record["language_name"] for record in result]

        driver.close()

        if languages:
            dispatcher.utter_message(f"The language(s) used in '{title_match}' include: {', '.join(languages)}.")
        else:
            dispatcher.utter_message(f"I couldn't find any language information for '{title_match}'.")

        return [SlotSet("language", languages)]
class InvActionGetLanguage(Action):
    def name(self) -> Text:
        return "inv_action_get_language"

    def run(self, dispatcher: CollectingDispatcher, 
            tracker: Tracker, 
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        language = tracker.get_slot("language")
        if not language:
            dispatcher.utter_message("I need the language's name before I can give you the list of stories that use it. Can you specify the language again?")
            return []

        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        language_query = "MATCH (l:ns0__Language) RETURN split(l.uri, \"#\")[1] AS language"
        with driver.session() as session:
            result = session.run(language_query)
            available_languages = [record["language"] for record in result if record["language"]]

        if not available_languages:
            dispatcher.utter_message("I couldn't find any available languages.")
            return []

        language_match = min(available_languages, key=lambda t: Levenshtein.distance(language, t))

        query = """
        MATCH (lang:ns0__Language)-[:ns0__isLanguageIn]->(story)
        WHERE lang.uri ENDS WITH $language
        RETURN DISTINCT story.ns0__title AS title
        LIMIT 10
        """

        stories = []
        with driver.session() as session:
            result = session.run(query, language=language_match)
            stories = [record["title"] for record in result]

        driver.close()

        if stories:
            dispatcher.utter_message(f"The stories that use the language '{language_match}' include: {', '.join(stories)}.")
        else:
            dispatcher.utter_message(f"I couldn't find any stories using the language '{language_match}'.")

        return [SlotSet("story_title", stories)]


class ActionGetGeographicFeature(Action):
    def name(self) -> Text:
        return "action_get_geographic_feature"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        story_title = tracker.get_slot("story_title")
        if not story_title:
            dispatcher.utter_message("I need the story's title before I can tell you what geographic feature is mentioned. Could you provide the title?")
            return []

        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        title_query = "MATCH (s) RETURN s.ns0__title AS title"
        with driver.session() as session:
            result = session.run(title_query)
            available_titles = [record["title"] for record in result if record["title"]]

        if not available_titles:
            dispatcher.utter_message("I couldn't find any available story titles.")
            return []

        title_match = min(available_titles, key=lambda t: Levenshtein.distance(story_title, t))

        query = """
        MATCH (feature)-[:ns0__isGeographicFeatureIn]->(story)
        WHERE story.ns0__title = $title
        AND (
            (feature)-[:rdf__type]->(type)
            WHERE type.uri ENDS WITH "#Landform" OR type.uri ENDS WITH "#BodyOfWater"
        )
        RETURN DISTINCT replace(split(feature.uri, "#")[1], "_", " ") AS feature_name
        """

        geographic_features = []
        with driver.session() as session:
            result = session.run(query, title=title_match)
            geographic_features = [record["feature_name"] for record in result]

        driver.close()

        if geographic_features:
            dispatcher.utter_message(f"The geographic features mentioned in '{title_match}' include: {', '.join(geographic_features)}.")
        else:
            dispatcher.utter_message(f"I couldn't find any geographic feature mentioned in '{title_match}'.")

        SlotSet("geographic_feature", geographic_features)
        return []

class InvActionGetGeographicFeature(Action):
    def name(self) -> Text:
        return "inv_action_get_geographic_feature"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        feature = tracker.get_slot("geographic_feature")
        if not feature:
            dispatcher.utter_message("I need the geographic feature's name to find relevant stories. Could you provide it again?")
            return []

        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        feature_query = """
        MATCH (f)-[:ns0__isGeographicFeatureIn]->(n)
        RETURN DISTINCT split(f.uri, "#")[1] AS feature
        """
        with driver.session() as session:
            result = session.run(feature_query)
            available_features = [record["feature"] for record in result if record["feature"]]

        if not available_features:
            dispatcher.utter_message("I couldn't find any available geographic features.")
            return []

        feature_match = min(available_features, key=lambda t: Levenshtein.distance(feature, t))

        query = """
        MATCH (feature)-[:ns0__isGeographicFeatureIn]->(story)
        WHERE feature.uri ENDS WITH $feature
        RETURN DISTINCT story.ns0__title AS title
        LIMIT 10
        """

        stories = []
        with driver.session() as session:
            result = session.run(query, feature=feature_match)
            stories = [record["title"] for record in result]

        driver.close()

        if stories:
            dispatcher.utter_message(f"The stories that mention '{feature_match}' include: {', '.join(stories)}.")
        else:
            dispatcher.utter_message(f"I couldn't find any stories that mention the geographic feature '{feature_match}'.")

        return [SlotSet("story_title", stories)]


class ActionGetProvenance(Action):
    def name(self) -> Text:
        return "action_get_provenance"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        story_title = tracker.get_slot("story_title")
        if not story_title:
            dispatcher.utter_message("I need the story's title before I can tell you its provenance. Could you specify the title again?")
            return []

        # Connect to Neo4j
        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        # Step 1: Get all known titles
        title_query = "MATCH (s) RETURN s.ns0__title AS title"
        with driver.session() as session:
            result = session.run(title_query)
            available_titles = [record["title"] for record in result if record["title"]]

        if not available_titles:
            dispatcher.utter_message("I couldn't find any available story titles.")
            return []

        # Step 2: Find closest title match
        title_match = min(available_titles, key=lambda t: Levenshtein.distance(story_title, t))

        # Step 3: Query for provenance using matched title
        query = """
        MATCH (story)
        WHERE story.ns0__title = $title
        RETURN DISTINCT story.ns0__provenance AS provenance
        LIMIT 1
        """

        provenance = None
        with driver.session() as session:
            result = session.run(query, title=title_match)
            record = result.single()
            if record:
                provenance = record["provenance"]

        driver.close()

        # Step 4: Respond to user
        if provenance:
            dispatcher.utter_message(f"The provenance of the story '{title_match}' is: {provenance}.")
        else:
            dispatcher.utter_message(f"I couldn't find any provenance for the story '{title_match}'.")

        SlotSet("provenance", provenance)
        return []

class ActionGetRandomStories(Action):
    def name(self) -> Text:
        return "action_get_random_stories"

    def run(self, dispatcher: CollectingDispatcher, 
            tracker: Tracker, 
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        story_count = int(tracker.get_slot("story_count"))
        if  int(story_count) <= 0:
            dispatcher.utter_message("Please use positive integers when specifying the number of stories.")

        uri = "bolt://localhost:7687/neo4j"
        username = "neo4j"
        password = "password"
        driver = GraphDatabase.driver(uri, auth=(username, password), encrypted=False)

        query = """
        MATCH (node)
        WHERE(node.ns0__title) IS NOT NULL
        RETURN DISTINCT node.ns0__title as title_name
        ORDER BY rand()
        LIMIT $story_count
        """
        
        titles = []
        with driver.session() as session:
            result = session.run(query, story_count=story_count)
            titles = [record["title_name"][0] for record in result]

        driver.close()

        # if titles:
        #     dispatcher.utter_message(paraphrase(f"Here are some stories taken from the database: {', '.join(titles)}."))
        # else:
        #     dispatcher.utter_message(paraphrase(f"I couldn't find any titles from the database."))

        if titles:
            dispatcher.utter_message((f"Here are some stories taken from the database: {', '.join(titles)}."))
        else:
            dispatcher.utter_message((f"I couldn't find any titles from the database."))

        SlotSet("story_title", titles)
        return []