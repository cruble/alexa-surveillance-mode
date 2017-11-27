# Code base for "Surveillance Mode" Alexa Prank 
A simple [AWS Lambda](http://aws.amazon.com/lambda) function that allows for a simple and satisfying Alexa Prank. Make your friends and family think that they are being tracked more closely than they could possibly imagine. 

## Setup
To run this prank you need to do two things. The first is to deploy the code in lambda, and the second is to configure an Alexa skill to use Lambda. You can personalize the code for your desired targets and deploy it to your own system as a developer. 

### AWS Lambda Setup
These steps shouldn't take you too long to set up. 

1. Go to the AWS Console and click on the Lambda link. Note: ensure you are in us-east or you won't be able to use Alexa with Lambda.
2. Click on the Create a Lambda Function or Get Started Now button.
3. Skip the blueprint
4. Name the Lambda Function "Surveillance-Mode".
5. Select the runtime as Node.js
6. Go to the the src directory, select all files and then create a zip file, make sure the zip file does not contain the src directory itself, otherwise Lambda function will not work.
7. Select Code entry type as "Upload a .ZIP file" and then upload the .zip file to the Lambda
8. Keep the Handler as index.handler (this refers to the main js file in the zip).
9. Create a basic execution role and click create.
10. Leave the Advanced settings as the defaults.
11. Click "Next" and review the settings then click "Create Function"
12. Click the "Event Sources" tab and select "Add event source"
13. Set the Event Source type as Alexa Skills kit and Enable it now. Click Submit.
14. Copy the ARN from the top right to be used later in the Alexa Skill Setup

### Alexa Skill Setup
These steps are required for the skill set up. 

1. Go to the [Alexa Console](https://developer.amazon.com/edw/home.html) and click Add a New Skill.
2. Set "Surveillance Mode" for the skill name and "surveillance mode" as the invocation name, this is what is used to activate your skill. For example you would say: "Alexa, open Surveillance Mode."
3. Select the Lambda ARN for the skill Endpoint and paste the ARN copied from above. Click Next.
4. Copy the Intent Schema from the included IntentSchema.json.
5. Copy the Sample Utterances from the included SampleUtterances.txt. Click Next.
6. [optional] go back to the skill Information tab and copy the appId. Paste the appId into the index.js file for the variable APP_ID,
   then update the lambda source zip file with this change and upload to lambda again, this step makes sure the lambda function only serves request from authorized source.
7. You are now able to start testing your sample skill! You should be able to go to the [Echo webpage](http://echo.amazon.com/#skills) and see your skill enabled. 
8. In order to test it, try some of the Sample Utterances from the Examples section below.
9. Your skill is now ready to run locally. 
10. Get information about your friend's days. Add your friend's name and information for each day ('yesterday', 'today', 'tomorrow') to the sections. We find that random details seem to have the best effect. 

## Examples
To use the skill, say "Open surveillance Mode" or "Ask surveillance mode". I often accidentally say "Turn on surveillance mode, then the Echo thinks that you are trying to use an Internet connected device. Example user interactions below: 

### One-shot model:
    User:  "Alexa, ask Surveillance Mode what Charles did yesterday."
    Alexa: "Yesterday, the subject Charles woke up late and had french toast for breakfast at the Grand Canyon Diner. He dropped a fork, but got another one rather quickly from the waiter." 

### Dialog model:
    User:  "Alexa, open Surveillance Mode"
    Alexa: "Surveillance Mode. What person would you like to track?"
    User:  "Charles"
    Alexa: "For what day would you like information. Yesterday or today?" 
    User:  "Today."
    Alexa: "Today, the subject Charles had eggs and bacon for breakfast before going to a flag football game. His team won 21 to 18. Charles scored one touchdown. His defense was strong."

