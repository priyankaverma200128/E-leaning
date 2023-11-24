

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Master from './Component/Master';
import Home from './Component/layout/Home';

import About from './Component/About';
import Courses from './Component/Courses';
import Branches from './Component/Branches';
import MaterialType from './Component/MaterialType';
import Material from './Component/Material';
import Quiz from './Component/Quiz';
import QuizQuestion from './Component/QuizQuestions';
import Dashboard from './Component/Dashboard';
import Login from './Component/auth/Login';
import AdminMaster from './Component/layout/AdminLayout/AdminMaster';
import UserMaster from './Component/layout/UserLayout/UserMaster';
import Register from './Component/auth/Register';
import ShowCourses from './Component/AdminComponent/ShowCourses';
import AddCourse from './Component/AdminComponent/AddCourse';
import UpdateCourse from './Component/AdminComponent/UpdateCourse';
import AddBranch from './Component/AdminComponent/AddBranch';
import ShowMaterialType from './Component/AdminComponent/ShowMaterialType';
import AddMaterialType from './Component/AdminComponent/AddMaterialType';
import ShowMaterial from './Component/AdminComponent/ShowMaterial';
import MaterialContent from './Component/AdminComponent/MaterialContent';
import ShowBranches from './Component/AdminComponent/ShowBranches';
import UpdateBranch from './Component/AdminComponent/UpdateBranch';
import AddMaterial from './Component/AdminComponent/AddMaterial';
import UpdateMaterial from './Component/AdminComponent/UpdateMaterial';
import ShowQuiz from './Component/AdminComponent/ShowQuiz';
import ShowQuizQuestion from './Component/AdminComponent/ShowQuizQuestion';
import UpdateQuizQuestion from './Component/AdminComponent/UpdateQuizQuestion';
import AddQuizQuestion from './Component/AdminComponent/AddQuizQuestion';
import DeleteCourse from './Component/AdminComponent/DeleteCourse';
import AddQuiz from './Component/AdminComponent/AddQuiz';
import AddUserMaterial from './Component/AddUserMaterial';
import UpdateMaterialtype from './Component/AdminComponent/UpdateMaterialtype';
import ShowUserMaterial from './Component/ShowUserMaterial';
import UserUpdateMaterial from './Component/UserUpdateMaterial';
import UpdateQuiz from './Component/AdminComponent/UpdateQuiz';
import QuizQuestion2 from './Component/QuizQuestion2';
import Result from './Component/Result';
// import QuizQuestions from './Component/QuizQuestions';
import ShowResult from './Component/ShowResult';
import PlayedQuiz from './Component/AdminComponent/PlayedQuiz';
import PlayedUser from './Component/PlayedUser';



function App() {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Master/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      
      <Route path='/showcourses' element={<ShowCourses/>}/>
      
      
      <Route path="/register" element={<Register/>}/>
      <Route path='/courses' element={<Courses/>}/>

      </Route>
      <Route path="/login" element={<Login/>}/>

      <Route path='/admin' element={<AdminMaster/>}>
      <Route path='/admin' element={<Dashboard/>}/>
      <Route path='/admin/showCourses' element={<ShowCourses/>}/>
      <Route path='/admin/showmaterialtype' element={<ShowMaterialType/>}/>
      <Route path='/admin/addmaterialtype' element={<AddMaterialType/>}/>
      <Route path='/admin/showmaterial' element={<ShowMaterial/>}/>
      <Route path='/admin/addmaterial' element={<AddMaterial/>}/>
      <Route path='/admin/materialcontent' element={<MaterialContent/>}/>
      <Route path='/admin/AddCourses' element={<AddCourse/>}/>
      <Route path='/admin/showbranches' element={<ShowBranches/>}/>
      <Route path='/admin/Addbranches' element={<AddBranch/>}/>
      <Route path='/admin/addquizquestion' element={<AddQuizQuestion/>}/>
      <Route path='/admin/showquiz' element={<ShowQuiz/>}/>
      <Route path='/admin/addquiz' element={<AddQuiz/>}/>
      <Route path='/admin/showquizquestion' element={<ShowQuizQuestion/>}/>

      <Route path='/admin/UpdateCourses/:courseId' element={<UpdateCourse/>}/>
      <Route path='/admin/UpdateMaterial/:MaterialId/:courseId/:branchId/:materialtypeId' element={<UpdateMaterial/>}/>
      <Route path='/admin/updateMaterialtype/:MaterialtypeId' element={<UpdateMaterialtype/>}/>
      <Route path='/admin/UpdateBranch/:branchId/:courseId' element={<UpdateBranch/>}/>
      <Route path='/admin/updatequiz/:quizId/:courseId/:branchId' element={<UpdateQuiz/>}/>
      <Route path='/admin/updatequizquestion/:_id' element={<UpdateQuizQuestion/>}/>
      <Route path='/admin/playedquiz' element={<PlayedQuiz/>}/>
      
      </Route>
    


    <Route path='/user' element={<UserMaster/>}>
      <Route path='/user' element={<Home/>}/>
      <Route path='/user/courses' element={<Courses/>}/>
      <Route path='/user/branches/:id' element={<Branches/>}/>
      <Route path='/user/showmaterial' element={<ShowUserMaterial/>}/>
      <Route path='/user/updatematerial/:MaterialId' element={<UserUpdateMaterial/>}/>
      <Route path='/user/quiz' element={<Quiz/>}/>
      <Route path="/user/quizquestion/:id" element={<QuizQuestion2/>} />
      <Route path="/user/playedquiz" element={<PlayedUser/>} />
      <Route path='/user/materialtype' element={<MaterialType/>}/>
      <Route path='/user/material/:id' element={<Material/>}/>
      <Route path='/user/addusermaterial' element={<AddUserMaterial/>}/>
      {/* <Route path='/user/result/:quizId' element={<Result/>}/> */}
      <Route path='/user/showresult' element={<ShowResult/>}/>
      
      

      </Route>
    </Routes>
    
    
    
    </BrowserRouter>
  </>
  );
}
export default App;
