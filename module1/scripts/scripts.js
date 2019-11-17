

// this file holds any scripts that have to do with communicating with the learning management system (LMS)

// define a SCORM object to interface with LMS
var oScorm = pipwerks.SCORM;  

// This function starts the course.  This function should be called first to ensure that
// all session variables are created
function startCourse()
{
	// check to see if cookies is enabled, otherwise, this won't work
	if( typeof sessionStorage == "undefined" || sessionStorage.disabled )
	{
		alert( "You must enable cookies for this course to work properly." );
	}
	else
	{
		// if it is enabled, checked to see if this course was started
		// if it was not able to retrieve, the key "course_started", then
		// then this is the first time we are running the course
        if( !sessionStorage.getItem( "course_started" ) )
        {
        		// clear the session storage
            sessionStorage.clear();
            // set the "key" by giving it a value.  all values are strings!
            // course_started indicated that this OLM has started
    		sessionStorage.setItem( "course_started", "1" );

	
			// set the values you want to persist throughout the website here
			sessionStorage.setItem( "page2Visited", "unvisited" );
			sessionStorage.setItem( "page3Visited", "unvisited" );
			sessionStorage.setItem( "page4Visited", "unvisited" );
			sessionStorage.setItem( "page5Visited", "unvisited" );
			sessionStorage.setItem( "page6Visited", "unvisited" );
			sessionStorage.setItem( "page7Visited", "unvisited" );
			sessionStorage.setItem( "page8Visited", "unvisited" );
			sessionStorage.setItem( "page9Visited", "unvisited" );
			sessionStorage.setItem( "page10Visited", "unvisited" );
			sessionStorage.setItem( "page11Visited", "unvisited" );
			sessionStorage.setItem( "page12Visited", "unvisited" );
			sessionStorage.setItem( "page13Visited", "unvisited" );
        }
	}
	
	// initializeSCORM after the OLM environment has been set up
	initializeSCORM();
}

// This function initializes the course by connecting the course to the LMS 
// The SCORM connection is done once at the beginning of the course
// Another function, reportScores(), will connect again when the 
// user is done with the online learning module
function initializeSCORM()
{
	var lmsConnected = oScorm.init();
	
	// we only want to run initializeSCORM once, so use course_started
	// to keep track of how many times we have initialized 
	var getStarted = sessionStorage.getItem( "course_started" );
	
	// only do the following if we are connected to the LMS and
	// if course_started has a value of 1
	if( lmsConnected && getStarted == "1" )
	{
		// SCORM 1.2
        // always set the status to incomplete
		oScorm.set( "cmi.core.lesson_status", "incomplete" );
		
		// change course_started to another value so that this initializeSCORM
		// does not run the initialization code again; otherwise, this OLM
		// will be incomplete if the user goes back to the first page even after
		// passing the exam 
		sessionStorage.setItem( "course_started", "2" );
    		
		// retrieve the LMS values (like user name) here and 
		// integrate them into your course
		alert( "Welcome, " + oScorm.get( "cmi.core.student_name" ) + "!" );
	}
}


function visitpage1()
{
	sessionStorage.setItem( "page1Visited", "visited" );
	alert( "page1.html");
	checkAllVisited();
}

function visitpage2()
{
	sessionStorage.setItem( "page2Visited", "visited" );
	alert( "page2.html");
	checkAllVisited();
}

function visitpage3()
{
	sessionStorage.setItem( "page3Visited", "visited" );
	alert( "page3.html");
	checkAllVisited();
}
function visitpage4()
{
	sessionStorage.setItem( "page4Visited", "visited" );
	alert( "page4.html");
	checkAllVisited();
}

function visitpage5()
{
	sessionStorage.setItem( "page5Visited", "visited" );
	alert( "page5.html");
	checkAllVisited();
}

function visitpage6()
{
	sessionStorage.setItem( "page6Visited", "visited" );
	alert( "page6.html");
	checkAllVisited();
}

function visitpage7()
{
	sessionStorage.setItem( "page7Visited", "visited" );
	alert( "page7.html");
	checkAllVisited();
}

function visitpage8()
{
	sessionStorage.setItem( "page8Visited", "visited" );
	alert( "page8.html");
	checkAllVisited();
}

function visitpage9()
{
	sessionStorage.setItem( "page9Visited", "visited" );
	alert( "page9.html");
	checkAllVisited();
}

function visitpage10()
{
	sessionStorage.setItem( "page10Visited", "visited" );
	alert( "page10.html");
	checkAllVisited();
}
function visitpage11()
{
	sessionStorage.setItem( "page11Visited", "visited" );
	alert( "page11.html");
	checkAllVisited();
}

function visitpage12()
{
	sessionStorage.setItem( "page12Visited", "visited" );
	alert( "page12.html");
	checkAllVisited();
}

function visitpage13()
{
	sessionStorage.setItem( "page13Visited", "visited" );
	alert( "page13.html");
	checkAllVisited();
}

function checkAllVisited()
{
	var p1 = sessionStorage.getItem( "page1Visited" );
	var p2 = sessionStorage.getItem( "page2Visited" );
	var p3 = sessionStorage.getItem( "page3Visited" );
	var p4 = sessionStorage.getItem( "page4Visited" );
	var p5 = sessionStorage.getItem( "page5Visited" );
	var p6 = sessionStorage.getItem( "page6Visited" );
	var p7 = sessionStorage.getItem( "page7Visited" );
	var p8 = sessionStorage.getItem( "page8Visited" );
	var p9 = sessionStorage.getItem( "page9Visited" );
	var p10 = sessionStorage.getItem( "page10Visited" );
	var p11 = sessionStorage.getItem( "page11Visited" );
	var p12 = sessionStorage.getItem( "page12Visited" );
	var p13 = sessionStorage.getItem( "page13Visited" );
	
	
	if( p1 == "visited" && p2 == "visited" p3 == "visited" && p4 == "visited" p5 == "visited" && p6 == "visited" p7 == "visited" && p8 == "visited" p9 == "visited" && p10 == "visited" && p11 == "visited" p12 == "visited" && p13 == "visited" )
	{
		// unhide the quiz link
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "inline";
	}
}


// This function reports the score from the assessment to the LMS
// This should only be called when the user submits the answers to the quiz
function reportScores( score )
{	
	oScorm.save();
}

// This function is called when the window is closed.  It saves and quits the course.
function finishCourse()
{
	oScorm.save();
	oScorm.quit();
}
