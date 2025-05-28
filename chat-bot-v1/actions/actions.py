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


uri = "neo4j+s://85be2d53.databases.neo4j.io"
username = "neo4j"
password = "xQMRKBb2Ixc-PRaMU8EIYb3Tzwmr9XTWsmD8qtFb8ys"


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

        global uri
        global username
        global password
        driver = GraphDatabase.driver(uri, auth=(username, password))

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

        # if characters:
        #     dispatcher.utter_message(paraphrase(f"Some of the characters you'll include in the story'{title_match}' include: {', '.join(characters)}."))
        # else:
        #     dispatcher.utter_message(paraphrase(f"I couldn't find characters for '{title_match}'."))

        if characters:
            dispatcher.utter_message((f"Some of the characters you'll include in the story'{title_match}' include: {', '.join(characters)}."))
        else:
            dispatcher.utter_message((f"I couldn't find characters for '{title_match}'."))


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

        global uri
        global username
        global password
        driver = GraphDatabase.driver(uri, auth=(username, password))

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

        global uri
        global username
        global password

        driver = GraphDatabase.driver(uri, auth=(username, password))

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

        # if genres:
        #     dispatcher.utter_message(paraphrase(f"'{title_match}' falls under the following genre(s): {', '.join(genres)}."))
        # else:
        #     dispatcher.utter_message(paraphrase(f"I couldn't find genres for '{title_match}'."))

        if genres:
            dispatcher.utter_message((f"'{title_match}' falls under the following genre(s): {', '.join(genres)}."))
        else:
            dispatcher.utter_message((f"I couldn't find genres for '{title_match}'."))


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

    #    story_count_slot = tracker.get_slot("story_count")
    #     if story_count_slot is None:
    #         dispatcher.utter_message("Please specify how many stories you want to retrieve.")
    #         return []
    #     try:
    #         story_count = int(story_count_slot)
    #     except (ValueError, TypeError):
    #         dispatcher.utter_message("Please use a valid integer for the number of stories.")
    #         return []
    #     if story_count <= 0:
    #         dispatcher.utter_message("Please use positive integers when specifying the number of stories.")
    #         return []

        global uri
        global username
        global password
        driver = GraphDatabase.driver(uri, auth=(username, password))

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

        # if titles:
        #     dispatcher.utter_message(paraphrase(f"Here are some stories taken from the database: {', '.join(titles)}."))
        # else:
        #     dispatcher.utter_message(paraphrase(f"I couldn't find any titles from the database."))

        if titles:
            dispatcher.utter_message((f"Here are some stories taken from the database: {', '.join(titles)}."))
        else:
            dispatcher.utter_message((f"I couldn't find any titles from the database."))


        return []
    