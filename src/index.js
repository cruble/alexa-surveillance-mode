/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * App ID for the skill
 */
var APP_ID = undefined; //replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

/**
 * The AlexaSkill Module that has the AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * This is where you can add names and information.
 * Keep this structure and add all names to LIST_OF_NAMES.
 * Or they won't be recognized by the intent. 
 */
var NAMES = {
    'annie':
        {'yesterday':'went to park slope yoga and took an amazing class with arana that left her relaxed and rejuvinated. she took lane and a friend to tennis and braved the very busy crowds of Trader Joes to get some delicious food and drink. when she got home she enjoyed putting up some decorations with her husband, who happens to be amazing. she enjoyed a nice dinner with some great friends.',
        'today':'had a relaxing morning with her family. did some shopping ahead of the essential oils class for a nice group of friends.', 
        'tomorrow':'back to work, if you can call it that.'}, 
    'ann':
        {'yesterday':'went to park slope yoga and took an amazing class with arana that left her relaxed and rejuvinated. she took lane and a friend to tennis and braved the very busy crowds of Trader Joes to get some delicious food and drink. when she got home she enjoyed putting up some decorations with her husband, who happens to be amazing. she enjoyed a nice dinner with some great friends.',
        'today':'had a relaxing morning with her family. did some shopping ahead of the essential oils class for a nice group of friends.', 
        'tomorrow':'back to work, if you can call it that.'}, 

    'lane':
        {'yesterday':'slept in way too late. she started to change her sheets and packed for her friends sleepover birthday party. then her friend chiara came over and her mom took her to tennis where she played quite well. in fact, she might have been the star of the day. she was brough home by her friends dad and enjoyed putting up some holiday decorations with her family.',
        'today':'had a nice morning around the house. she did not get any work done on her forensics course. she prepared for an afternoon of essential oils and holiday spirits with some of her friends and their moms', 
        'tomorrow':'back to school. its monday. she will meet up with her friend Lola who will wait not longer than four minutes for her. and they will walk to school together. mr. indovia will be a bit stressed out about school of rock rehearsals, but what can you do?'}, 
    'charles':
        {'yesterday':'began the day playing seventy-three minutes of video games. His good friend Yesehak came over and the two went to the playground and played some hoops. They came back to the house and played videogames. The playdate is still currently under way.',
        'today':'spent some time playing videogames in the morning. had the whole house to himself while his parents picked up his sister for a sleepover. he got through a nice chunk of the death cure, a post apocalyptic thriller. went to his buddies noahs house. then they went to this wack vr bar place and he played some games.', 
        'tomorrow':'its monday and he is going to have an awesome day.'},
    'maddy':
        {'yesterday':'cut her finger on a weird contraption made to quarter grapes that came in a gift bag.',
        'today':'she is visiting her friend lanes house to learn about some essential oils.', 
        'tomorrow':'its monday and she is going to have an awesome day.'},
    'jade':
        {'yesterday':'got her christmas tree. a real one. not a fake one like the one here in this house. she had a  juice from juice land that she did not enjoy at all.',
        'today':'at chocolate chip pancakes for breakfast at a diner. she hung around a bit, then went to lanes house for a gathering about essential oils. she is having an excellent time. so far.', 
        'tomorrow':'its monday and she is going to have an awesome day.'},
    'mary':
        {'yesterday':'her sister cut her finger on a weird contraption made to quarter grapes that came in a gift bag.',
        'today':'had cold pizza and cookies for lunch. boy were there a lot of cookies around this weekend. she was very helpful to her mother at a special event. she decorated a cupcake to look like it was topped with lo mein and brocolli, peas, and carrots. and another one that looked likes spaghetti and meatballs that she gave to Maddy. what a nice sister!', 
        'tomorrow':'its monday and she is going to have an awesome day at school.'}, 
    'maxine':
        {'yesterday':'watched the first episode of Sherlock with her entire family.',
        'today':'she practiced trumpet.', 
        'tomorrow':'its monday and she is going to have an awesome day.'},
    'amalia':
        {'yesterday':'went to a soccer class in queens. then spent much of the day with her good friend susanna. the day wrapped up with a fun tennis class.',
        'today':'has not done much of anything. wait, she went to brunch with her dad and sister.', 
        'tomorrow':'its monday and she is going to have an awesome day.'}, 
    'lola':
        {'yesterday':'had a nice dinner with her dad in Soho. it was at  restaurant where her sitter candace works.',
        'today':'absolutely destroyed the dad of sitas friends at at foosball. she took a long bath. then headed to her friend lanes house for a session about essential oils.', 
        'tomorrow':'its monday and she is going to have an awesome day at school. she will probably have to wait for lane for at least four minutes before making her way to school in the morning.'},
    'amalia':
        {'yesterday':'went to a soccer class in queens. then spent much of the day with her good friend susanna. the day wrapped up with a fun tennis class.',
        'today':'has not done much of anything. wait, she went to brunch with her dad and sister.', 
        'tomorrow':'its monday and she is going to have an awesome day.'}, 
    'noah':
        {'yesterday':'had a great guitar lesson.',
        'today':'went to the zoo at prospect park with his mom and sister. then played with his friend charles. he headed to the VR bar and injured his leg.', 
        'tomorrow':'its monday and he is going to have an awesome day at school.'}, 
    'nina':
        {'yesterday':'bought a christmas tree. a real one. not a fake one like the one in the home I am stuck in. then she made a wreath with her grandmother.',
        'today':'ate chicken noodle soup for lunch and headed to her friend lanes house to learn about essential oils.', 
        'tomorrow':'its monday and she is going to have an awesome day at school.'},
    'chiara':
        {'yesterday':'had a productive tennis class with her friend lane. they beat the boys in a match.',
        'today':'ate french toast for breakfast then went shopping in soho. boy does that girl like to shop.', 
        'tomorrow':'its monday and she is going to have an awesome day at school.'},
    'hannah':
        {'yesterday':'went to a baby shower in coney island. there was a candy table with all pink candy. how very brooklyn the event was. the baby to be is named ella. she did handstands in the restaurant with another girl. she mixed sprite with coke and drank it. not sure that drink is going to catch on.',
        'today':'went to the Taylor Swift experience with her sister and cousins. it was tay tay amazing.', 
        'tomorrow':'its monday and she is going to have an awesome day at school.'},
    'avra':
        {'yesterday':'went to the brooklyn strategist and played potions.',
        'today':'ate chicken noodle soup for lunch then headed to lanes house with her mom for a fun info session about essential oils.', 
        'tomorrow':'its monday and she is going to have an awesome day at school.'},
    'chad':
        {'yesterday':'was awesome all day.',
        'today':'was awesome all day.', 
        'tomorrow':'will be awesome all day.'},
    'tish':
        {'yesterday':'worked incredibly hard. she made a delicious dinner of ravioli for lane and charles. she was a great support to chad as well, who seemed lower energy than usual.',
        'today':'slept in late and had a relaxing morning. was looking forward to having an evening to herself until she got a last minute request to sit charles. so she cancelled her evening plans and headed to brooklyn in the evening to take good care of charles.',
        'tomorrow':'will have a restful day. see a couple of good friends. maybe even a cousin or two.'}
    };


/**
 * SurveillanceModeSkill is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var SurveillanceModeSkill = function() {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
SurveillanceModeSkill.prototype = Object.create(AlexaSkill.prototype);
SurveillanceModeSkill.prototype.constructor = SurveillanceModeSkill;

SurveillanceModeSkill.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("SurveillanceModeSkill onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);

    // any session init logic would go here
};

SurveillanceModeSkill.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("SurveillanceModeSkill onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    getWelcomeResponse(response);
};

SurveillanceModeSkill.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);

    // any session cleanup logic would go here
};

SurveillanceModeSkill.prototype.intentHandlers = {
    "OneshotInfoIntent": function (intent, session, response) {
        handleOneshotInfoRequest(intent, session, response);
    },

    "DialogInfoIntent": function (intent, session, response) {
        // Determine if this turn is for name, for day, or an error.
        // We could be passed slots with values, no slots, slots with no value.
        var nameSlot = intent.slots.name;
        var daySlot = intent.slots.day;
        if (nameSlot && nameSlot.value) {
            handleNameDialogRequest(intent, session, response);
        } else if (daySlot && daySlot.value) {
            handleDateDialogRequest(intent, session, response);
        } else {
            handleNoSlotDialogRequest(intent, session, response);
        }
    },

    "SupportedNamesIntent": function (intent, session, response) {
        handleSupportedNamesRequest(intent, session, response);
    },


    "AMAZON.HelpIntent": function (intent, session, response) {
        var speechText = "With Surveillance Mode, I can provide detailed tracking for friends and family members.  " +
            "For which person would you like information for?";
        var repromptText = "Which day do you want? Today or Yesterday?";
        var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.ask(speechOutput, repromptOutput);
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = {
                speech: "Goodbye",
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = {
                speech: "Goodbye",
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.tell(speechOutput);
    }
};

/**
 * Function to handle the onLaunch skill behavior
 */

function getWelcomeResponse(response) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    var cardTitle = "Surveillance Mode";
    var repromptText = "With surveillance mode, you can get detailed up to date information about your friends and family members";
    var speechText = "<p>Surveillance Mode.</p> <p>Which person would you like information for?</p>";
    var cardOutput = "Surveillance Mode On. Who would you like to track?";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.

    var speechOutput = {
        speech: "<speak>" + speechText + "</speak>",
        type: AlexaSkill.speechOutputType.SSML
    };
    var repromptOutput = {
        speech: repromptText,
        type: AlexaSkill.speechOutputType.PLAIN_TEXT
    };
    response.askWithCard(speechOutput, repromptOutput, cardTitle, cardOutput);
}



/**
 * Handles the dialog step where the user provides a name
 */
function handleNameDialogRequest(intent, session, response) {

    var infoName = getNameFromIntent(intent, false),
        repromptText,
        speechOutput;
    if (infoName.error) {

        repromptText = "Currently, I only have surveillance information for some people. " + "Which person would you like to track?";
        // if we received a value for the incorrect name, repeat it to the user, otherwise we received an empty slot
        speechOutput = infoName.name ? "I'm sorry, I don't have any data for " + infoName.name + ". " + repromptText : repromptText;
        response.ask(speechOutput, repromptText);
        return;
    }

    // if we don't have a date yet, go to date. If we have a date, we perform the final request
    if (session.attributes.date) {
        getFinalInfoResponse(infoName, session.attributes.date, response);
    } else {
        // set name in session and prompt for date
        session.attributes.name = infoName;
        speechOutput = "Which day? Yesterday or today?";
        repromptText = "For which day would you like surveillance information for " + infoName.name + "?";

        response.ask(speechOutput, repromptText);
    }
}

/**
 * Handles the dialog step where the user provides a date
 */
function handleDateDialogRequest(intent, session, response) {

    var date = getDateFromIntent(intent),
        repromptText,
        speechOutput;
    if (!date) {

        repromptText = "Would you like information for yesterday or today? ";
        speechOutput = "I'm sorry, I didn't understand that date. " + repromptText;

        response.ask(speechOutput, repromptText);
        return;
    }

    // if we don't have a city yet, go to city. If we have a city, we perform the final request
    if (session.attributes.name) {
        getFinalInfoResponse(session.attributes.name, date, response);
    } else {
        // The user provided a date out of turn. Set date in session and prompt for city
        session.attributes.date = date;
        speechOutput = "For which person would you like information for " + date.day + "?";
        repromptText = "For which person?";

        response.ask(speechOutput, repromptText);
    }
}

/**
 * Handle no slots, or slot(s) with no values.
 * In the case of a dialog based skill with multiple slots,
 * when passed a slot with no value, we cannot have confidence
 * it is the correct slot type so we rely on session state to
 * determine the next turn in the dialog, and reprompt.
 */
function handleNoSlotDialogRequest(intent, session, response) {
    if (session.attributes.name) {
        // get date re-prompt
        var repromptText = "Please try again saying today or tomorrow. ";
        var speechOutput = repromptText;

        response.ask(speechOutput, repromptText);
    } else {
        // get names re-prompt
        handleSupportedNamesRequest(intent, session, response);
    }
}


function handleOneshotInfoRequest(intent, session, response) {

    // Determine name, using default if none provided
    var infoName = getNameFromIntent(intent, true),
        repromptText,
        speechOutput;
    if (infoName.error) {
        // invalid name. move to the dialog
        repromptText = "Currently, I have Surveillance information for these persons of interest: " + getAllNamesText()
            + "Which person are you interested in?";
        // if we received a value for the incorrect city, repeat it to the user, otherwise we received an empty slot
        speechOutput = infoName.name ? "I'm sorry. I don't have any information for " + infoName.name + ". " + repromptText : repromptText;

        response.ask(speechOutput, repromptText);
        return;
    }

    // Determine custom date
    var date = getDateFromIntent(intent);
    if (!date) {
        // Invalid date. set name in session and prompt for date
        session.attributes.name = infoName;
        repromptText = "Would you like information for yesterday or today? ";
        speechOutput = "I'm sorry, I didn't understand that date. " + repromptText;

        response.ask(speechOutput, repromptText);
        return;
    }

    // all slots filled, either from the user or by default values. Move to final request
    getFinalInfoResponse(infoName, date, response);
}



/**
 * Both the one-shot and dialog based paths lead to this method to issue the request, and
 * respond to the user with the final answer.
 */
function getFinalInfoResponse(infoName, day, response) {

    // Issue the request, and respond to the user
        var speechOutput;

        /// if infoName has info, speechOutput the day // if not, say that 
        // there seems to be a problem  

        if (NAMES[infoName.name] && NAMES[infoName.name][day.day]) {
            speechOutput = day.day + " The subject " + infoName.name + " " + NAMES[infoName.name][day.day]
        } else {
            speechOutput = "Sorry, surveillance for " + infoName.name + " appears to have been blocked. Please ask again later."
        }

    response.tellWithCard(speechOutput, "SurveillanceModeSkill", speechOutput)
};




/**
 * Gets the name from the intent, or returns an error
 */
function getNameFromIntent(intent, assignDefault) {

    var nameSlot = intent.slots.name;
    // slots can be missing, or slots can be provided but with empty value.
    // must test for both.
    if (!nameSlot || !nameSlot.value) {
        if (!assignDefault) {
            return {
                error: true
            }
        } else {
            // For sample skill, default to chad.
            return {
                name: 'chad'
            }
        }
    } else {
        // lookup the name. this toLowerCase might be wrong
        var personName = nameSlot.value.toLowerCase();
        console.log("inside getNameFromINtent " + personName); 
        console.log("inside getNameFromINtent wth string " + String(personName)); 
        if (NAMES[personName]) {
            return {
                name: personName,
            }
        } else {
            return {
                error: true,
                name: personName
            }
        }
    }
}

/**
 * Gets the date from the intent, defaulting to today if none provided,
 * or returns an error
 */
function getDateFromIntent(intent) {

    var daySlot = intent.slots.day;
    // slots can be missing, or slots can be provided but with empty value.
    // must test for both.
    if (!daySlot || !daySlot.value) {
        // default to today
        return {
            day: "today",
        }
    } else {

        var day = daySlot.value;

        return {
            day: day
        }
    }
}

/**
 * Handles the case where the user asked or for, or is otherwise being with supported names
 */
function handleSupportedNamesRequest(intent, session, response) {
    // get city re-prompt
    var repromptText = "Which person would you like to track?";
    var speechOutput = "Currently, I can track these people: " + getAllNamesText()
        + repromptText;

    response.ask(speechOutput, repromptText);
}

function getAllNamesText() {
    var nameList = '';
    for (var name in NAMES) {
        nameList += name + ", ";
    }

    return nameList;
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the HistoryBuff Skill.
    var skill = new SurveillanceModeSkill();
    skill.execute(event, context);
};

