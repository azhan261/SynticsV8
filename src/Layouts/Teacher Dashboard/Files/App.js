import "./App.css"
import Sidebar from './Views/Sidebar';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom' 
import ContactDetails from './Views/ContactDetails'
import PersonalInfoData from './Views/PersonalInfoData'
import PlacementTestResults from './Views/PlacementTestResults'
import RegistrationData from './Views/RegistrationsData'
import TeacherData from './Views/TeacherData'
import ViewQuestionsStudents from './Views/ViewQuestionsStudents'
import ViewInvoice from './Views/ViewInvoice'
import Layoutnew from './Layout/Layoutnew';
import CreatePlacementTest from './Views/CreatePlacementTest';
import PlacementQuestionDetails from './Views/PlacementQuestionDetails';
import CoursePlanningContent from './Views/CoursePlanningContent';
import CourseContentForTest from "./Views/List Of Classes For Test Section/CourseContentForTest";
import CoursePlanningContentDetails from './Views/CoursePlanningContentDetails';
import Blog from './Views/Blogs/Blog';
import BlogList from './Views/Blogs/BlogList';
import CurrentBlogView from './Views/Blogs/CurrentBlogView';
import EditBlog from './Views/Blogs/EditBlog';
import VideoChat from './Views/Plugins/VideoChat';
import CourseContentAdultTextQA from './Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultTextQA';
import CourseContentAdultMCQ from './Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultMCQ';
import CourseContentAdultBlanks from './Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultBlanks';
import CourseContentAdultHandwriting from "./Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultHandwriting";
import Pronunciation from './Courses Content/SchoolsTraining/AdultTraining/Sections/Text/Pronunciation';
import CourseContentAdultBlanksForTest from "./Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAdultBlanks";
import CourseContentAdultMCQForTest from "./Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAdultMCQ";
import CourseContentAdultTextForTest from "./Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAdultTextQA";
import CourseContentAdultHandwritingForTest from "./Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAdultHandwriting";
import PronunciationForTest from "./Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/Pronunciation";
import EditContentQA from './Courses Content/Edit Questions/EditContentQA';
import EditContentMCQ from './Courses Content/Edit Questions/EditContentMCQ';
import EditContentBlanks from './Courses Content/Edit Questions/EditContentBlanks';
import EditContentPronunciation from './Courses Content/Edit Questions/EditContentPronunciation';
import filesUploadComponent from './Courses Content/SchoolsTraining/AdultTraining/Sections/File Upload/filesUploadComponent';
import ViewContentList from './Views/ViewContentList';
import Container from './Views/Plugins/White Board/components/container/Container';
import AudioVideoRecorder from "./Views/Plugins/Audio Recording/AudioVideoRecorder";
import ListOfClasses from "./Views/List Of Classes Section/ListOfClasses";
import Grade1Content from "./Views/List Of Classes Section/Grade1Content";
import Grade2Content from "./Views/List Of Classes Section/Grade2Content";
import Grade3Content from "./Views/List Of Classes Section/Grade3Content";
import Grade4Content from "./Views/List Of Classes Section/Grade4Content";
import Grade5Content from "./Views/List Of Classes Section/Grade5Content";
import Grade6Content from "./Views/List Of Classes Section/Grade6Content";
import Grade7Content from "./Views/List Of Classes Section/Grade7Content";
import Grade8Content from "./Views/List Of Classes Section/Grade8Content";
import Grade9Content from "./Views/List Of Classes Section/Grade9Content";
import Grade10Content from "./Views/List Of Classes Section/Grade10Content";
import Grade11Content from "./Views/List Of Classes Section/Grade11Content";
import Grade12Content from "./Views/List Of Classes Section/Grade12Content";
import ListOfClassesForTest from "./Views/List Of Classes For Test Section/ListOfClassesForTest";
import Grade1ContentTest from "./Views/List Of Classes For Test Section/Grade1ContentTest";
import Grade2ContentTest from "./Views/List Of Classes For Test Section/Grade2Content";
import Grade3ContentTest from "./Views/List Of Classes For Test Section/Grade3Content";
import Grade4ContentTest from "./Views/List Of Classes For Test Section/Grade4Content";
import Grade5ContentTest from "./Views/List Of Classes For Test Section/Grade5Content";
import Grade6ContentTest from "./Views/List Of Classes For Test Section/Grade6Content";
import Grade7ContentTest from "./Views/List Of Classes For Test Section/Grade7Content";
import Grade8ContentTest from "./Views/List Of Classes For Test Section/Grade8Content";
import Grade9ContentTest from "./Views/List Of Classes For Test Section/Grade9Content";
import Grade10ContentTest from "./Views/List Of Classes For Test Section/Grade10Content";
import Grade11ContentTest from "./Views/List Of Classes For Test Section/Grade11Content";
import Grade12ContentTest from "./Views/List Of Classes For Test Section/Grade12Content";
import ResultsCategory from "./Views/Results/ResultCategory";
import ViewAnswers from "./Views/Results/List Of Grades For Subjects For Results/ViewAnswers";
import ListOfClassesForResults from "./Views/Results/ListOfClassesForResults";
import Grade1ContentForResultsForSubjects from "./Views/Results/List Of Grades For Subjects For Results/Grade 1 Content and Answers/Grade1Content";
import Grade2ContentForResultsForSubjects from "./Views/Results/List Of Grades For Subjects For Results/Grade 2 Content and Answers/Grade2Content";
import Grade3ContentForResultsForSubjects from "./Views/Results/List Of Grades For Subjects For Results/Grade 3 Content and Answers/Grade3Content";
import Grade4ContentForResultsForSubjects from "./Views/Results/List Of Grades For Subjects For Results/Grade 4 Content and Answers/Grade4Content";
import Grade5ContentForResultsForSubjects from "./Views/Results/List Of Grades For Subjects For Results/Grade 5 Content and Answers/Grade5Content";
import Grade6ContentForResultsForSubjects from "./Views/Results/List Of Grades For Subjects For Results/Grade 6 Content and Answers/Grade6Content";
import Grade7ContentForResultsForSubjects from "./Views/Results/List Of Grades For Subjects For Results/Grade 7 Content and Answers/Grade7Content";
import Grade8ContentForResultsForSubjects from "./Views/Results/List Of Grades For Subjects For Results/Grade 8 Content and Answers/Grade8Content";
import Grade9ContentForResultsForSubjects from "./Views/Results/List Of Grades For Subjects For Results/Grade 9 Content and Answers/Grade9Content";
import Grade10ContentForResultsForSubjects from "./Views/Results/List Of Grades For Subjects For Results/Grade 10 Content and Answers/Grade10Content";
import Grade11ContentForResultsForSubjects from "./Views/Results/List Of Grades For Subjects For Results/Grade 11 Content and Answers/Grade11Content";
import Grade12ContentForResultsForSubjects from "./Views/Results/List Of Grades For Subjects For Results/Grade 12 Content and Answers/Grade12Content";
import Grade1ContentAnswers from "./Views/Results/List Of Grades For Subjects For Results/Grade 1 Content and Answers/Grade1ContentAnswers";
import Grade2ContentAnswers from "./Views/Results/List Of Grades For Subjects For Results/Grade 2 Content and Answers/Grade2ContentAnswers";
import Grade3ContentAnswers from "./Views/Results/List Of Grades For Subjects For Results/Grade 3 Content and Answers/Grade3ContentAnswers";
import Grade4ContentAnswers from "./Views/Results/List Of Grades For Subjects For Results/Grade 4 Content and Answers/Grade4ContentAnswers";
import Grade5ContentAnswers from "./Views/Results/List Of Grades For Subjects For Results/Grade 5 Content and Answers/Grade5ContentAnswers";
import Grade6ContentAnswers from "./Views/Results/List Of Grades For Subjects For Results/Grade 6 Content and Answers/Grade6ContentAnswers";
import Grade7ContentAnswers from "./Views/Results/List Of Grades For Subjects For Results/Grade 7 Content and Answers/Grade7ContentAnswers";
import Grade8ContentAnswers from "./Views/Results/List Of Grades For Subjects For Results/Grade 8 Content and Answers/Grade8ContentAnswers";
import Grade9ContentAnswers from "./Views/Results/List Of Grades For Subjects For Results/Grade 9 Content and Answers/Grade9ContentAnswers";
import Grade10ContentAnswers from "./Views/Results/List Of Grades For Subjects For Results/Grade 10 Content and Answers/Grade10ContentAnswers";
import Grade11ContentAnswers from "./Views/Results/List Of Grades For Subjects For Results/Grade 11 Content and Answers/Grade11ContentAnswers";
import Grade12ContentAnswers from "./Views/Results/List Of Grades For Subjects For Results/Grade 12 Content and Answers/Grade12ContentAnswers";
import ListOfClassesForResultsOfTests from "./Views/Results/ListOfClassesForResultsOfTests";
import Grade1ContentTestForResultsForTestForTeacher from "./Views/Results/List Of Grades For Tests For Results/Grade1ContentTest";
import Grade2ContentTestForResultsForTestForTeacher from "./Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade3ContentTestForResultsForTestForTeacher from "./Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade4ContentTestForResultsForTestForTeacher from "./Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade5ContentTestForResultsForTestForTeacher from "./Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade6ContentTestForResultsForTestForTeacher from "./Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade7ContentTestForResultsForTestForTeacher from "./Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade8ContentTestForResultsForTestForTeacher from "./Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade9ContentTestForResultsForTestForTeacher from "./Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade10ContentTestForResultsForTestForTeacher from "./Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade11ContentTestForResultsForTestForTeacher from "./Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade12ContentTestForResultsForTestForTeacher from "./Views/Results/List Of Grades For Tests For Results/Grade2Content";
import ViewResultQAAnswerType from "./Views/Results/List Of Grades For Subjects For Results/Answer Types/Text Based/QA/ViewResultQAAnswerType";
import ViewAnswersBlanks from "./Views/Content Section/ViewAnswersBlanks";
import ViewAnswersMCQ from "./Views/Content Section/ViewAnswersMCQ";
import ViewAnswersPronunciation from "./Views/Content Section/ViewAnswersPronunciation";
import ViewAnswersQA from "./Views/Content Section/ViewAnswersQA";
import ViewAnswersHandWriting from "./Views/Content Section/ViewAnswersHandWriting";
import KeyboardUrdu from "./Views/Plugins/Virtual Key Board/KeyboardUrdu";
import NotificationList from "./Views/Notifications/NotificationList";
import AnswerQuery from "./Views/Notifications/AnswerQuery";
import FileUploadNew from "./Courses Content/SchoolsTraining/AdultTraining/Sections/File Upload/FileUploadNew";


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-sm-2"> 
          <Sidebar />
          </div>
          <div className="col-md-10 col-sm-10">
              <Switch>
                <Route path="/contact" component={ContactDetails} /> 
                <Route path="/personal-info" component={PersonalInfoData} /> 
                <Route path="/placement-results" component={PlacementTestResults} /> 
                <Route path="/registration-data" component={RegistrationData} /> 
                <Route path="/teachers-data" component={TeacherData} /> 
                <Route path="/invoice" component={ViewInvoice} /> 

                <Route path="/questions-list" component={ViewQuestionsStudents} /> 
                <Route path="/create-placement-test" component={CreatePlacementTest} /> 
                <Route path="/placement-question-details" component={PlacementQuestionDetails} /> 
                <Route path="/course-planning-content" component={CoursePlanningContent}/>
                <Route path="/course-planning-content-test" component={CourseContentForTest}/>
                <Route path="/course-planning-content-detatails" component={CoursePlanningContentDetails}/>
                <Route path="/blog-list" component={Blog} />
                <Route path="/blogs" component={BlogList} />
                <Route path="/current-blog-view" component={CurrentBlogView} />
                <Route path="/edit-current-blog" component={EditBlog} />
                <Route path="/videochat" component={VideoChat} />
                <Route path="/course-content-text-qa" component={CourseContentAdultTextQA} />
                <Route path="/course-content-text-mcq" component={CourseContentAdultMCQ} />
                <Route path="/course-content-text-blanks" component={CourseContentAdultBlanks} />
                <Route path="/course-content-text-pronunciation" component={Pronunciation} />
                <Route path="/course-content-text-qa-test" component={CourseContentAdultTextForTest} />
                <Route path="/course-content-text-mcq-test" component={CourseContentAdultMCQForTest} />
                <Route path="/course-content-text-blanks-test" component={CourseContentAdultBlanksForTest} />
                <Route path="/course-content-text-pronunciation-test" component={PronunciationForTest} />
                <Route path="/course-content-file-upload" component={filesUploadComponent} />
                <Route path="/view-question-type-qa-edit" component={EditContentQA} />
                <Route path="/view-question-answer-type-mcq-edit" component={EditContentMCQ} />
                <Route path="/view-question-answer-type-blanks-edit" component={EditContentBlanks} />
                <Route path="/view-question-answer-type-pronunciation-edit" component={EditContentPronunciation} />
                <Route path="/content-list" component={ViewContentList} />
                <Route path="/white-board" component={Container} />
                <Route path="/audio-record" component={AudioVideoRecorder} />
                <Route path="/teacher/list-of-classes" component={ListOfClasses} />
                <Route path="/Grade-1-content" component={Grade1Content} />
                <Route path="/Grade-2-content" component={Grade2Content} />
                <Route path="/Grade-3-content" component={Grade3Content} />
                <Route path="/Grade-4-content" component={Grade4Content} />
                <Route path="/Grade-5-content" component={Grade5Content} />
                <Route path="/Grade-6-content" component={Grade6Content} />
                <Route path="/Grade-7-content" component={Grade7Content} />
                <Route path="/Grade-8-content" component={Grade8Content} />
                <Route path="/Grade-9-content" component={Grade9Content} />
                <Route path="/Grade-10-content" component={Grade10Content} />
                <Route path="/Grade-11-content" component={Grade11Content} />
                <Route path="/Grade-12-content" component={Grade12Content} />
                <Route path="/list-of-classes-test" component={ListOfClassesForTest} />
                <Route path="/Grade-1-content-test" component={Grade1ContentTest} />
                <Route path="/Grade-2-content-test" component={Grade2ContentTest} />
                <Route path="/Grade-3-content-test" component={Grade3ContentTest} />
                <Route path="/Grade-4-content-test" component={Grade4ContentTest} />
                <Route path="/Grade-5-content-test" component={Grade5ContentTest} />
                <Route path="/Grade-6-content-test" component={Grade6ContentTest} />
                <Route path="/Grade-7-content-test" component={Grade7ContentTest} />
                <Route path="/Grade-8-content-test" component={Grade8ContentTest} />
                <Route path="/Grade-9-content-test" component={Grade9ContentTest} />
                <Route path="/Grade-10-content-test" component={Grade10ContentTest} />
                <Route path="/Grade-11-content-test" component={Grade11ContentTest} />
                <Route path="/Grade-12-content-test" component={Grade12ContentTest} />
                <Route path="/results-category" component={ResultsCategory} />
                <Route path="/list-of-classes-subject-results" component={ListOfClassesForResults} />
                <Route path="/Grade-1-content-results" component={Grade1ContentForResultsForSubjects} />
                <Route path="/Grade-2-content-results" component={Grade2ContentForResultsForSubjects} />
                <Route path="/Grade-3-content-results" component={Grade3ContentForResultsForSubjects} />
                <Route path="/Grade-4-content-results" component={Grade4ContentForResultsForSubjects} />
                <Route path="/Grade-5-content-results" component={Grade5ContentForResultsForSubjects} />
                <Route path="/Grade-6-content-results" component={Grade6ContentForResultsForSubjects} />
                <Route path="/Grade-7-content-results" component={Grade7ContentForResultsForSubjects} />
                <Route path="/Grade-8-content-results" component={Grade8ContentForResultsForSubjects} />
                <Route path="/Grade-9-content-results" component={Grade9ContentForResultsForSubjects} />
                <Route path="/Grade-10-content-results" component={Grade10ContentForResultsForSubjects} />
                <Route path="/Grade-11-content-results" component={Grade11ContentForResultsForSubjects} />
                <Route path="/Grade-12-content-results" component={Grade12ContentForResultsForSubjects} />
                <Route path="/Grade-1-content-results-answers" component={Grade1ContentAnswers} />
                <Route path="/Grade-2-content-results-answers" component={Grade2ContentAnswers} />
                <Route path="/Grade-3-content-results-answers" component={Grade3ContentAnswers} />
                <Route path="/Grade-4-content-results-answers" component={Grade4ContentAnswers} />
                <Route path="/Grade-5-content-results-answers" component={Grade5ContentAnswers} />
                <Route path="/Grade-6-content-results-answers" component={Grade6ContentAnswers} />
                <Route path="/Grade-7-content-results-answers" component={Grade7ContentAnswers} />
                <Route path="/Grade-8-content-results-answers" component={Grade8ContentAnswers} />
                <Route path="/Grade-9-content-results-answers" component={Grade9ContentAnswers} />
                <Route path="/Grade-10-content-results-answers" component={Grade10ContentAnswers} />
                <Route path="/Grade-11-content-results-answers" component={Grade11ContentAnswers} />
                <Route path="/Grade-12-content-results-answers" component={Grade12ContentAnswers} />
                <Route path="/list-of-classes-test-results" component={ListOfClassesForResultsOfTests} />
                <Route path="/Grade-1-content-test-results" component={Grade1ContentTestForResultsForTestForTeacher} />
                <Route path="/Grade-2-content-test-results" component={Grade2ContentTestForResultsForTestForTeacher} />
                <Route path="/Grade-3-content-test-results" component={Grade3ContentTestForResultsForTestForTeacher} />
                <Route path="/Grade-4-content-test-results" component={Grade4ContentTestForResultsForTestForTeacher} />
                <Route path="/Grade-5-content-test-results" component={Grade5ContentTestForResultsForTestForTeacher} />
                <Route path="/Grade-6-content-test-results" component={Grade6ContentTestForResultsForTestForTeacher} />
                <Route path="/Grade-7-content-test-results" component={Grade7ContentTestForResultsForTestForTeacher} />
                <Route path="/Grade-8-content-test-results" component={Grade8ContentTestForResultsForTestForTeacher} />
                <Route path="/Grade-9-content-test-results" component={Grade9ContentTestForResultsForTestForTeacher} />
                <Route path="/Grade-10-content-test-results" component={Grade10ContentTestForResultsForTestForTeacher} />
                <Route path="/Grade-11-content-test-results" component={Grade11ContentTestForResultsForTestForTeacher} />
                <Route path="/Grade-12-content-test-results" component={Grade12ContentTestForResultsForTestForTeacher} />
                <Route path="/view-result-qa-answer-type" component={ViewResultQAAnswerType} />
                <Route path="/view-answers-subject" component={ViewAnswers} />
                <Route path="/view-answers-mcq" component={ViewAnswersMCQ} />
                <Route path="/view-answers-blanks" component={ViewAnswersBlanks} />
                <Route path="/view-answers-qa" component={ViewAnswersQA} />
                <Route path="/view-answers-handwriting" component={ViewAnswersHandWriting} />
                <Route path="/view-answers-pronunciation" component={ViewAnswersPronunciation} />
                <Route path="/keyboard" component={KeyboardUrdu} />
                <Route path="/notification-list" component={NotificationList} />
                <Route path="/notification-answer" component={AnswerQuery} />
                <Route path="/fileupload-new" component={FileUploadNew} />
              </Switch>
          </div>
        </div>
      </div> 
    </Router>

  );
}

export default App;