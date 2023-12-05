import axios from "axios";
import * as qs from "qs"

// const BASE_URL ="http://localhost:5000/"
const BASE_URL ="http://e-learning-backend-ek65.onrender.com/"

class Apiservices {
    login(data){
        return axios.post(BASE_URL + "admin/login",qs.stringify(data))
    }
    ShowCourses(){
        return axios.post(BASE_URL+"admin/course/all",{})
    }
    ShowUserCourses(){
        return axios.post(BASE_URL+"customer/course/all",{})
    }
    AddCourses(data){
        return axios.post(BASE_URL+"admin/course/add",data)
    }
    SingleCourse(data){
        return axios.post(BASE_URL+"admin/course/single",qs.stringify(data))
    }
    UpdateCourses(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/course/update",data, {headers:header1})
    }
    DeleteCourse(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/course/delete",qs.stringify(data), {headers:header1})
    }
    ChangeUser(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/course/delete",data, {headers:header1})
    }
    AddBranch(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/branch/add",data,{headers:header1})
    }
    SingleBranch(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/branch/single",qs.stringify(data),{headers:header1})
    }
    UpdateBranch(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/branch/update",data, {headers:header1})
    }
    DeleteBranch(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/branch/delete",qs.stringify(data), {headers:header1})
    }
    ShowBranches(data){
        return axios.post(BASE_URL+"admin/branch/all",data)
    }
    ShowUserBranches(data){
        return axios.post(BASE_URL+"customer/branch/all",qs.stringify(data))
    }
    ShowMaterialType(data){
        return axios.post(BASE_URL+"admin/materialtype/all",data)
    }
    DeleteMaterialtype(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/materialtype/delete",qs.stringify(data), {headers:header1})
    }
    SingleMaterialtype(data){
        return axios.post(BASE_URL+"admin/materialtype/single",qs.stringify(data))
    }
    UpdateMaterialtype(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/materialtype/update",qs.stringify(data), {headers:header1})
    }
    ShowUserMaterialType(data){
        return axios.post(BASE_URL+"customer/materialtype/all",data)
    }
    AddMaterialType(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/materialtype/add",qs.stringify(data),{headers:header1})
    }
    AddMaterial(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/material/add",data,{headers:header1})
    }
    AddUserMaterial(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"customer/material/add",data,{headers:header1})
    }
    ShowMaterial(){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/material/all",{},{headers:header1})
    }
    DeleteMaterial(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/material/delete",qs.stringify(data), {headers:header1})
    }
    
    ShowUserMaterial(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"customer/material/all",qs.stringify(data),{headers:header1})
    }
    UpdateMaterial(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/material/update",data, {headers:header1})
    }
    SingleMaterial(data){
        return axios.post(BASE_URL+"admin/material/single",qs.stringify(data))
    }
    DeleteMaterial(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/material/delete",qs.stringify(data), {headers:header1})
    }
    ShowQuiz(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/quiz/all",data,{headers:header1})
    }
    SingleQuiz(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/quiz/single",qs.stringify(data),{headers:header1})
    }
    ShowUserQuiz(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"customer/quiz/all",data,{headers:header1})
    }
    AddQuiz(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/quiz/add",qs.stringify(data),{headers:header1})
    }
    DeleteQuiz(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/quiz/delete",qs.stringify(data), {headers:header1})
    }
    updatequiz(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+'admin/quiz/update',qs.stringify(data),{headers:header1})
    }
    ShowQuizQuestion(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/quizquestion/all",data,{headers:header1})
    }
    ShowUserQuizQuestion(data){
        console.log(data);
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/quizquestion/all",qs.stringify(data),{headers:header1})
    }
    AddQuizQuestion(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/quizquestion/add",qs.stringify(data),{headers:header1})
    }
    updatequizquestion(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+'admin/quizquestion/update',qs.stringify(data),{headers:header1})
    }
    singlequizquestion(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+'admin/quizquestion/single',qs.stringify(data),{headers:header1})
    }
    DeleteQuizQuestion(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/quizquestion/delete",qs.stringify(data), {headers:header1})
    }
    admindashboard(){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.get(BASE_URL+"admin/dashboard",{headers:header1})
    }
    
    
    AddCustomer(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"customer/customer/add",qs.stringify(data),{headers:header1})
    }
    submitQuiz(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"customer/playedquiz/add",qs.stringify(data),{headers:header1})
    }
    ShowplayedQuiz(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/playedquiz/all",data,{headers:header1})
    }
    ShowplayedUserQuiz(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"admin/playedquiz/all",qs.stringify(data),{headers:header1})
    }
    AddplayedUserQuiz(data){
        const token = sessionStorage.getItem("token")
        const header1={
            Authorization : token
        }
        return axios.post(BASE_URL+"customer/playedquiz/add",qs.stringify(data),{headers:header1})
    }

    
}
export default new Apiservices