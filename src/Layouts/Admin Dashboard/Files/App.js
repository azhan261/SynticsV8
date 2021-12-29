import './App.css';
import Sidebar from './Views/Sidebar';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom' 
import Contacts from './Contacts/Contacts';
import ViewContactDetails from './Contacts/ViewContactDetails';
import AnswerQuery from './Contacts/AnswerQuery';
import PersonalInfoData from './Views/PersonalInfoData'
import PlacementTestResults from './Views/PlacementTestResults'
import RegistrationData from './Views/RegistrationsData'
import TeacherData from './Views/TeacherData'
import ViewQuestionsStudents from './Views/ViewQuestionsStudents'
import ViewInvoice from './Views/ViewInvoice'
import Layoutnew from './Layout/Layoutnew';
import CreatePlacementTest from './Views/CreatePlacementTest';
import PlacementQuestionDetails from './Views/PlacementQuestionDetails';
import Blogs from './Views/Blogs';
import SectionForMaleStudent from './Sections for Courses/Courses/SchoolsTraining/AdultTraining/Sections/SectionForMaleStudent';
import Classes from './Views/Classes';
import AdmissionTestQA from './Admission Test Content Section/Content Section/Question Creation/Text/AdmissionTestQA';
import AdmissionTestBlanks from './Admission Test Content Section/Content Section/Question Creation/Text/AdmissionTestBlanks';
import AdmissionTestPronunciation from './Admission Test Content Section/Content Section/Question Creation/Text/AdmissionTestPronunciation';
import AdmissionTestMCQ from './Admission Test Content Section/Content Section/Question Creation/Text/AdmissionTestMCQ';

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
           <Route path="/contacts" component={Contacts} /> 
           <Route path="/view-contact-details" component={ViewContactDetails} /> 
           <Route path="/answer-query" component={AnswerQuery} /> 
           <Route path="/personal-info" component={PersonalInfoData} /> 
           <Route path="/placement-results" component={PlacementTestResults} /> 
           <Route path="/registration-data" component={RegistrationData} /> 
           <Route path="/teachers-data" component={TeacherData} /> 
           <Route path="/invoice" component={ViewInvoice} /> 
           <Route path="/questions-list" component={ViewQuestionsStudents} /> 
           <Route path="/create-placement-test" component={CreatePlacementTest} /> 
           <Route path="/placement-question-details" component={PlacementQuestionDetails} /> 
           <Route path="/blogs" component={Blogs} />
           <Route path="/abc" component={SectionForMaleStudent} />
           <Route path="/classes" component={Classes} />
           </Switch>
          </div>
        </div>
      </div>   
       </Router>
  );
}

export default App;