import {ContributionImage} from "@/components/ContributionImage.tsx";

export function ContributionGuideContent(){


  return(

    <main className=" p-16  flex flex-1 justify-center text-neutral-200  border-neutral-200 border">
      <div className={` w-250`}>
        {/*Classes*/}
        <section id={`introduction`}>
          <h1 className="contribution-header">Welcome!</h1>
          <p className={`contribution-p`}>
            Are you a researcher, storyteller, or enthusiast interested in contributing to our growing collection of
            Panayanon folk narratives? You're in the right place! This guide will walk you through how to use our hosted
            WebProtégé site, an online platform that lets you add stories, characters, researchers, and more to our shared
            ontology.
          </p>

          <br/>
          <p className={`font-semibold`}>Visit the link here: <a href={`https://mammal-live-treefrog.ngrok-free.app/webprotege/#projects/89c391d0-ee14-4ec9-b463-766ec3b167e2/edit/Classes`} className={`hover:cursor-pointer`}>
            PanayHub WebProtege</a> </p>
          <br/>
          <p className={`contribution-p`}>To get started, you'll need to create a free account. This helps us keep a
            clear and trustworthy record of all contributions, which means tracking who added what in where, and when.
          </p>
          <ContributionImage src={`/image-1.png`}/>


          <p className={`contribution-p`}>Once you’re logged in, you’ll be greeted with the ontology. Don’t worry about
            all the technical stuff, this guide will help you navigate through this interface. Think of the digital
            ontology like your computer’s file manager. Just like how folders can contain subfolders and files, our
            ontology is organized in a similar way. It’s all about structure, and you’ll get the hang of it in no time!
          </p>

          <ContributionImage src={`/image-2.png`}/>
          <p className={`contribution-p`}> Ready to explore and contribute? Let's get started together!</p>
          {/*Exploring the ontrolgy calsses*/}
          <section id={`exploring`}>
            <h1 className={`contribution-header`}>
              Exploring the Ontology Classes
            </h1>
            <p className={`contribution-p`}>
              You can explore the categorization system called the “Class Hierarchy”, which can be found on the “Class”
              ribbon. It is the system of ontological classifications of the data in PanayHub. Class is basically the
              classification term for entities or things. For example, an entity can be classified under the class
              “KeyInformant”, signifying that this entity is a key informant; or a an entity can be classified as
              “DeathMyths”, signifying that this entity is a Death Myth, which is under the classification of Myth.
            </p>
            <br/>
            <p className={`contribution-p`}>
              You can start exploring by looking at the <code className={`contribution-bold`}>"Class Hierarchy"</code>, which
              you’ll find under the <code className={`contribution-bold`}>"Classes”</code> tab. This is the system we
              follow when organizing and categorizing
              information in PanayHub, just like
              how files are grouped under a folder in a computer or books are grouped by genre in a library.
            </p>
            <br/>
            <p className={`contribution-p`}>
              A <span className={`italic`}>Class</span> is basically just a label or category used to group similar things. For example, if someone is a
              storyteller or source of a folk narrative, they can be placed under the class <span className={`italic`}>
              “KeyInformant”</span>. If the story
              is about death-related beliefs, it might fall under <span className={`italic`}>“DeathMyths”</span>, which is a more specific type under the
              broader category of <span className={`italic`}>“Myth”</span>.
            </p>


            <ContributionImage src={`/image-3.png`}/>

            <p className={`contribution-p`}>
              To look for a specific entry or item, head over to the “Individuals” tab. On the left side, you’ll find
              an alphabetical list of all the entities in PanayHub, these could be stories, characters, researchers,
              places, and more.
            </p>
            <br/>
            <p className={`contribution-p`}>
              If you want to narrow things down and view only the items under a specific class, click the “Select from
              hierarchy” button, represented by three circles connected by lines in the top-left portion of the sidebar.
              This will open a menu similar to what you saw in the “Classes” tab, giving you a structured overview of
              all categories. Just click on the class you’re interested in (like Myths, Characters, or KeyInformants),
              and the list will update to show only the related entities.
            </p>
            <ContributionImage src={`/image-4.png`}/>
            <p className={`contribution-p`}>
              Once you’ve selected a class, the left panel will display all the entries that belong to that class.
              When you click on one, you’ll see its details appear in the main area, including information about the
              entity and its relationships to entities.
            </p>
            <br/>
            <div className={``}>
              <p className={`font-semibold`}>💡 Tip:</p>
              <ul className={`list-inside list-disc`}>
                <li className={`ml-6`}>
                  Information related to the story itself is shown in <span className={`font-semibold`}>green</span>
                </li>
                <li className={`ml-6`}>
                  Related entities (e.g. a character included in a myth) are shown in <span className={`font-bold`}>blue.</span>
                </li>
              </ul>
            </div>
            <br/>
            <p className={`contribution-p`}>
              Want to learn more about a connected entity? Simply hover over its name in the
              <code className={`contribution-bold`}> “Relationships” </code>
              section and click the <span className={`font-bold`}>arrow</span> that appears to the right of the name. This will take you straight to that
              entity’s page so you can explore further.
            </p>
            <ContributionImage src={`/image-5.png`}/>
            <section id={`adding-folk`}>
              <h1 className={`contribution-header`}>Adding a Folk Narrative</h1>
              <p className={`contribution-p`}>
                So, you’ve got a story to share? That’s wonderful! Let’s walk through how to add your folk narrative to
                PanayHub using our WebProtégé interface. Don’t worry, we’ll guide you every step of the way.

              </p>
              <br/>


              <h1 id={`step-1`} className={`contribution-subheader`}>
                Step 1: Go to the “Individuals” Tab
              </h1>
              <p className={`contribution-p`}>
                Start by clicking on the <code className={`contribution-bold`}> "Individuals"</code> tab. Here, you’ll
                see a list of all
                the entries like stories, characters, researchers, and more. These are technically called
                <span className={`italic`}> individuals or entities</span>.
              </p>
              <p className={`contribution-p`}>
                To add your own, click the <code className={`contribution-bold`}>“Create individual”</code> button,
                represented by a circle with a plus sign (+) found just under the <code className={`contribution-bold`}>“Individuals
                by Class” </code>section.
              </p>
              <ContributionImage src={`/image-6.png`}/>

              <h1 id={`step-2`} className={`contribution-subheader`}>
                Step 2: Name Your Story
              </h1>
              <p className={`contribution-p`}>
                A pop-up will appear asking you to name the new individual. This name acts like a file name, helping us
                keep things organized. If your story is titled “Ang Ginhalinan Sang Baybayon”, you can enter:
                AngGinhalinanSangBaybayon. This is the formatting used in PanayHub.</p>
              <br/>
              <p className={`contribution-p`}>

                If that name is already taken, just add a number, like: AngGinhalinanSangBaybayon2
              </p>
              <br/>
              <p className={`contribution-p`}>
                Then click “Create”.
              </p>

              <ContributionImage src={`/image-7.png`}/>


              <h1 id={`step-3`} className={`contribution-subheader`}>Step 3: Classify the Story</h1>

              <p className={`contribution-p`}>
                Now that your story is created, it’s time to tell the system what class of folk
                narrative it is. In the <code className={`contribution-bold`}>“Types”</code> section, start typing the
                class name
                (e.g. DeathMyths, WhyLegends, AnimalTales). A list of suggestions will appear,
                simply click the one that fits your story.
              </p>

              <ContributionImage src={`/image-8.png`}/>
              <h1 id={`step-4`} className={`contribution-subheader`}>Step 4: Add Story Details</h1>
              <p className={`contribution-p`}>
                Scroll down to the <code className={`contribution-bold`}>“Relationships”</code> section. Here, you’ll
                add important pieces of
                information about your story and how it was researched. Every story should have
                these four properties:
              </p>
              <ul className={`list-inside list-decimal`}>
                <li className={`ml-6 contribution-p`}>
                  <span className={`font-bold`}>title</span> – The title of the story as specified in the
                  research or source document. If it’s a version of another story, add “V2” or so depending on the
                  number (e.g. “Ang Ginhalinan Sang Baybayon V2”)
                </li>
                <li className={`ml-6 contribution-p`}>
                  <span className={`font-bold`}>date_of_recording</span> When the story was
                  recorded. Use this format: [YYYY]-[MM]-[DD]T00:00:00 (e.g. 2025-01-01T00:00:00)

                </li>
                <li className={`ml-6 contribution-p`}>
                  <span className={`font-bold`}>place_of_recording</span> – The place where
                  the story was recorded or collected
                </li>

                <li className={`ml-6 contribution-p`}>
                  <span className={`font-bold`}>provenance</span> – The place of furthest origin of where the story came
                  from
                </li>
              </ul>
              <br/>
              <p className={`contribution-p`}>
                Type each property name in the <code className={`contribution-bold`}>"Enter
                property”</code> textbox and the corresponding value in the <code className={`contribution-bold`}>“Enter
                value”</code> textbox.
              </p>

              <ContributionImage src={`/image-9.png`}/>

              <h1 className={`contribution-subheader`} id={`step-5`}>Step 5: Connect Essential Relationships</h1>
              <p className={`contribution-p`}>Every story should be linked to three key individuals:</p>
              <ul className={`list-inside contribution-p list-disc`}>
                <li className={`ml-6`}>
                  hasKeyInformant – Who told or shared the story
                </li>
                <li className={`ml-6`}>
                  hasLanguage – The language used in telling or writing the story
                </li>
                <li className={`ml-6`}>
                  hasResearcherOrRecorder – Who recorded or documented the story
                </li>
              </ul>

              <p className={`contribution-p`}>If these individuals aren’t listed in the suggestions, follow our
                <code className={`contribution-bold`}> “Adding an Entity”</code> guide to create them first.
              </p>

              <ContributionImage src={`/image-10.png`}/>

              <p>
                Once linked, make sure to also add the reverse relationships:
              </p>
              <ul className={`list-decimal list-inside contribution-p`}>
                <li className={`ml-6`}>
                  Click the arrow beside the name to visit the page of the linked individual
                </li>
                <li className={`ml-6`}>
                  Under their <code className={`contribution-bold`}>“Properties” </code>section, add:
                  <ul className={`list-inside contribution-p list-disc`}>
                    <li className={`ml-6`}>
                      (KeyInformant) isKeyInformantOf - your story
                    </li>

                    <li className={`ml-6`}>
                      (Researcher ) conductedResearchOrRecorded - your story
                    </li>
                    <li className={`ml-6`}>
                      (Language) isLanguageIn - your story
                    </li>
                  </ul>
                </li>
              </ul>

              <ContributionImage src={`/image-11.png`}/>
              <ContributionImage src={`/image-13.png`}/>
              <ContributionImage src={`/image-12.png`}/>
              <h1 id={`step-6`} className={`contribution-subheader`}>Step 6: Add Story Elements</h1>
              <p className={`contribution-p`}>
                After adding the three essential relationships, you may also want to add other details that appear in
                the story, such as:
              </p>
              <ul className={`list-inside contribution-p list-disc`}>
                <li className={`ml-6`}>
                  hasCharacter – A character or figure mentioned
                </li>
                <li className={`ml-6`}>
                  hasGeographicFeature – Any natural feature like a river, mountain, etc.
                </li>
              </ul>
              <p className={`contribution-p`}>
                If these individuals aren’t listed in the suggestions,
                follow our <code className={`contribution-bold`}>"Adding an Entity”</code> guide to create them first.
              </p>
              <ContributionImage src={`/image-14.png`}/>
              <p>
                Once linked, make sure to also add the reverse relationships:
              </p>
              <ul className={`list-decimal list-inside contribution-p`}>
                <li className={`ml-6`}>
                  Click the arrow beside the name to visit the page of the linked individual
                </li>
                <li className={`ml-6`}>
                  Under their “Properties” section, add:
                  <ul className={`list-inside list-disc contribution-p`}>
                    <li className={`ml-6`}>
                      (Character) isCharacterOf - your story
                    </li>

                    <li className={`ml-6`}>
                      (GeographicFeature) isGeographicFeatureIn - your story
                    </li>
                  </ul>
                </li>
              </ul>
              <ContributionImage src={`/image-15.png`}/>
              <ContributionImage src={`/image-16.png`}/>

              <h1 id={`done`} className={`contribution-subheader`}>You're Done!</h1>
              <p className={`contribution-p`}>
                Now that you’ve added all the data and relationships,
                you’ve successfully added your folk narrative to the ontology!
                Thank you so much for helping preserve and organize the rich heritage
                of Panay’s folk stories. Your contribution matters! 💛

              </p>
              <h1 id={`adding-entity`} className={`contribution-header`}>Adding An Entity</h1>
              <p className={`contribution-p`}>
                Is your researcher, key informant, language, character or geographic
                feature not present in the ontology? Don’t worry, you can easily add them in!
              </p>
              <br/>
              <p className={`contribution-p`}>
                Start by clicking on the <code className={`contribution-bold`}>“Individuals” </code>tab. Here, you’ll
                see a list of all the entries like stories,
                characters, researchers, and more. These are technically called individuals or
                entities.
              </p>
              <br/>
              <p className={`contribution-p`}>
                To add your own, click the <code className={`contribution-bold`}>“Create individual”</code> button,
                represented by a
                circle with a plus sign (+) found just under the<code className={`contribution-bold`}> “Individuals by
                Class”</code> section.
              </p>

              <ContributionImage src={`/image-17.png`}/>
              <p className={`contribution-p`}>
                A pop-up will appear asking you to name the new individual. This name acts like a file name, helping us
                keep things organized. If your entity is named “Maria Cruz”, you can enter: MariaCruz. This is the
                formatting used in PanayHub.
              </p>
              <br/>
              <p className={`contribution-p`}>
                If that individual is a geographic feature, kindly indicate what type.
                For example, if it is a mountain, prefix it with “Mount” like “MountBukid”,
                if it is a Falls, postfix it with “Falls” like “BusayFalls”.

              </p>
              <br/>
              <p className={`contribution-p`}>
                Then click “Create”.
              </p>

              <ContributionImage src={`/image-18.png`}/>
              <p className={`contribution-p`}>
                Now that your individual is created, it’s time to tell the system
                what class of individual it is. In the <code className={`contribution-bold`}>“Types”</code> section,
                start typing the class
                name (e.g. Character, KeyInformant, ResearcherOrRecorder, Mountain, Falls). A
                list of suggestions will appear, simply click the one that fits your individual.
              </p>

              <ContributionImage src={`/image-19.png`}/>
              <p className={`contribution-p`}>
                You now have successfully created the individual! You may refer back to the
                <code className={`contribution-bold`}> “Adding A Folk Narrative”</code> guide to finish your
                contribution
                to PanayHub.
              </p>
              <h1 id={`deleting-entity`} className={`contribution-header`}>
                Deleting An Entity
              </h1>
              <p className={`contribution-p`}>
                You made a mistake? That’s fine! Just delete the entity. Find it in the
                <code className={`contribution-bold`}> “Individuals” </code> tab. You can click the
                <code className={`contribution-bold`}> "Search" </code> button just under the
                <code className={`contribution-bold`}> “Individuals by Class”</code> section, the button is represented by a magnifying glass.
              </p>

              <ContributionImage src={`/image-20.png`}/>
              <p className={`contribution-p`}>
                A pop-up will appear asking for the name of the individual. Type the entity or
                individual that you are looking for, and click on it.
              </p>

              <ContributionImage src={`/image-21.png`}/>
              <p className={`contribution-p`}>
                You will be directed to the page of the entity. To delete the entity, click
                the <code className={`contribution-bold`}> “Delete”</code> button
                represented by a circle with an ex, just under the <code className={`contribution-bold`}>“Individuals by
                Class” </code> section.
              </p>
              <ContributionImage src={`/image-22.png`}/>
              <p className={`contribution-p`}>
                Confirm the deletion and that individual will be deleted, including its relationship to other
                individuals.

              </p>

            </section>
          </section>

        </section>
      </div>
    </main>

  );
}
