from typing import Any, Text, Dict, List
from neo4j import GraphDatabase
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet
from fuzzywuzzy import process
import Levenshtein

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
        RETURN replace(split(character.uri, "#")[1], "_", " ") AS character_name
        LIMIT 10
        """

        characters = []
        with driver.session() as session:
            result = session.run(query, title=title_match)
            characters = [record["character_name"] for record in result]

        driver.close()

        if characters:
            dispatcher.utter_message(f"The characters in '{title_match}' are: {', '.join(characters)}.")
        else:
            dispatcher.utter_message(f"I couldn't find characters for '{title_match}'.")

        return []
    

class ActionGetResearcher(Action):
    def name(self) -> Text:
        return "action_get_researcher"

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
        MATCH (researcher)-[:ns0__conductedResearchOrRecorded]->(story)
        WHERE story.ns0__title = $title
        RETURN replace(split(researcher.uri, "#")[1], "_", " ") AS researcher_name
        LIMIT 10
        """

        characters = []
        with driver.session() as session:
            result = session.run(query, title=title_match)
            researcher = [record["researcher_name"] for record in result]

        driver.close()

        if researcher:
            dispatcher.utter_message(f"The researchers or recorders of '{title_match}' are: {', '.join(researcher)}.")
        else:
            dispatcher.utter_message(f"I couldn't find any reseacher/recorder for '{title_match}'.")
        
        SlotSet("researcher", researcher)

        return []

class ActionGetStoryGenres(Action):
    def name(self) -> Text:
        return "action_get_story_genres"

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
        MATCH (story)-[:rdf__type]->(genre)
        WHERE story.ns0__title = $title
        RETURN replace(split(genre.uri, "#")[1], "_", " ") AS genre_name
        LIMIT 10
        """

        genres = []
        with driver.session() as session:
            result = session.run(query, title=title_match)
            genres = [record["genre_name"] for record in result if record["genre_name"] != "NamedIndividual"]

        driver.close()

        if genres:
            dispatcher.utter_message(f"The genres of'{title_match}' is/are: {', '.join(genres)}.")
        else:
            dispatcher.utter_message(f"I couldn't find genres for '{title_match}'.")

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
        RETURN node.ns0__title as title_name
        ORDER BY rand()
        LIMIT $story_count
        """
        
        titles = []
        with driver.session() as session:
            result = session.run(query, story_count=story_count)
            titles = [record["title_name"] for record in result]

        driver.close()

        if titles:
            dispatcher.utter_message(f"Here are some stories from the database: {', '.join(titles)}.")
        else:
            dispatcher.utter_message(f"I couldn't find any titles from the database.")
        return []
    