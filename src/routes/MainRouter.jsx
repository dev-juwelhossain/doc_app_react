import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AppointmentDetails from "../pages/AppointmentDetails";
import ChangeDoctor from "../pages/ChangeDoctor";
import DocTimeManage from "../pages/DocTimeManage";
import DoctorProfile from "../pages/DoctorProfile";
import PatientInfo from "../pages/PatientInfo";

import SignUp from "../auth/SignUp";
import LogIn from "../auth/LogIn";
import DocSignUp from "../auth/DocSignUp";
import DocLogin from "../auth/DocLogin";
import UserChangeDoctor from "../pages/UserChangeDoctor";
import UserPatientInfo from "../pages/UserPatientInfo";
import UserTimeManage from "../pages/UserTimeManage";


const MainRouter = createBrowserRouter([{
    path: '/',
    element: <MainLayout />
    ,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/appointment-details',
            element: <AppointmentDetails />
        },
        {
            path: '/change-doctor',
            element: <ChangeDoctor />
        },
        {
            path: '/doctor-time-manage',
            element: <DocTimeManage />
        },
        {
            path: '/doctor-profile',
            element: <DoctorProfile />
        },
        {
            path: '/patient-info',
            element: <PatientInfo />
        },
        {
            path: '/user-change-doctor',
            element: <UserChangeDoctor />
        },
        {
            path: '/user-patient-info',
            element: <UserPatientInfo />
        },
        {
            path: '/user-time-manage',
            element: <UserTimeManage />
        },

    ]
},
{
    path: '/login',
    element: <LogIn />
},
{
    path: '/signup',
    element: <SignUp />
},
{
    path: '/doc-signup',
    element: <DocSignUp />
},
{
    path: '/doc-login',
    element: <DocLogin />
}
]);
export default MainRouter;