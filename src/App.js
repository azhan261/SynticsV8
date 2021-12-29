
//------ Layout Files -----------//

import MainLayout from './Layouts/Main Theme/MainLayout';
import AdminDashboardLayout from './Layouts/Admin Dashboard/AdminDashboardLayout';
import TeacherDashboardLayout from './Layouts/Teacher Dashboard/TeacherDashboardLayout';
import StudentDashboardLayout from './Layouts/Student Dashboard/StudentDashboardLayout';
import ProjectManagerDashboard from './Layouts/Project Manager Dashboard/ProjectManagerDashboard';


// ---------------Main Files ------------//
import logo from './logo.svg';
//import './App.css';
import Home from './Views/Home';
import AppFeatures from './Views/AppFeatures';
import Details from './Views/Details';
import Gallery from './Views/Gallery';
import Pricing from './Views//Pricing';
import Testimonial from './Views/Testimonial';
import FAQ from './Views/FAQ';
import Contact from './Views/Contact';
import Registration from './Views/Registration';
import TeachersRegistration from './Views/TeachersRegistration';
import LoginAuthFunctional from './Auth/components/LoginAuthFunctional';
import LoginAuthFunctionalTeacher from './Auth/components/LoginAuthFunctionalTeacher';
import LoginAuthFunctionalAdmin from './Auth/components/LoginAuthFunctionalAdmin';
import {BrowserRouter as Router, Switch, Link, Route, Redirect} from 'react-router-dom' 
import CheckingNavBar from './Views/CheckingNavBar';
import ResetPasswordAuth from './Auth/components/ResetPasswordAuth';
import ResettPasswordRequestAuth from './Auth/components/ResetPasswordRequestAuth';
import Apply from "./Views/Apply"
import Seminar from './Views/Seminar';

// ---------- Admin Dashboard Files ------//

//import './App.css';

//import SidebarForAdmin from './Layouts/Admin Dashboard/Files/Views/Sidebar';
import ContactsForAdmin from './Layouts/Admin Dashboard/Files/Contacts/Contacts';
import ViewContactDetailsForAdmin from './Layouts/Admin Dashboard/Files/Contacts/ViewContactDetails';
import AnswerQueryForAdmin from './Layouts/Admin Dashboard/Files/Contacts/AnswerQuery';
import PersonalInfoDataForAdmin from './Layouts/Admin Dashboard/Files/Views/PersonalInfoData'
import PlacementTestResultsForAdmin from './Layouts/Admin Dashboard/Files/Views/PlacementTestResults'
import RegistrationDataForAdmin from './Layouts/Admin Dashboard/Files/Views/RegistrationsData'
import CoursesCategoryForAdminForTeacher from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/CoursesCategoryForAdminForTeacher';
import GenderCategoryForAdminForTeacher from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/GenderCategoryForAdminForTeacher';
import TeacherDataForAdmin from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/TeacherDataForAdmin';
import ViewTeacherInfo from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/ViewTeacherInfo'
import ActivityCategoryForAdminForTeacher from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/ActivityCategoryForAdminForTeacher';
import TeacherActivity from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/TeacherActivity'
import TeacherActivityForTest from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/TeacherActivityForTest'
import TeacherActivityForAssignment from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/TeacherActivityForAssignment'


import ViewCurrentContentAttachmentsForAdminForTeacher from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/View Content/ViewCurrentContentAttachmentsForAdminForTeacher'
import ViewCurrentContentForAdminForTeacher from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/View Content/ViewCurrentContentForAdminForTeacher'
import ViewCurrentTestForAdminForTeacher from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/ViewTest/ViewCurrentTestForAdminForTeacher';
import ViewCurrentTestAttachmentsForAdminForTeacher from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/ViewTest/ViewCurrentTestAttachmentsForAdminForTeacher';
import ViewAnswerListForAdmin from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/View Answer Content/ViewAnswerListForAdmin';
import ViewCurrentAnswerAdminStandard from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/View Answer Content/ViewCurrentAnswerAdminStandard';
import ViewCurrentAnswerAdminAttachment from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/View Answer Content/ViewCurrentAnswerAdminAttachment';
import ViewAnswerListForTestForAdmin from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/View Answer Test/ViewAnswerListForTestForAdmin';
import ViewCurrentAnswerAdminStandardForTest from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/View Answer Test/ViewCurrentAnswerAdminStandardForTest';
import ViewCurrentAnswerAdminAttachmentForTest from './Layouts/Admin Dashboard/Files/Teachers/Teacher Info/View Answer Test/ViewCurrentAnswerAdminAttachmentForTest';

import ProjectListForAdmin from './Layouts/Admin Dashboard/Files/Projects/ProjectList';
import CreateProjectForAdmin from './Layouts/Admin Dashboard/Files/Projects/CreateProject';
import EditProjectForAdmin from './Layouts/Admin Dashboard/Files/Projects/EditProject';
import ViewProjectDetailForAdmin from './Layouts/Admin Dashboard/Files/Projects/ViewProjectDetailForAdmin';

import StatsCategory from './Layouts/Admin Dashboard/Files/Charts/Classes and Gender/StatsCategory';
import StatsOfClassVsGender from './Layouts/Admin Dashboard/Files/Charts/Classes and Gender/StatsOfClassVsGender';
import StatsOfProvincesVsGendersVsClasses from './Layouts/Admin Dashboard/Files/Charts/Classes and Gender/StatsOfProvincesVsGendersVsClasses';

import GradeCategoryForAdminForStudent from './Layouts/Admin Dashboard/Files/Students/Student Info/GradeCategoryForAdminForStudent';
import GenderCategoryForAdminForStudent from './Layouts/Admin Dashboard/Files/Students/Student Info/GenderCategoryForAdminForStudent';
import StudentDataForAdmin from './Layouts/Admin Dashboard/Files/Students/Student Info/StudentDataForAdmin';
import ViewStudentInfo from './Layouts/Admin Dashboard/Files/Students/Student Info/ViewStudentInfo';

import ViewQuestionsStudentsForAdmin from './Layouts/Admin Dashboard/Files/Views/ViewQuestionsStudents'
import CreatePlacementTestForAdmin from './Layouts/Admin Dashboard/Files/Views/CreatePlacementTest';
import PlacementQuestionDetailsForAdmin from './Layouts/Admin Dashboard/Files/Views/PlacementQuestionDetails';
import BlogsForAdmin from './Layouts/Admin Dashboard/Files/Views/Blogs';
import ClassesForAdmin from './Layouts/Admin Dashboard/Files/Views/Classes';
import AdmissionTestQAForAdmin from './Layouts/Admin Dashboard/Files/Admission Test Content Section/Content Section/Question Creation/Text/AdmissionTestQA';
import AdmissionTestBlanksForAdmin from './Layouts/Admin Dashboard/Files/Admission Test Content Section/Content Section/Question Creation/Text/AdmissionTestBlanks';
import AdmissionTestMCQForAdmin from './Layouts/Admin Dashboard/Files/Admission Test Content Section/Content Section/Question Creation/Text/AdmissionTestMCQ';
import LoginChatForAdmin from './Layouts/Admin Dashboard/Files/Chat For Admin/LoginChatForAdmin';
import ChatWindowForAdmin from './Layouts/Admin Dashboard/Files/Chat For Admin/ChatWindowForAdmin';

// -------- Manager Dashboard Files ------------//


import ProjectManagerHome from './Layouts/Project Manager Dashboard/Files/Views/ProjectManagerHome';

import ListOfProjectsForManager from './Layouts/Project Manager Dashboard/Files/Views/Project Section/ListOfProjectsForManager';
import ViewProjectInfo from './Layouts/Project Manager Dashboard/Files/Views/Project Section/ViewProjectInfo';
import ListOfGroupOfStudentsForManager from './Layouts/Project Manager Dashboard/Files/Views/Project Section/ListOfGroupOfStudentsForManager';

import ListOfTeachersForManager from './Layouts/Project Manager Dashboard/Files/Views/Teacher Section/ListOfTeachersForManager';

import GenderCategoryForManagerForStudent from './Layouts/Project Manager Dashboard/Files/Views/Student Section/Student Info/GenderCategoryForManagerForStudent';
import StudentDataForManager from './Layouts/Project Manager Dashboard/Files/Views/Student Section/Student Info/StudentDataForManager';
import ViewStudentInfoManager from './Layouts/Project Manager Dashboard/Files/Views/Student Section/Student Info/ViewStudentInfoManager';

import ListOfQueriesForManager from './Layouts/Project Manager Dashboard/Files/Views/Queries From Students/ListOfQueriesForManager';
import AnswerQueryForManager from './Layouts/Project Manager Dashboard/Files/Views/Queries From Students/AnswerQuery';

import ProgressReportOfStudentGroups from './Layouts/Project Manager Dashboard/Files/Views/Progress Report/ProgressReportOfStudentGroups';
import LoginChatForManager from './Layouts/Project Manager Dashboard/Files/Views/Chat For Manager/LoginChatForManager';
import ChatWindowForManager from './Layouts/Project Manager Dashboard/Files/Views/Chat For Manager/ChatWindowForManager';

// -------- Teacher Dashboard Files ------------//

//import "./App.css"
import TeacherDashboard from './Layouts/Teacher Dashboard/Files/Views/TeacherDashboard';
import Sidebar from './Layouts/Teacher Dashboard/Files/Views/Sidebar';
import SidebarForTeacher from './Layouts/Teacher Dashboard/Files/Views/Sidebar';
import ContactDetailsForTeacher from './Layouts/Teacher Dashboard/Files/Views/ContactDetails'
import PersonalInfoDataForTeacher from './Layouts/Teacher Dashboard/Files/Views/PersonalInfoData'
import PlacementTestResultsForTeacher from './Layouts/Teacher Dashboard/Files/Views/PlacementTestResults'
import RegistrationDataForTeacher from './Layouts/Teacher Dashboard/Files/Views/RegistrationsData'
import TeacherDataForTeacher from './Layouts/Teacher Dashboard/Files/Views/TeacherData'
import ViewQuestionsStudentsForTeacher from './Layouts/Teacher Dashboard/Files/Views/ViewQuestionsStudents'
import CreatePlacementTestForTeacher from './Layouts/Teacher Dashboard/Files/Views/CreatePlacementTest';
import PlacementQuestionDetailsForTeacher from './Layouts/Teacher Dashboard/Files/Views/PlacementQuestionDetails';
import CoursePlanningContentForTeacher from './Layouts/Teacher Dashboard/Files/Views/CoursePlanningContent';
import CourseContentForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/CourseContentForTest";

import CreateAssignment from './Layouts/Teacher Dashboard/Files/Views/Content Section/Assignments/CreateAssignment';
import ListOfAssignmentsForTeacher from './Layouts/Teacher Dashboard/Files/Views/Content Section/Assignments/ListOfAssignmentsForTeacher';

import CoursePlanningContentDetailsForTeacher from './Layouts/Teacher Dashboard/Files/Views/CoursePlanningContentDetails';
import BlogForTeacher from './Layouts/Teacher Dashboard/Files/Views/Blogs/Blog';
import BlogListForTeacher from './Layouts/Teacher Dashboard/Files/Views/Blogs/BlogList';
import CurrentBlogViewForTeacher from './Layouts/Teacher Dashboard/Files/Views/Blogs/CurrentBlogView';
import EditBlogForTeacher from './Layouts/Teacher Dashboard/Files/Views/Blogs/EditBlog';
import VideoChatForTeacher from './Layouts/Teacher Dashboard/Files/Views/Plugins/VideoChat';
import CourseContentAdultTextQAForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultTextQA';

import CourseContentAdultMCQForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultMCQ';
import CourseContentAdultBlanksForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultBlanks';
import CourseContentAudioForTeachers from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultAudio';
import CourseContentAudioForTestForTeachers from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAudioForTestForTeachers';
import CourseContentVideoForTeachers from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentVideoForTeachers';
import CourseContentVideoForTeachersForTest from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentVideoForTeachersForTest';
import CourseContentAdultHandwritingForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultHandwriting';
import CourseContentAdultBlanksForTestForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAdultBlanksForTestForTeacher';
import CourseContentAdultMCQForTestForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAdultMCQForTestForTeacher';
import CourseContentAdultTextForTestForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAdultTextForTestForTeacher';
import CourseContentFileUploadForTest from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentFileUploadForTest';
import CourseContentFileUploadForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentFileUpload';
import CourseContentAdultHandwritingForTestForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAdultHandwritingForTestForTeacher';
import CourseContentAdultDigitalUrdu from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultDigitalUrdu';
import CourseContentAdultDigitalUrduForTest from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAdultDigitalUrduForTest';
import CourseContentDrawingEditorComponent from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/Drawing Content/CourseContentAdultDrawingEditorComponent';
import CourseContentDrawingEditorComponentForTest from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/Drawing Content Test/CourseContentDrawingEditorComponentForTest';
import CoursePlanningContentDetails from './Layouts/Teacher Dashboard/Files/Views/CoursePlanningContentDetails';

import EditContentQAForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentQAForTeacher';
import EditContentQAForTeacherAssignment from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentQAForTeacherAssignment';

import EditContentMCQForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentMCQForTeacher'
import EditContentMCQForTeacherAssignment from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentMCQForTeacherAssignment';

import EditContentBlanksForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentBlanksForTeacher';
import EditContentBlanksForTeacherAssignment from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentBlanksForTeacherAssignment';

import EditContentAudioForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentAudioForTeacher';
import EditContentAudioForTeacherAssignment from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentAudioForTeacherAssignment';

import EditContentVideoForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentVideoForTeacher';
import EditContentVideoForTeacherAssignment from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentVideoForTeacherAssignment';

import EditContentHandwritingForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentHandwritingForTeacher';
import EditContentDigitalUrduForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentDigitalUrduForTeacher';
import EditContentAdultDrawingEditorComponent from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/Drawing Content For Edit/EditContentAdultDrawingEditorComponent';

import EditContentFileUploadForTeacherAssignment from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentFileUploadForTeacherAssignment';
import EditContentFileUploadForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentFileUploadForTeacher';
import EditContentFileUploadForTeacherForTest from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentFileUploadForTeacherForTest';

import EditContentMCQForTeacherForTest from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentMCQForTeacherForTest'
import EditContentBlanksForTeacherForTest from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentBlanksForTeacherForTest';
import EditContentAudioForTeacherForTest from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentAudioForTeacherForTest';
import EditContentVideoForTeacherForTest from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentVideoForTeacherForTest';
import EditContentHandwritingForTeacherForTest from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentHandwritingForTeacherForTest';
import EditContentDigitalUrduForTeacherForTest from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentDigitalUrduForTeacherForTest';
import EditContentAdultDrawingEditorComponentForTest from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/Drawing Content For Edit/EditContentAdultDrawingEditorComponentForTest';
import EditContentQAForTeacherForTest from './Layouts/Teacher Dashboard/Files/Courses Content/Edit Questions/EditContentQAForTeacherForTest';


import ViewContentListForTeacher from './Layouts/Teacher Dashboard/Files/Views/ViewContentList';
import ContainerForTeacher from './Layouts/Teacher Dashboard/Files/Views/Plugins/White Board/components/container/Container';
import AudioVideoRecorderForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Plugins/Audio Recording/AudioVideoRecorder";
import ListOfClassesForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/ListOfClasses";
import Grade1ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade1Content";
import Grade2ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade2Content";
import Grade3ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade3Content";
import Grade4ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade4Content";
import Grade5ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade5Content";
import Grade6ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade6Content";
import Grade7ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade7Content";
import Grade8ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade8Content";
import Grade9ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade9Content";
import Grade10ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade10Content";
import Grade11ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade11Content";
import Grade12ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade12Content";
import ListOfClassesForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/ListOfClassesForTest";
import Grade1ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade1ContentTest";
import Grade2ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade2Content";
import Grade3ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade3Content";
import Grade4ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade4Content";
import Grade5ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade5Content";
import Grade6ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade6Content";
import Grade7ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade7Content";
import Grade8ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade8Content";
import Grade9ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade9Content";
import Grade10ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade10Content";
import Grade11ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade11Content";
import Grade12ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade12Content";
import ResultsCategoryForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/ResultCategory";
import ViewAnswersForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/ViewAnswers";
import ViewCurrentAnswerForTeacher from './Layouts/Teacher Dashboard/Files/Views/Content Section/ViewCurrentAnswer';
import ViewCurrentAnswerForTeacherAttachments from './Layouts/Teacher Dashboard/Files/Views/Content Section/ViewCurrentAnswerAttachment';
import ViewCurrentAnswerVideoAudio from './Layouts/Teacher Dashboard/Files/Views/Content Section/ViewCurrentAnswerVideoAudio';
import ViewCurrentAnswerForTeacherForTest from './Layouts/Teacher Dashboard/Files/Views/Content Section/For Tests/ViewCurrentAnswerForTeacherForTest';
import ViewCurrentAnswerForTeacherAttachmentsForTest from './Layouts/Teacher Dashboard/Files/Views/Content Section/For Tests/ViewCurrentAnswerForTeacherAttachmentsForTest';
import ViewCurrentAnswerVideoAudioForTest from './Layouts/Teacher Dashboard/Files/Views/Content Section/For Tests/ViewCurrentAnswerVideoAudioForTest';
import ListOfClassesForResultsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/ListOfClassesForResults";
import Grade1ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 1 Content and Answers/Grade1Content";
import Grade2ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 2 Content and Answers/Grade2Content";
import Grade3ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 3 Content and Answers/Grade3Content";
import Grade4ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 4 Content and Answers/Grade4Content";
import Grade5ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 5 Content and Answers/Grade5Content";
import Grade6ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 6 Content and Answers/Grade6Content";
import Grade7ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 7 Content and Answers/Grade7Content";
import Grade8ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 8 Content and Answers/Grade8Content";
import Grade9ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 9 Content and Answers/Grade9Content";
import Grade10ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 10 Content and Answers/Grade10Content";
import Grade11ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 11 Content and Answers/Grade11Content";
import Grade12ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 12 Content and Answers/Grade12Content";
import Grade1ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 1 Content and Answers/Grade1ContentAnswers";
import Grade2ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 2 Content and Answers/Grade2ContentAnswers";
import Grade3ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 3 Content and Answers/Grade3ContentAnswers";
import Grade4ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 4 Content and Answers/Grade4ContentAnswers";
import Grade5ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 5 Content and Answers/Grade5ContentAnswers";
import Grade6ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 6 Content and Answers/Grade6ContentAnswers";
import Grade7ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 7 Content and Answers/Grade7ContentAnswers";
import Grade8ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 8 Content and Answers/Grade8ContentAnswers";
import Grade9ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 9 Content and Answers/Grade9ContentAnswers";
import Grade10ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 10 Content and Answers/Grade10ContentAnswers";
import Grade11ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 11 Content and Answers/Grade11ContentAnswers";
import Grade12ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 12 Content and Answers/Grade12ContentAnswers";
import ListOfClassesForResultsOfTests from "./Layouts/Teacher Dashboard/Files/Views/Results/ListOfClassesForResultsOfTests";
import Grade1ContentTestForResultsForTestForTeacher from './Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade1ContentTest';
import Grade2ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade3ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade4ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade5ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade6ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade7ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade8ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade9ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade10ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade11ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade12ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import ViewCurrentContentForTeacher from './Layouts/Teacher Dashboard/Files/Views/Content Section/ViewCurrentContent';
import ViewCurrentContentAudioForTeacher from './Layouts/Teacher Dashboard/Files/Views/Content Section/ViewCurrentContentAudioForTeacher';
import ViewCurrentContentDrawingForTeacher from './Layouts/Teacher Dashboard/Files/Views/Content Section/ViewCurrentContentDrawingForTeacher';
import ViewCurrentContentVideoForTeacher from './Layouts/Teacher Dashboard/Files/Views/Content Section/ViewCurrentContentVideoForTeacher';
import ViewCurrentAssignmentContentForTeacher from './Layouts/Teacher Dashboard/Files/Views/Content Section/Assignments/ViewCurrentAssignmentContentForTeacher';
import ViewCurrentContentForAssignmentNoAttachments from './Layouts/Teacher Dashboard/Files/Views/Content Section/Assignments/ViewCurrentContentForAssignmentNoAttachments';
import ViewCurrentAnswerContentAssignmentForTeacher from './Layouts/Teacher Dashboard/Files/Views/Content Section/Assignments/ViewCurrentAnswerContentAssignmentForTeacher';

import ViewCurrentContentForTeacherForTest from './Layouts/Teacher Dashboard/Files/Views/Content Section/For Tests/ViewCurrentContentForTeacherForTest';
import ViewCurrentContentAudioForTeacherForTest from './Layouts/Teacher Dashboard/Files/Views/Content Section/For Tests/ViewCurrentContentAudioForTeacherForTest';
import ViewCurrentContentDrawingForTeacherForTest from './Layouts/Teacher Dashboard/Files/Views/Content Section/For Tests/ViewCurrentContentDrawingForTeacherForTest';
import ViewCurrentContentVideoForTeacherForTest from './Layouts/Teacher Dashboard/Files/Views/Content Section/For Tests/ViewCurrentContentVideoForTeacherForTest';
import ViewCurrentContentFileUplaodForTeacher from './Layouts/Teacher Dashboard/Files/Views/Content Section/ViewCurrentContentFileUplaodForTeacher';
import ViewCurrentContentFileUplaodForTeacherForTest from './Layouts/Teacher Dashboard/Files/Views/Content Section/For Tests/ViewCurrentContentFileUplaodForTeacherForTest';

import ViewAnswersOfQuestionForTeachers from './Layouts/Teacher Dashboard/Files/Views/Content Section/ViewAnswersOfQuestionForTeachers';
import ViewAnswersOfQuestionForTeachersForTest from './Layouts/Teacher Dashboard/Files/Views/Content Section/For Tests/ViewAnswersOfQuestionForTeachersForTest';
import ViewAnswersOfQuestionForAssignmentsForTeachers from './Layouts/Teacher Dashboard/Files/Views/Content Section/Assignments/ViewAnswersOfQuestionForAssignmentsForTeachers';
import KeyboardUrduForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Plugins/Virtual Key Board/KeyboardUrdu";
import NotificationsCategoryForTeachers from './Layouts/Teacher Dashboard/Files/Views/Notifications/NotificationsCategoryForTeachers';
import NotificationListForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Notifications/NotificationList";
import AnswerQueryForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Notifications/AnswerQuery";
import FileUploadNewForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/File Upload/FileUploadNew';


import FlipBook from './Layouts/Teacher Dashboard/Files/Views/Plugins/Flip Book/FlipBook';
import ViewSubjectFlipBook from './Layouts/Student Dashboard/Files/Views/Plugins/Flip Book/List Of Subjects/ViewSubjectFlipBook';
import LiveClass from './Layouts/Teacher Dashboard/Files/Views/LiveClass';
import HomeVideoForTeacher from './Layouts/Teacher Dashboard/Files/Views/Plugins/Video Call/HomeVideoForTeacher';
import VideoForTeacher from './Layouts/Teacher Dashboard/Files/Views/Plugins/Video Call/VideoForTeacher';
import GradeCategoryForLinks from './Layouts/Teacher Dashboard/Files/Views/Plugins/Video Call/GradeCategoryForLinks';

import LoginChatForTeacher from './Layouts/Teacher Dashboard/Files/Views/Chat For Teacher/LoginChatForTeacher';
import ChatWindowForTeacher from './Layouts/Teacher Dashboard/Files/Views/Chat For Teacher/ChatWindowForTeacher'


import FaceRecognition from './Layouts/Teacher Dashboard/Files/Views/Plugins/FaceRecognition';
// ----------- Student Dashboard Files -----------//
//import './App.css';
import Perfomance from './Layouts/Student Dashboard/Files/Views/Performance/Perfomance';
import PerformanceForTest from './Layouts/Student Dashboard/Files/Views/Performance/PerformanceForTest';
import CategoryForPerfomance from './Layouts/Student Dashboard/Files/Views/Performance/CategoryForPerfomance';
import HomeForStudent from './Layouts/Student Dashboard/Files/Views/Home';
import StudentDashboard from './Layouts/Student Dashboard/Files/Views/StudentDashboard'
import SidebarForStudent from './Layouts/Student Dashboard/Files/Views/Sidebar';
import ContactDetailsForStudent from './Layouts/Student Dashboard/Files/Views/ContactDetails'
import PersonalInfoDataForStudent from './Layouts/Student Dashboard/Files/Views/PersonalInfoData'
import PlacementTestResultsForStudent from './Layouts/Student Dashboard/Files/Views/PlacementTestResults'
import RegistrationDataForStudent from './Layouts/Student Dashboard/Files/Views/RegistrationsData'
import TeacherDataForStudent from './Layouts/Student Dashboard/Files/Views/TeacherData'
import ViewQuestionsStudentsForStudent from './Layouts/Student Dashboard/Files/Views/ViewQuestionsStudents'
import ViewInvoiceForStudent from './Layouts/Student Dashboard/Files/Views/ViewInvoice'
import NotificationsCategoryForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/NotificationsCategoryForStudent';
import NotificationSubjectSelectionForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/NotificationSubjectSelectionForStudent';
import CreateNotificationsForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/CreateNotification';
import NotificationListForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/NotificationList';
import EditNotificationForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/EditNotification';
import CurrentNotificationViewForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/CurrentNotificationView';
import ViewQueryResponseForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/ViewQueryResponse';
import CreatePlacementTestForStudent from './Layouts/Student Dashboard/Files/Views/CreatePlacementTest';
import PlacementQuestionDetailsForStudent from './Layouts/Student Dashboard/Files/Views/PlacementQuestionDetails';
import CoursePlanningContentForStudent from './Layouts/Student Dashboard/Files/Views/CoursePlanningContent';
import TestimonialsForStudent from './Layouts/Student Dashboard/Files/Views/Testimonials/Testimonials';
import TestimonialListForStudent from './Layouts/Student Dashboard/Files/Views/Testimonials/TestimonialList';
import EditTestimonialForStudent from './Layouts/Student Dashboard/Files/Views/Testimonials/EditTestimonial';
import CurrentTestimonialViewForStudent from './Layouts/Student Dashboard/Files/Views/Testimonials/CurrentTestimonialView';
import AudioToTextForStudent from './Layouts/Student Dashboard/Files/Views/Plugins/AudioToText';
import CourseContentForStudent from "./Layouts/Student Dashboard/Files/Views/CourseContent";
import ListOfSubjectsForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/ListOfSubjects';
import QAForStudent from "./Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/QA";
import AnswerTypeVideoForStudents from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Answer Video/AnswerTypeVideoForStudents';
import AnswerTypeVideoForStudentsForTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/Answer Video For Test/AnswerTypeVideoForStudentsForTest';
import AnswerTypeAudioForStudents from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Answer Audio/AnswerTypeAudioForStudents';
import AnswerTypeAudioForStudentsForTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/Answer Audio For Test/AnswerTypeAudioForStudentsForTest';
import HandwritingForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Handwriting';

import ListOfAssignmentResultsForStudents from './Layouts/Student Dashboard/Files/Views/Student Section/Assignment Section/ListOfAssignmentResultsForStudents';
import ListOfAssignmentsForStudents from './Layouts/Student Dashboard/Files/Views/Student Section/Assignment Section/ListOfAssignmentsForStudents';

import MCQForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/MCQ';
import FillInTheBlanksForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/FillInTheBlanks';
import QAForTestsForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/QAForTests';
import HandwritingForStudentForTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/HandwritingForTests';
import MCQForTestsForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/MCQForTests';
import FillInTheBlankForTestsForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/FillInTheBlankForTests';
import FileUploadAnswerTypeForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/File Uploads/FileUploadAnswerTypeForStudent';
import FileUploadAnswerTypeForStudentForTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/File Uploads/FileUploadAnswerTypeForStudentForTest';

import ViewCurrentAnswerAttachmentsForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/View Answer For Content/ViewCurrentAnswerAttachmentsForStudent';
import ViewCurrentAnswerForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/View Answer For Content/ViewCurrentAnswerForStudent';

import ViewCurrentTestAttachmentsForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/View Answer For Test/ViewCurrentTestAttachmentsForStudent';
import ViewCurrentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/View Answer For Test/ViewCurrentTestForStudent';

import ViewCurrentAnswerForStudentsForAssignment from './Layouts/Student Dashboard/Files/Views/Student Section/Assignment Section/ViewCurrentAnswerForStudentsForAssignment';


import AnswersForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Answers';
import AnswersMCQForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersMCQ';
import AnswersFillInTheBlankForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersFillInTheBlank';
import AnswerVideoForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/AnswerVideo';
import AnswerDigitalUrdu from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Answer Digital Urdu/AnswerDigitalUrdu';
import AnswersFillInTheBlankForTest from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersFillInTheBlankForTest';
import AnswersHandwritingForTest from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersHandwritingForTest';
import AnswersAudioForTest from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersAudioForTest';
import AnswersQAForTest from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersQAForTest';
import AnswersMCQForTest from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersMCQForTest';
import ViewAnswerUrduDigital from './Layouts/Student Dashboard/Files/Views/Student Section/ViewAnswerUrduDigital';
import ResultsCategoryForStudents from './Layouts/Student Dashboard/Files/Views/Student Section/ResultCategoryForStudents';
import ResultsForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Results';
import ResultsForTestForStudents from './Layouts/Student Dashboard/Files/Views/Student Section/ResultsForTest';
import SubjectsForContent from './Layouts/Student Dashboard/Files/Views/Student Section/Subjects For Results/SubjectsForContent';
import SubjectsForTest from './Layouts/Student Dashboard/Files/Views/Student Section/Subjects For Results/SubjectsForTest';

import CreateStudentGroup from './Layouts/Student Dashboard/Files/Views/Student Section/Student Groups/CreateStudentGroup';

import Grade1ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade1Content';
import Grade2ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade2Content';
import Grade3ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade3Content';
import Grade4ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade4Content';
import Grade5ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade5Content';
import Grade6ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade6Content';
import Grade7ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade7Content';
import Grade8ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade8Content';
import Grade9ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade9Content';
import Grade10ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade11Content';
import Grade11ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade11Content';
import Grade12ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade12Content';
import Grade1ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade1ContentTest';
import Grade2ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade2ContentTest';
import Grade3ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade3Content';
import Grade4ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade4Content';
import Grade5ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade5Content';
import Grade6ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade6Content';
import Grade7ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade7Content';
import Grade8ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade8Content';
import Grade9ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade9Content';
import Grade10ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade10Content';
import Grade11ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade11Content';
import Grade12ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade12Content';
import ListOfSubjectsForTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/ListOfClassesForTest';
import FlipBookForStudents from './Layouts/Student Dashboard/Files/Views/Plugins/Flip Book/FlipBook';
import Testing from './Layouts/Student Dashboard/Files/Views/Python Plugins/Testing';
import ConferenceCall from './Layouts/Student Dashboard/Files/Views/ConferenceCall';
import HomeVideoForStudent from './Layouts/Student Dashboard/Files/Views/Plugins/Video Call/HomeVideoForStudent';
import Video from './Layouts/Student Dashboard/Files/Views/Plugins/Video Call/Video';
import ListOfSubjectsForFlipBook from './Layouts/Student Dashboard/Files/Views/Plugins/Flip Book/List Of Subjects/ListOfSubjectsForFlipBook';
import AnswerDrawing from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Answer Drawing/AnswerDrawing';
import DrawingPage from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Answer Drawing/DrawingPage';
import AnswerDrawingTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/Answer Drawing For Test/AnswerDrawingTest';
import DrawingPageTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/Answer Drawing For Test/DrawingPage';
import AnswerDigitalUrduForTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/Answer Digital Urdu For Test/AnswerDigitalUrduForTest';
import LiveClassForStudents from './Layouts/Student Dashboard/Files/Views/LiveClassForStudents';
import SubjectCategoryForStudents from './Layouts/Student Dashboard/Files/Views/Plugins/Video Call/Live Class Links For Students/SubjectCategoryForStudents'
import ListOfLinksForLiveClass from './Layouts/Student Dashboard/Files/Views/Plugins/Video Call/Live Class Links For Students/ListOfLinksForLiveClass';
import LoginChatForStudent from './Layouts/Student Dashboard/Files/Views/Chat For Student/LoginChatForStudent';
import ChatWindowForStudent from './Layouts/Student Dashboard/Files/Views/Chat For Student/ChatWindowForStudent';

//import BaloonMathGame from './Layouts/Student Dashboard/Files/Views/Gamification Games/Baloon Math/BaloonMathGame';



function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
    
          <MainLayout exact path="/" component={Home} />
          <MainLayout path="/apply" component={Apply} />
          <MainLayout path="/seminar" component={Seminar} />
          <MainLayout path="/login" component={LoginAuthFunctional} />
          <MainLayout path="/login-teacher" component={LoginAuthFunctionalTeacher} />
          <MainLayout path="/register" component={Registration} />
          <MainLayout path="/register-teacher" component={TeachersRegistration} />
          <Route path="/abc" component={CheckingNavBar} />

           <AdminDashboardLayout path="/admin/contacts/:id" component={ContactsForAdmin} /> 
           <AdminDashboardLayout path="/admin/view-contact-details/:id" component={ViewContactDetailsForAdmin} /> 
           <AdminDashboardLayout path="/admin/answer-query/:id" component={AnswerQueryForAdmin} /> 
           <AdminDashboardLayout path="/admin/personal-info/:id" component={PersonalInfoDataForAdmin} /> 
           <AdminDashboardLayout path="/admin/placement-results/:id" component={PlacementTestResultsForAdmin} /> 
           <AdminDashboardLayout path="/admin/registration-data/:id" component={RegistrationDataForAdmin} /> 
           <AdminDashboardLayout path="/admin/course-category/:id" component={CoursesCategoryForAdminForTeacher} /> 
           <AdminDashboardLayout path="/admin/gender-category-teacher/:id" component={GenderCategoryForAdminForTeacher} /> 
           <AdminDashboardLayout path="/admin/teacher-details/:id" component={ViewTeacherInfo} /> 
           <AdminDashboardLayout path="/admin/teacher-activity-category/:id" component={ActivityCategoryForAdminForTeacher} /> 
           <AdminDashboardLayout path="/admin/teacher-activity/:id" component={TeacherActivity} /> 
           <AdminDashboardLayout path="/admin/teacher-activity-test/:id" component={TeacherActivityForTest} /> 
           <AdminDashboardLayout path="/admin/teacher-activity-assignments/:id" component={TeacherActivityForAssignment} /> 
           
           <AdminDashboardLayout path="/admin/view-activity/attachments/:id" component={ViewCurrentContentAttachmentsForAdminForTeacher} /> 
           <AdminDashboardLayout path="/admin/view-activity/standard/:id" component={ViewCurrentContentForAdminForTeacher} /> 
           <AdminDashboardLayout path="/admin/view-activity-test/standard/:id" component={ViewCurrentTestForAdminForTeacher} /> 
           <AdminDashboardLayout path="/admin/view-activity-test/attachments/:id" component={ViewCurrentTestAttachmentsForAdminForTeacher} /> 
           <AdminDashboardLayout path="/admin/view-answers-admin/:id" component={ViewAnswerListForAdmin} /> 
           <AdminDashboardLayout path="/admin/view-current-answer-standard/:id" component={ViewCurrentAnswerAdminStandard} /> 
           <AdminDashboardLayout path="/admin/view-current-answer-attachments/:id" component={ViewCurrentAnswerAdminAttachment} /> 
           <AdminDashboardLayout path="/admin/view-answers-admin-test/:id" component={ViewAnswerListForTestForAdmin} /> 
           <AdminDashboardLayout path="/admin/view-current-answer-standard-test/:id" component={ViewCurrentAnswerAdminStandardForTest} /> 
           <AdminDashboardLayout path="/admin/view-current-answer-attachments-test/:id" component={ViewCurrentAnswerAdminAttachmentForTest} /> 
           
           <AdminDashboardLayout path="/admin/grade-category/:id" component={GradeCategoryForAdminForStudent} /> 
           <AdminDashboardLayout path="/admin/gender-category-student/:id" component={GenderCategoryForAdminForStudent} /> 
           <AdminDashboardLayout path="/admin/student-info-table/:id" component={StudentDataForAdmin} /> 
           <AdminDashboardLayout path="/admin/student-details/:id" component={ViewStudentInfo} /> 
           

           <AdminDashboardLayout path="/admin/stats-category/:id" component={StatsCategory} />
           <AdminDashboardLayout path="/admin/stats-of-class-vs-gender/:id" component={StatsOfClassVsGender} />
           <AdminDashboardLayout path="/admin/stats-of-class-vs-gender-vs-province/:id" component={StatsOfProvincesVsGendersVsClasses} />


           <AdminDashboardLayout path="/admin/teacher-info-table/:id" component={TeacherDataForAdmin} /> 
           <AdminDashboardLayout path="/admin/questions-list/:id" component={ViewQuestionsStudentsForAdmin} /> 
           <AdminDashboardLayout path="/admin/create-placement-test/:id" component={CreatePlacementTestForAdmin} /> 
           <AdminDashboardLayout path="/admin/placement-question-details/:id" component={PlacementQuestionDetailsForAdmin} /> 
           <AdminDashboardLayout path="/admin/blogs/:id" component={BlogsForAdmin} />
           <AdminDashboardLayout path="/admin/classes/:id" component={ClassesForAdmin} />
           
           
           <AdminDashboardLayout path="/admin/list-of-projects/:id" component={ProjectListForAdmin} />
           <AdminDashboardLayout path="/admin/create-project/:id" component={CreateProjectForAdmin} />
           <AdminDashboardLayout path="/admin/edit-current-project/:id" component={EditProjectForAdmin} />
           <AdminDashboardLayout path="/admin/project-detail/:id" component={ViewProjectDetailForAdmin} />
           
           
           <Route path = "/admin/chat-admin" component = {ChatWindowForAdmin} />

      
          <ProjectManagerDashboard path = "/manager/dashboard/:id" component = {ProjectManagerHome} />
          <ProjectManagerDashboard path = "/manager/list-of-projects/:id" component = {ListOfProjectsForManager} />
          <ProjectManagerDashboard path = "/manager/project-detail/:id" component = {ViewProjectInfo} />
          <ProjectManagerDashboard path = "/manager/list-of-groups-for-projects/:id" component = {ListOfGroupOfStudentsForManager} />
          
          <ProjectManagerDashboard path = "/manager/list-of-teachers/:id" component = {ListOfTeachersForManager} />
          
          <ProjectManagerDashboard path = "/manager/gender-category/:id" component = {GenderCategoryForManagerForStudent} />
          <ProjectManagerDashboard path = "/manager/student-info-table/:id" component = {StudentDataForManager} />
          <ProjectManagerDashboard path = "/manager/student-details/:id" component = {ViewStudentInfoManager} />
          
          <ProjectManagerDashboard path = "/manager/query-list/:id" component = {ListOfQueriesForManager} />
          <ProjectManagerDashboard path = "/manager/notification-answer/:id" component = {AnswerQueryForManager} />
          
          <ProjectManagerDashboard path = "/manager/progress-report-student-groups/:id" component = {ProgressReportOfStudentGroups} />

          <Route path = "/manager/chat-manager" component = {ChatWindowForManager} />










      <TeacherDashboardLayout exact path="/teacher/teacherDashboard/:id" component={TeacherDashboard} />
      <TeacherDashboardLayout path="/teacher/contact/:id" component={ContactDetailsForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/personal-info/:id" component={PersonalInfoDataForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/placement-results/:id" component={PlacementTestResultsForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/registration-data/:id" component={RegistrationDataForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/teachers-data/:id" component={TeacherDataForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/questions-list/:id" component={ViewQuestionsStudentsForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/create-placement-test/:id" component={CreatePlacementTestForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/placement-question-details/:id" component={PlacementQuestionDetailsForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/course-planning-content/:id" component={CoursePlanningContentForTeacher}/>
      <TeacherDashboardLayout path="/teacher/course-planning-content-test/:id" component={CourseContentForTestForTeacher}/>
      <TeacherDashboardLayout path="/teacher/course-planning-content-detatails/:id" component={CoursePlanningContentDetailsForTeacher}/>
      <TeacherDashboardLayout path="/teacher/create-blog/:id" component={BlogForTeacher} />
      <TeacherDashboardLayout path="/teacher/blog-list/:id" component={BlogListForTeacher} />
      <TeacherDashboardLayout path="/teacher/current-blog-view/:id" component={CurrentBlogViewForTeacher} />
      <TeacherDashboardLayout path="/teacher/edit-current-blog/:id" component={EditBlogForTeacher} />
      <TeacherDashboardLayout path="/teacher/videochat/:id" component={VideoChatForTeacher} />
      
      <TeacherDashboardLayout path="/teacher/course-planning-content-assignments/:id" component={CreateAssignment} />
      <TeacherDashboardLayout path="/teacher/course-content-text-qa/:id" component={CourseContentAdultTextQAForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-mcq/:id" component={CourseContentAdultMCQForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-blanks/:id" component={CourseContentAdultBlanksForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-digitalUrdu/:id" component={CourseContentAdultDigitalUrdu} />
      <TeacherDashboardLayout path="/teacher/course-content-text-video/:id" component={CourseContentVideoForTeachers} />
      <TeacherDashboardLayout path="/teacher/course-content-text-audio/:id" component={CourseContentAudioForTeachers} />
      <TeacherDashboardLayout path="/teacher/course-content-text-drawing/:id" component={CourseContentDrawingEditorComponent} />
      <TeacherDashboardLayout path="/teacher/course-content-text-handwriting/:id" component={CourseContentAdultHandwritingForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-qa-test/:id" component={CourseContentAdultTextForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-mcq-test/:id" component={CourseContentAdultMCQForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-blanks-test/:id" component={CourseContentAdultBlanksForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-digitalUrdu-test/:id" component={CourseContentAdultDigitalUrduForTest} />
      <TeacherDashboardLayout path="/teacher/course-content-text-video-test/:id" component={CourseContentVideoForTeachersForTest} />
      <TeacherDashboardLayout path="/teacher/course-content-text-audio-test/:id" component={CourseContentAudioForTestForTeachers} />
      <TeacherDashboardLayout path="/teacher/course-content-text-handwriting-test/:id" component={CourseContentAdultHandwritingForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-drawing-test/:id" component={CourseContentDrawingEditorComponentForTest} />
     
      <TeacherDashboardLayout path="/teacher/course-content-file-upload/:id" component={CourseContentFileUploadForTeacher} />

      <TeacherDashboardLayout path="/teacher/course-content-text-blanks-edit/:id" component={EditContentBlanksForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-blanks-edit-assignments/:id" component={EditContentBlanksForTeacherAssignment} />
      
      <TeacherDashboardLayout path="/teacher/course-content-text-mcq-edit/:id" component={EditContentMCQForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-mcq-edit-assignments/:id" component={EditContentMCQForTeacherAssignment} />
      
      <TeacherDashboardLayout path="/teacher/course-content-text-qa-edit/:id" component={EditContentQAForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-qa-edit-assignments/:id" component={EditContentQAForTeacherAssignment} />
      
      <TeacherDashboardLayout path="/teacher/course-content-text-video-edit/:id" component={EditContentVideoForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-video-edit-assignments/:id" component={EditContentVideoForTeacherAssignment} />
      
      <TeacherDashboardLayout path="/teacher/course-content-text-audio-edit/:id" component={EditContentAudioForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-audio-edit-assignments/:id" component={EditContentAudioForTeacherAssignment} />

      <TeacherDashboardLayout path="/teacher/course-content-file-upload-edit/:id" component={EditContentFileUploadForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-file-upload-edit-assignments/:id" component={EditContentFileUploadForTeacherAssignment} />
      <TeacherDashboardLayout path="/teacher/course-content-file-upload-edit-test/:id" component={EditContentFileUploadForTeacherForTest} />
     

      <TeacherDashboardLayout path="/teacher/course-content-text-digitalUrdu-edit/:id" component={EditContentDigitalUrduForTeacher} />
      <TeacherDashboardLayout path="/teacher/course-content-text-drawing-edit/:id" component={EditContentAdultDrawingEditorComponent} />
      <TeacherDashboardLayout path="/teacher/course-content-text-handwriting-edit/:id" component={EditContentHandwritingForTeacher} />
      

      <TeacherDashboardLayout path="/teacher/course-content-text-blanks-edit-test/:id" component={EditContentBlanksForTeacherForTest} />
      <TeacherDashboardLayout path="/teacher/course-content-text-mcq-edit-test/:id" component={EditContentMCQForTeacherForTest} />
      <TeacherDashboardLayout path="/teacher/course-content-text-qa-edit-test/:id" component={EditContentQAForTeacherForTest} />
      <TeacherDashboardLayout path="/teacher/course-content-text-video-edit-test/:id" component={EditContentVideoForTeacherForTest} />
      <TeacherDashboardLayout path="/teacher/course-content-text-audio-edit-test/:id" component={EditContentAudioForTeacherForTest} />
      <TeacherDashboardLayout path="/teacher/course-content-text-digitalUrdu-edit-test/:id" component={EditContentDigitalUrduForTeacherForTest} />
      <TeacherDashboardLayout path="/teacher/course-content-text-drawing-edit-test/:id" component={EditContentAdultDrawingEditorComponentForTest} />
      <TeacherDashboardLayout path="/teacher/course-content-text-handwriting-edit-test/:id" component={EditContentHandwritingForTeacherForTest} /> 
      <TeacherDashboardLayout path="/teacher/course-content-file-upload-test/:id" component={CourseContentFileUploadForTest} /> 

      <TeacherDashboardLayout path="/teacher/content-list/:id" component={ViewContentListForTeacher} />
      <TeacherDashboardLayout path="/teacher/white-board/:id" component={ContainerForTeacher} />
      <TeacherDashboardLayout path="/teacher/audio-record/:id" component={AudioVideoRecorderForTeacher} />
      
      <TeacherDashboardLayout path="/teacher/list-of-classes/:id" component={ListOfClassesForTeacher} />
      <TeacherDashboardLayout path="/teacher/list-of-classes-assignments/:id" component={ListOfAssignmentsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-1-content/:id" component={Grade1ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-2-content/:id" component={Grade2ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-3-content/:id" component={Grade3ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-4-content/:id" component={Grade4ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-5-content/:id" component={Grade5ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-6-content/:id" component={Grade6ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-7-content/:id" component={Grade7ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-8-content/:id" component={Grade8ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-9-content/:id" component={Grade9ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-10-content/:id" component={Grade10ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-11-content/:id" component={Grade11ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-12-content/:id" component={Grade12ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/list-of-classes-test/:id" component={ListOfClassesForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-1-content-test/:id" component={Grade1ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-2-content-test/:id" component={Grade2ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-3-content-test/:id" component={Grade3ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-4-content-test/:id" component={Grade4ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-5-content-test/:id" component={Grade5ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-6-content-test/:id" component={Grade6ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-7-content-test/:id" component={Grade7ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-8-content-test/:id" component={Grade8ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-9-content-test/:id" component={Grade9ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-10-content-test/:id" component={Grade10ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-11-content-test/:id" component={Grade11ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-12-content-test/:id" component={Grade12ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/results-category/:id" component={ResultsCategoryForTeacher} />
      <TeacherDashboardLayout path="/teacher/list-of-classes-subject-results/:id" component={ListOfClassesForResultsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-1-content-results/:id" component={Grade1ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-2-content-results/:id" component={Grade2ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-3-content-results/:id" component={Grade3ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-4-content-results/:id" component={Grade4ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-5-content-results/:id" component={Grade5ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-6-content-results/:id" component={Grade6ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-7-content-results/:id" component={Grade7ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-8-content-results/:id" component={Grade8ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-9-content-results/:id" component={Grade9ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-10-content-results/:id" component={Grade10ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-11-content-results/:id" component={Grade11ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-12-content-results/:id" component={Grade12ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-1-content-results-answers/:id" component={Grade1ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-2-content-results-answers/:id" component={Grade2ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-3-content-results-answers/:id" component={Grade3ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-4-content-results-answers/:id" component={Grade4ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-5-content-results-answers/:id" component={Grade5ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-6-content-results-answers/:id" component={Grade6ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-7-content-results-answers/:id" component={Grade7ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-8-content-results-answers/:id" component={Grade8ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-9-content-results-answers/:id" component={Grade9ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-10-content-results-answers/:id" component={Grade10ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-11-content-results-answers/:id" component={Grade11ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-12-content-results-answers/:id" component={Grade12ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/list-of-classes-test-results/:id" component={ListOfClassesForResultsOfTests} />
      <TeacherDashboardLayout path="/teacher/Grade-1-content-test-results/:id" component={Grade1ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-2-content-test-results/:id" component={Grade2ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-3-content-test-results/:id" component={Grade3ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-4-content-test-results/:id" component={Grade4ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-5-content-test-results/:id" component={Grade5ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-6-content-test-results/:id" component={Grade6ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-7-content-test-results/:id" component={Grade7ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-8-content-test-results/:id" component={Grade8ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-9-content-test-results/:id" component={Grade9ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-10-content-test-results/:id" component={Grade10ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-11-content-test-results/:id" component={Grade11ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-12-content-test-results/:id" component={Grade12ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-answers/:id" component={ViewAnswersOfQuestionForTeachers} />
      <TeacherDashboardLayout path="/teacher/view-answers-test/:id" component={ViewAnswersOfQuestionForTeachersForTest} />
      
      <TeacherDashboardLayout path="/teacher/view-answers-assignments/:id" component={ViewAnswersOfQuestionForAssignmentsForTeachers} />
      <TeacherDashboardLayout path="/teacher/view-answers-subject/:id" component={ViewAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-current-content/:id" component={ViewCurrentContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-current-content-audio/:id" component={ViewCurrentContentAudioForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-current-content-video/:id" component={ViewCurrentContentVideoForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-current-content-drawing/:id" component={ViewCurrentContentDrawingForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-current-content-file-upload/:id" component={ViewCurrentContentFileUplaodForTeacher} />
      
      <TeacherDashboardLayout path="/teacher/view-current-content-assignments/:id" component={ViewCurrentAssignmentContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-current-content-no-attachments-assignments/:id" component={ViewCurrentContentForAssignmentNoAttachments} />




      <TeacherDashboardLayout path="/teacher/view-current-content-test/:id" component={ViewCurrentContentForTeacherForTest} />
      <TeacherDashboardLayout path="/teacher/view-current-content-audio-test/:id" component={ViewCurrentContentAudioForTeacherForTest} />
      <TeacherDashboardLayout path="/teacher/view-current-content-video-test/:id" component={ViewCurrentContentVideoForTeacherForTest} />
      <TeacherDashboardLayout path="/teacher/view-current-content-drawing-test/:id" component={ViewCurrentContentDrawingForTeacherForTest} />
      <TeacherDashboardLayout path="/teacher/view-current-content-file-upload-test/:id" component={ViewCurrentContentFileUplaodForTeacherForTest} />
      
      
      <TeacherDashboardLayout path="/teacher/view-current-answer-assignment/" component={ViewCurrentAnswerContentAssignmentForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-current-answer/:id" component={ViewCurrentAnswerForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-current-answer-attachments/:id" component={ViewCurrentAnswerForTeacherAttachments} />
      <TeacherDashboardLayout path="/teacher/view-current-answer-audiovideo/:id" component={ViewCurrentAnswerVideoAudio} />
      <TeacherDashboardLayout path="/teacher/view-current-answer-test/:id" component={ViewCurrentAnswerForTeacherForTest} />
      <TeacherDashboardLayout path="/teacher/view-current-answer-attachments-test/:id" component={ViewCurrentAnswerForTeacherAttachmentsForTest} />
      <TeacherDashboardLayout path="/teacher/view-current-answer-audiovideo-test/:id" component={ViewCurrentAnswerVideoAudioForTest} />
      <TeacherDashboardLayout path="/teacher/keyboard/:id" component={KeyboardUrduForTeacher} />
      <TeacherDashboardLayout path="/teacher/notification-category-teachers/:id" component={NotificationsCategoryForTeachers} />
      <TeacherDashboardLayout path="/teacher/notification-list/:id" component={NotificationListForTeacher} />
      <TeacherDashboardLayout path="/teacher/notification-answer/:id" component={AnswerQueryForTeacher} />
      <TeacherDashboardLayout path="/teacher/fileupload-new/:id" component={FileUploadNewForTeacher} />
      <TeacherDashboardLayout path="/teacher/flip-book/:id" component={FlipBook} />
      <TeacherDashboardLayout path="/teacher/liveClass-category/:id" component={GradeCategoryForLinks} />
      <TeacherDashboardLayout path="/teacher/live-class/:id" component={LiveClass} />
      <Route path="/teacher/conference-call/:id" exact component={HomeVideoForTeacher} />
			<Route path="/teacher/conference-call/active/:url" component={VideoForTeacher} />
      <Route path = "/teacher/chat-teacher" component = {ChatWindowForTeacher} />
      <Route path = "/teacher/facerecognition" component = {FaceRecognition} />

              <StudentDashboardLayout exact path="/student/studentDashboard/:id" component={StudentDashboard} /> 
              <StudentDashboardLayout path="/student/studentPerformance/:id" component={Perfomance} /> 
              <StudentDashboardLayout path="/student/studentPerformance-test/:id" component={PerformanceForTest} /> 
              <StudentDashboardLayout path="/student/category-for-performance/:id" component={CategoryForPerfomance} /> 
              <StudentDashboardLayout path="/student/contact/:id" component={ContactDetailsForStudent} /> 
              <StudentDashboardLayout path="/student/personal-info/:id" component={PersonalInfoDataForStudent} /> 
              <StudentDashboardLayout path="/student/placement-results/:id" component={PlacementTestResultsForStudent} /> 
              <StudentDashboardLayout path="/student/registration-data/:id" component={RegistrationDataForStudent} /> 
              <StudentDashboardLayout path="/student/teachers-data/:id" component={TeacherDataForStudent} /> 
              <StudentDashboardLayout path="/student/notifications-category-students/:id" component={NotificationsCategoryForStudent} /> 
              <StudentDashboardLayout path="/student/notifications-subject-students/:id" component={NotificationSubjectSelectionForStudent} /> 
              <StudentDashboardLayout path="/student/create-notifications/:id" component={CreateNotificationsForStudent} /> 
              <StudentDashboardLayout path="/student/notification-list/:id" component={NotificationListForStudent} /> 
              <StudentDashboardLayout path="/student/notification-response/:id" component={ViewQueryResponseForStudent} /> 
              <StudentDashboardLayout path="/student/invoice/:id" component={ViewInvoiceForStudent} /> 
              <StudentDashboardLayout path="/student/questions-list/:id" component={ViewQuestionsStudentsForStudent} /> 
              <StudentDashboardLayout path="/student/create-placement-test/:id" component={CreatePlacementTestForStudent} /> 
              <StudentDashboardLayout path="/student/placement-question-details/:id" component={PlacementQuestionDetailsForStudent} /> 
              <StudentDashboardLayout path="/student/course-planning-question-details/:id" component={CoursePlanningContentForStudent} /> 
              <StudentDashboardLayout path="/student/testimonials-creation/:id" component={TestimonialsForStudent} />
              <StudentDashboardLayout path="/student/testimonial-list/:id" component={TestimonialListForStudent} />
              <StudentDashboardLayout path="/student/edit-current-testimonial/:id" component={EditTestimonialForStudent} />
              <StudentDashboardLayout path="/student/current-testimonial-view/:id" component={CurrentTestimonialViewForStudent} />
              <StudentDashboardLayout path="/student/audiototext/:id" component={AudioToTextForStudent} />
              <StudentDashboardLayout path="/student/course-content/:id" component={CourseContentForStudent} />
              <StudentDashboardLayout path="/student/list-of-subjects/:id" component={ListOfSubjectsForStudent} />
              <StudentDashboardLayout path="/student/list-of-subjects-for-test/:id" component={ListOfSubjectsForTestForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-qa/:id" component={QAForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-drawing/:id" component={AnswerDrawing} />
              <StudentDashboardLayout path="/student/view-question-type-handwriting/:id" component={HandwritingForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-mcq/:id" component={MCQForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-blanks/:id" component={FillInTheBlanksForStudent} />
              
              <StudentDashboardLayout path="/student/view-question-type-video/:id" component={AnswerTypeVideoForStudents} />
              <StudentDashboardLayout path="/student/view-question-type-audio/:id" component={AnswerTypeAudioForStudents} />
              <StudentDashboardLayout path="/student/view-question-type-digitalUrdu/:id" component={AnswerDigitalUrdu} />
              <StudentDashboardLayout path="/student/view-question-type-file-upload/:id" component={FileUploadAnswerTypeForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-file-upload-test/:id" component={FileUploadAnswerTypeForStudentForTest} />
              
              
              <StudentDashboardLayout path="/student/list-of-subjects-for-assignments/:id" component={ListOfAssignmentsForStudents} />
              <StudentDashboardLayout path="/student/answer-list-assignments/:id" component={ListOfAssignmentResultsForStudents} />
              <StudentDashboardLayout path="/student/view-current-answer-assignments/:id" component={ViewCurrentAnswerForStudentsForAssignment} />
              
              


              <StudentDashboardLayout path="/student/view-question-type-qa-test/:id" component={QAForTestsForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-handwriting-test/:id" component={HandwritingForStudentForTest} />
              <StudentDashboardLayout path="/student/view-question-type-mcq-test/:id" component={MCQForTestsForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-blanks-test/:id" component={FillInTheBlankForTestsForStudent} />
              
              <StudentDashboardLayout path="/student/create-student-group/:id" component={CreateStudentGroup} />
              


              <StudentDashboardLayout path="/student/view-question-type-digitalurdu-test/:id" component={AnswerDigitalUrduForTest} />
              <StudentDashboardLayout path="/student/view-question-type-audio-test/:id" component={AnswerTypeAudioForStudentsForTest} />
              <StudentDashboardLayout path="/student/view-question-type-video-test/:id" component={AnswerTypeVideoForStudentsForTest} />
              <StudentDashboardLayout path="/student/view-question-type-drawing-test/:id" component={AnswerDrawingTest} />
              <StudentDashboardLayout path="/student/Grade-1-content/:id" component={Grade1ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-2-content/:id" component={Grade2ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-3-content/:id" component={Grade3ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-4-content/:id" component={Grade4ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-5-content/:id" component={Grade5ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-6-content/:id" component={Grade6ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-7-content/:id" component={Grade7ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-8-content/:id" component={Grade8ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-9-content/:id" component={Grade9ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-10-content/:id" component={Grade10ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-11-content/:id" component={Grade11ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-12-content/:id" component={Grade12ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-1-content-test/:id" component={Grade1ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-2-content-test/:id" component={Grade2ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-3-content-test/:id" component={Grade3ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-4-content-test/:id" component={Grade4ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-5-content-test/:id" component={Grade5ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-6-content-test/:id" component={Grade6ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-7-content-test/:id" component={Grade7ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-8-content-test/:id" component={Grade8ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-9-content-test/:id" component={Grade9ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-10-content-test/:id" component={Grade10ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-11-content-test/:id" component={Grade11ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-12-content-test/:id" component={Grade12ContentTestForStudent} />
              <StudentDashboardLayout path="/student/results-category-students/:id" component={ResultsCategoryForStudents} />
              <StudentDashboardLayout path="/student/answer-list/:id" component={ResultsForStudent} />
              <StudentDashboardLayout path="/student/answer-list-test/:id" component={ResultsForTestForStudents} />
              <StudentDashboardLayout path="/student/subject-list/:id" component={SubjectsForContent} />
              <StudentDashboardLayout path="/student/subject-list-test/:id" component={SubjectsForTest} />
              <StudentDashboardLayout path="/student/view-current-answer-mcq/:id" component={AnswersMCQForStudent} />
              
              <StudentDashboardLayout path="/student/view-current-answer/:id" component={ViewCurrentAnswerForStudent} />
              <StudentDashboardLayout path="/student/view-current-answer-attachment/:id" component={ViewCurrentAnswerAttachmentsForStudent} />

              <StudentDashboardLayout path="/student/view-current-answer-test/:id" component={ViewCurrentTestForStudent} />
              <StudentDashboardLayout path="/student/view-current-answer-attachment-test/:id" component={ViewCurrentTestAttachmentsForStudent} />



              <StudentDashboardLayout path="/student/view-current-answer-digitalUrdu/:id" component={ViewAnswerUrduDigital} />
              <StudentDashboardLayout path="/student/view-current-answer-blanks/:id" component={AnswersFillInTheBlankForStudent} />
             
              <StudentDashboardLayout path="/student/view-current-answer-qa-test/:id" component={AnswersQAForTest} />
              <StudentDashboardLayout path="/student/view-current-answer-mcq-test/:id" component={AnswersMCQForTest} />
              <StudentDashboardLayout path="/student/view-current-answer-blanks-test/:id" component={AnswersFillInTheBlankForTest} />
             
              
              <StudentDashboardLayout path="/student/flip-book/:id" component={FlipBookForStudents} />
              <StudentDashboardLayout path="/student/flip-book-view/:id" component={ViewSubjectFlipBook} />
              <StudentDashboardLayout path="/student/conferenceCall/:id" component={ConferenceCall} />
              <StudentDashboardLayout path="/student/live-class/:id" component={LiveClassForStudents} />
              <StudentDashboardLayout path="/student/subject-category-liveClass/:id" component={SubjectCategoryForStudents} />
              <StudentDashboardLayout path="/student/list-of-links-liveClass/:id" component={ListOfLinksForLiveClass} />
              
              <Route path="/student/conference-call/" exact component={HomeVideoForStudent} />
				    	<Route path="/student/conference-call/:url" component={Video} />
              
              <StudentDashboardLayout path="/student/list-of-subjects-flipbook/:id" component={ListOfSubjectsForFlipBook} />
              <Route path="/student/draw-page/:id" component={DrawingPage} />
              <Route path="/student/draw-page-test/:id" component={DrawingPageTest} />
              <Route path = "/pythonTesting" component = {Testing} />
              <Route path = "/student/chat-student" component = {ChatWindowForStudent} />
              {/*}
              <Route path="/baloon-math-test" component={BaloonMathGame} />
              */}
            </Switch>
            </Router>       
    </div>
    
  );
}

export default App;
