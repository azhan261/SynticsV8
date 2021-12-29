import './App.css';
import Home from './Views/Home';
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
import Notifications from './Views/Notifications/Notifications';
import CreateNotifications from './Views/Notifications/CreateNotification';
import NotificationList from './Views/Notifications/NotificationList';
import EditNotification from './Views/Notifications/EditNotification';
import CurrentNotificationView from './Views/Notifications/CurrentNotificationView';
import ViewQueryResponse from './Views/Notifications/ViewQueryResponse';
import CreatePlacementTest from './Views/CreatePlacementTest';
import PlacementQuestionDetails from './Views/PlacementQuestionDetails';
import CoursePlanningContent from './Views/CoursePlanningContent';
import Testimonials from './Views/Testimonials/Testimonials';
import TestimonialList from './Views/Testimonials/TestimonialList';
import EditTestimonial from './Views/Testimonials/EditTestimonial';
import CurrentTestimonialView from './Views/Testimonials/CurrentTestimonialView';
import AudioToText from './Views/Plugins/AudioToText';
import CourseContent from "./Views/CourseContent";
import ListOfSubjects from './Views/Student Section/ListOfSubjects';
import QA from "./Courses Content/SchoolsTraining/AdultTraining/Answer Types/QA";
import Handwriting from './Courses Content/SchoolsTraining/AdultTraining/Answer Types/Handwriting';
import MCQ from './Courses Content/SchoolsTraining/AdultTraining/Answer Types/MCQ';
import FillInTheBlanks from './Courses Content/SchoolsTraining/AdultTraining/Answer Types/FillInTheBlanks';
import Pronunciation from "./Courses Content/SchoolsTraining/AdultTraining/Answer Types/Pronunciation"
import QAForTests from './Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/QAForTests';
import HandwritingForTests from './Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/HandwritingForTests';
import MCQForTests from './Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/MCQForTests';
import FillInTheBlankForTests from './Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/FillInTheBlankForTests';
import PronunciationForTests from './Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/PronunciationForTests';
import Answers from './Views/Student Section/Answers';
import AnswersMCQ from './Views/Student Section/AnswersMCQ';
import AnswersFillInTheBlank from './Views/Student Section/AnswersFillInTheBlank';
import AnswerPronunciation from './Views/Student Section/AnswerPronunciation';
import AnswerVideo from './Views/Student Section/AnswerVideo';
import Results from './Views/Student Section/Results';
import FileUploadTesting from './Courses Content/SchoolsTraining/AdultTraining/Answer Types/File Uploads/FileUploadTesting';
import Grade1Content from './Views/Student Section/Classes And Subjects/Grade1Content';
import Grade2Content from './Views/Student Section/Classes And Subjects/Grade2Content';
import Grade3Content from './Views/Student Section/Classes And Subjects/Grade3Content';
import Grade4Content from './Views/Student Section/Classes And Subjects/Grade4Content';
import Grade5Content from './Views/Student Section/Classes And Subjects/Grade5Content';
import Grade6Content from './Views/Student Section/Classes And Subjects/Grade6Content';
import Grade7Content from './Views/Student Section/Classes And Subjects/Grade7Content';
import Grade8Content from './Views/Student Section/Classes And Subjects/Grade8Content';
import Grade9Content from './Views/Student Section/Classes And Subjects/Grade9Content';
import Grade10Content from './Views/Student Section/Classes And Subjects/Grade11Content';
import Grade11Content from './Views/Student Section/Classes And Subjects/Grade11Content';
import Grade12Content from './Views/Student Section/Classes And Subjects/Grade12Content';
import Grade1ContentTest from './Views/Student Section/Classes And Subjects For Tests/Grade1ContentTest';
import Grade2ContentTest from './Views/Student Section/Classes And Subjects For Tests/Grade2ContentTest';
import Grade3ContentTest from './Views/Student Section/Classes And Subjects For Tests/Grade3Content';
import Grade4ContentTest from './Views/Student Section/Classes And Subjects For Tests/Grade4Content';
import Grade5ContentTest from './Views/Student Section/Classes And Subjects For Tests/Grade5Content';
import Grade6ContentTest from './Views/Student Section/Classes And Subjects For Tests/Grade6Content';
import Grade7ContentTest from './Views/Student Section/Classes And Subjects For Tests/Grade7Content';
import Grade8ContentTest from './Views/Student Section/Classes And Subjects For Tests/Grade8Content';
import Grade9ContentTest from './Views/Student Section/Classes And Subjects For Tests/Grade9Content';
import Grade10ContentTest from './Views/Student Section/Classes And Subjects For Tests/Grade10Content';
import Grade11ContentTest from './Views/Student Section/Classes And Subjects For Tests/Grade11Content';
import Grade12ContentTest from './Views/Student Section/Classes And Subjects For Tests/Grade12Content';
import ListOfSubjectsForTest from './Views/Student Section/Classes And Subjects For Tests/ListOfClassesForTest';




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
              <Route exact path="/" component={Home} /> 
              <Route path="/contact" component={ContactDetails} /> 
              <Route path="/personal-info" component={PersonalInfoData} /> 
              <Route path="/placement-results" component={PlacementTestResults} /> 
              <Route path="/registration-data" component={RegistrationData} /> 
              <Route path="/teachers-data" component={TeacherData} /> 
              <Route path="/notifications" component={Notifications} /> 
              <Route path="/create-notifications" component={CreateNotifications} /> 
              <Route path="/notification-list" component={NotificationList} /> 
              <Route path="/notification-response" component={ViewQueryResponse} /> 
              <Route path="/invoice" component={ViewInvoice} /> 
              <Route path="/questions-list" component={ViewQuestionsStudents} /> 
              <Route path="/create-placement-test" component={CreatePlacementTest} /> 
              <Route path="/placement-question-details" component={PlacementQuestionDetails} /> 
              <Route path="/course-planning-question-details" component={CoursePlanningContent} /> 
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/testimonial-list" component={TestimonialList} />
              <Route path="/edit-current-testimonial" component={EditTestimonial} />
              <Route path="/current-testimonial-view" component={CurrentTestimonialView} />
              <Route path="/audiototext" component={AudioToText} />
              <Route path="/course-content" component={CourseContent} />
              <Route path="/list-of-subjects" component={ListOfSubjects} />
              <Route path="/list-of-subjects-for-test" component={ListOfSubjectsForTest} />
              <Route path="/view-question-type-qa" component={QA} />
              <Route path="/view-question-type-handwriting" component={Handwriting} />
              <Route path="/view-question-type-mcq" component={MCQ} />
              <Route path="/view-question-type-blanks" component={FillInTheBlanks} />
              <Route path="/view-question-type-pronunciation" component={Pronunciation} />
              <Route path="/view-question-type-video" component={AnswerVideo} />
              <Route path="/view-question-type-qa-test" component={QAForTests} />
              <Route path="/view-question-type-handwriting-test" component={HandwritingForTests} />
              <Route path="/view-question-type-mcq-test" component={MCQForTests} />
              <Route path="/view-question-type-blanks-test" component={FillInTheBlankForTests} />
              <Route path="/view-question-type-pronunciation-test" component={PronunciationForTests} />
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
              <Route path="/answer-list" component={Results} />
              <Route path="/view-current-answer" component={Answers} />
              <Route path="/view-current-answer-mcq" component={AnswersMCQ} />
              <Route path="/view-current-answer-blanks" component={AnswersFillInTheBlank} />
              <Route path="/view-current-answer-pronunciation" component={AnswerPronunciation} />
              <Route path="/testing" component={FileUploadTesting} />
            </Switch>
          </div>
        </div>
      </div>  
    </Router>
  );
}

export default App;