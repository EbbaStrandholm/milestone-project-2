<h1>  Trivia Quiz </h1> 
<hr>
    <p>
        This little project of mine will act as a simple trivia quiz created using HTML, CSS and JavaScript. It has 10 different questions, and all have 4 options each. The website is responsive and fit computer screens, tablets and smartphones. In the end of the quiz there will be a box containing feedback (scores), and will provide the user a restart/quit button to get the user back to the start quis page.
    </p>

<h2> User Experience </h2>
        <ul>
            <li><h3>First User Goals</h3></li>
                <ul>
                    <li>As a first time user I want the page to be easily understood in it's mechanics, as it is just a simple quiz no confusing buttons or pop-ups should distract the user.</li>
                    <li>The quiz should also have a balanced and welcoming color theme, so as once again, not act as a distraction from the quiz's purpose.</li>
                    <li>The content should be easily readable, contaning as close to zero grammatical mistakes as possible.</li>
                </ul>
            <li><h3>Returning User Goals</h3></li>
                <ul>
                    <li>As this is a one time, very simple quiz project, it will have no changes for returning users. However if I were to add on to this website later on it would then get an extra level of difficulty for those who pass with a good score.</li>
                    <li>As a returning user, I want the webbsite to stay the same in style and accessability, so as not to confuse the user's navigation of the quiz upon return</li>
                </ul>
        </ul>

<h2> Design </h2>
    <ul>
        <li> Color </li>
            <ul>
                <li> The website has been set a theme of different tones and shades of purple, in order to keep it clean and balanced looking. Because color can be a strong way to insinuate the result of an outcome, the options respond with a red when the it is incorrect, as well as show what the correct answer is using a green color. However when the user chooses the right option only the correct answer will be highlighted, as showing the incorrect answers would prove unnecessary.</li>
            </ul>
        <li> Fonts </li>
            <ul>
                <li> The Quicksand was used as it was a clean yet elegant looking font, which in my head goes really well with purple. And since there would be small text on a smaller screen size, the font needed to be clean and easy to read for the user to focus on the task at hand, answering the quiz's question</li>
            </ul>
        <li> Images </li>
            <ul>
                <li> In this project I wanted to keep it simple and clean, as the focus this time was on JavaScript rather than HTML and CSS, however, I did create a favicon for the window tab using <a href="https://favicon.io/favicon-generator/"></a>. Which is not something I did for the first milestone project!
                </li>
            </ul>          
    </ul>

<h2>Layout of the quiz</h2>

![Start Quiz](/assets/images/milestone-project-2-startquiz.png "Start quiz page, this is the first thing the user will see as they open the browser, as simple as it gets really.")

<p>Start quiz page, this is the first thing the user will see as they open the browser, as simple as it gets really.
</p>

![Rules Window](/assets/images/milestone-project-2-rules.png "As soon as the user clicked start quiz, a rules window will show, where the user then can choose either to exit the quit or to continue.")

<p>As soon as the user clicked start quiz, a rules window will show, where the user then can choose either to exit the quit or to continue.
</p>

![Quiz Window](/assets/images/milestone-project-2-quizwindow.png "After having clicked continue in the rules window, the user has started the quiz and now has 10 seconds per question to choose an answer.")

<p>After having clicked continue in the rules window, the user has started the quiz and now has 10 seconds per question to choose an answer.

![Results Window](/assets/images/milestone-project-2-score.png "After having completed all the questions the user will be provided a window containing a text saying congratulations and showing the user what score they got out of 10. This page also has three variations of text depending on how many correct answer the user got. And after having viewed the score the user can click the restart/quit button which will take them back to the start quiz page.")

</p>
<p>After having completed all the questions the user will be provided a window containing a text saying congratulations and showing the user what score they got out of 10. This page also has three variations of text depending on how many correct answer the user got. And after having viewed the score the user can click the restart/quit button which will take them back to the start quiz page.
</p>

<h2> Features </h2>
    <ul>
        <li> Responsive design has been applied to the quiz using media querys in the style.css file, it works on computers, tablets, and smartphones without having some parts that aren't visible. A link to the responsinator website will be linked below 
        </li>
        <li><a href="http://www.responsinator.com/?url=https%3A%2F%2Febbastrandholm.github.io%2Fmilestone-project-2%2F "></a>
        </li>
        <li> A start quiz button, that in turn leads to a rule window with either the option exit or continue. If continue is clicked a trivia quiz of 10 questions will start, this quiz has a timer, and doesn't allow the user to continue to the next question unless an answer is choses, or the time runs out. In the bottom left there is a counter that will tell the user what question they are currently on. After having completed the quiz the user is shown their score, and then after having reviewd the score the user can press restart/quit to be lead back to a fresh start quiz button to try again, or quit for the day </li>
    </ul>

<h2> Technologies used </h2>
    <ul>
        <li> Languages used </li>
            <ul>
                <li> CSS3 </li>
                <li> HTML5 </li>
                <li> JavaScript </li>
            </ul>
        <li> library and programs used </li>
            <ol>
                <li> <a href="https://fontawesome.com/"></a> </li>
                    <ul>
                        <li> Font awesome was used for the icons visible in the quiz and score window </li>
                    </ul>
                <li> <a href="https://fonts.google.com/"></a> </li>
                    <ul>
                        <li> Quicksand and Sans Seriff (back-up) was used from google fonts throughout the whole quiz </li>
                    </ul>
                <li> <a href="https://git-scm.com/"></a> </li>
                    <ul>
                        <li> Git was used to programme in gitpod, commit to git and then push that code to the github cloudbase </li>
                    </ul>
                <li> <a href="https://github.com/"></a> </li>
                    <ul>
                        <li> Github was used to store the code for this project after being pushed from git </li>
                    </ul>
                <li> <a href="https://www.mentimeter.com/blog/audience-energizers/55-free-trivia-and-fun-quiz-question-templates"></a> </li>
                    <ul>
                        <li> I used 10 of the trivia questions mentiond in this webpage, as I wanted to focus on the code of the project instead of it's contents, I did also not want any placeholder text in it's stead. </li>
                    </ul>
                <li> <a href="https://github.com/Code-Institute-Org/gitpod-full-template "></a></li>
                    <ul>
                        <li> Code Institutes ready made template for gitpod was used to create the code for the whole website 
                        </li>
                    </ul>
                <li> <a href="https://www.youtube.com/watch?v=WUBhpSRS_fk"></a> </li>
                    <ul>
                        <li> As I started my project a little too late, I used the video linked, which is owned by Coding Nepal, as a tutorial for the project. However it is not a copy but rather used as a backbone to get the project done in time. 
                        </li>
                    </ul>
            </ol>
    </ul>

<h2> Testing </h2>
    <p>
        Testing was done for all three coding languages, using the W3 HTML checker, W3 CSS checker, and JShint.
    </p>
    <p>
        This project was a little trickier than the HTML and CSS based project (milestone project 1) as I found the JavaScript language a little more on the difficult side. After having worked on this project for several hours a day I often got stuck the last few hourse over smaller mistakes such as an extra semicolon or period added somewhere confusing the programm. I saw but only one error throughout my coding, which was due to me not having added a favicon to the page yet, however that was a simple fix which only took but 5 minutes. Overall, even though I would've liked to feel more prepared for the project, and have more time, it turned out how I had hoped. I am overall happy with the end result. Below there will be links to the validator websites for those who whish to view.
    </p>
    <ul>
        <li><a href="https://validator.w3.org/">HTML Validator</a></li>
        <li><a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Febbastrandholm.github.io%2Fmilestone-project-2%2F">HTML Validator Result</a></li>
        <li><a href="https://jigsaw.w3.org/css-validator/">CSS validator</a></li>
        <li><a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Febbastrandholm.github.io%2Fmilestone-project-2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv">CSS Validator Result</a></li>
        <li><a href="https://jshint.com/">For those who want to check the JavaScript</a></li>
    </ul>
<hr>

<h2> Lighthouse reports </h2>

![Lighthouse report for computer use](/assets/images/mp2-lighthouse-computer-1.png)

<p>
    Lighthouse report for computer
</p>

![Lighthouse report for mobile use](/assets/images/mp2-lighthouse-mobile-1.png)

<p>
    Lighthouse report for mobile
</p>

<h2> Deployment </h2>
    <ul>
        <li><h3>Github Pages</h3></li>
            <ol>
                <li>Log in to <a href="https://github.com/EbbaStrandholm">GitHub</a> and locate the <a href="https://github.com/EbbaStrandholm/milestone-project-2">Repository.</a></li>
                <li>At the top of the Repository (not top of page), locate the "Settings" Button on the menu. </li>
                <li>Scroll down the Settings page until you locate the "GitHub Pages" Section.</li>
                <li>Under "Source", click the dropdown called "None" and select "Master Branch".</li>
                <li>The page will automatically refresh.</li>
                <li>Scroll back down through the page to locate the now published site <a href="https://ebbastrandholm.github.io/milestone-project-2/">link</a> in "GitHub Pages".</li>
            </ol>
    </ul>

<h2> Credits </h2>
    <ul>
        <h3> Code </h3>
        <li> This video served as a tutorial as I was short on time, it was used as a backbone for the JavaScript and general structure <a href="https://www.youtube.com/watch?v=WUBhpSRS_fk">Coding Nepal Quiz Video</a> </li>
    </ul>
    <ul>
        <h3> Content </h3>
        <li> The questions and answers was used from this website <a href="https://www.mentimeter.com/blog/audience-energizers/55-free-trivia-and-fun-quiz-question-templates"></a></li>
    </ul>
    <ul>
        <h3> Media </h3>
        <li> The screenshots taken for the readme are my own, and the favicon was genereate using this website <a href="https://favicon.io/favicon-generator/"></a> </li>
    </ul>
    <ul>
        <h3> Acknowledgement </h3>
        <li> My mentor, Dario Carrasquel, for awesome and helpful feedback throughout this project! Thank you! </li>
    </ul>
