import { createRouter, createWebHistory } from 'vue-router'

import LandingPageView from '../views/LandingPageView.vue'


import LoginView from '../views/login&SignupViews/LoginView.vue'
import SignUpView from '../views/login&SignupViews/SignUpView.vue'
import LoginForm from '../components/login-signup/LoginForm.vue'

import NotificationsView from '../views/studentViews/NotificationsView.vue'
import InternshipsView from "../views/studentViews/InternshipsView.vue"
import OfferForm from "../components/student_components/internship/OfferForm.vue"
import NewInternForm from "../components/student_components/internship/NewInternForm.vue"
import ApplicationView from "../views/studentViews/ApplicationsView.vue"
import ApplicationInfo from "../components/student_components/internship_applications/ApplicationInfo.vue"
import AttendanceView from "../views/studentViews/AttendancesView.vue"
import PointsView from "../views/studentViews/PointsView.vue"
import StudentProfileView from "../views/studentViews/StudentProfileView.vue"

import StudentView from "../views/studentViews/StudentView.vue"
//admin

import AdminView from "../views/adminViews/AdminView.vue"

import AdminProfileView from "../views/adminViews/AdminProfileView.vue"
import AdminProfileForm from "../components/admin-components/admin_profile/AdminProfileForm.vue"
import AdminInternshipsView from "../views/adminViews/AdminInternshipsView.vue"
import AdminInternshipInfo from "../components/admin-components/Ainternships/AdminInternshipInfo.vue"
import AdminApplicationsView from "../views/adminViews/AdminApplicationsView.vue"
import AdminApplicationInfo from "../components/admin-components/applications/AdminApplicationInfo.vue"
import AdminStudentProfilesView from "../views/adminViews/AdminStudentProfilesView.vue"
import StudentsPointsView from "../views/adminViews/StudentsPointsView.vue"
import AdminSupervisorProfilesView from "../views/adminViews/AdminSupervisorProfilesView.vue"
import StudentProfileForm from "../components/admin-components/students_profiles/StudentProfileForm.vue"
import SupervisorProfileForm from "../components/admin-components/supervisors_profiles/SupervisorProfileForm.vue"
import AdminNotificationsView from "../views/adminViews/AdminNotificationsView.vue"
//supervisor 
import SupervisorProfileView from "../views/supervisorViews/SupervisorProfileView.vue"
import SupervisorInternshipsView from "../views/supervisorViews/SupervisorInternshipsView.vue"
import NewInternshipForm from "../components/supervisor_components/Sinternships/NewInternshipForm.vue"
// import SupervisorInternshipInfo from "../components/supervisor-components/Sinternships/SupervisorInternshipInfo.vue"
import SupervisorApplicationsView from "../views/supervisorViews/SupervisorApplicationsView.vue"
import SupervisorApplicationInfo from "../components/supervisor_components/applications/SupervisorApplicationInfo.vue"
import InternsView from "../views/supervisorViews/InternsView.vue"
import AttendanceForm from "../components/supervisor_components/Interns/AttendanceForm.vue"
import PointForm from "../components/supervisor_components/Interns/PointForm.vue"
import CertificatedStudentsCard from "../components/supervisor_components/Interns/CertificatedStudentsCard.vue"
import CertificateView from "../views/supervisorViews/CertificateView.vue"
import InternshipModifForm from "../components/supervisor_components/Sinternships/InternshipModifForm.vue"
import SupervisorNotificationsView from "../views/supervisorViews/SupervisorNotificationsView.vue"

import SupervisorView from "../views/supervisorViews/SupervisorView.vue"



const routes = [
    //landing page
  {
    
    path: '/',
    name: 'landing',
    component: LandingPageView
  },
  //login
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  //signup
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },

//student
  {
    path: '/student',
    name: 'student',
    component: StudentView,
    //allow only authenticated users to access this routes and also its childern
    meta: { requiresAuth: true }, 
    beforeEnter: (to, from, next) => {
      if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
  
        if (!localStorage.getItem('token')) {
          next({
            path: '/',
            query: { redirect: to.fullPath }
          })
        } else {
          next()
        }
      } else {
        next() // make sure to always call next()!
      }
    },
    

    children: [
      {
        path: '/notifications',
        name: 'notifications',
        component: NotificationsView
      },
    
  
      {
        path: '/internships',
        name: 'internships',
        component: InternshipsView,
    
      },
      {
        path: '/internships/:id',
        name: 'internship',
        component: OfferForm,
        // props: true
      },
      {
        path: '/offer-application',
        name: 'offer-application',
        component: OfferForm
      },
      {
        path: '/new-internship-application',
        name: 'new-internship-application',
        component: NewInternForm
      },
    
      {
        path: '/applications',
        name: 'applications',
        component: ApplicationView
      },
      {
        path: '/applications/:id',
        name: 'application',
        component: ApplicationInfo,
      },
      {
        path: '/attendance',
        name: 'attendance',
        component: AttendanceView
      },
      {
        path: '/points',
        name: 'points',
        component: PointsView
      },
      {
        path: '/student-profile',
        name: 'student-profile',
        component: StudentProfileView
      },
    ]

  }
  ,
  

  ///admin

  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
      //allow only authenticated users to access this routes and also its childern
      meta: { requiresAuth: true }, 
      beforeEnter: (to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
          // this route requires auth, check if logged in
          // if not, redirect to login page.
    
          if (!localStorage.getItem('token')) {
            next({
              path: '/',
              query: { redirect: to.fullPath }
            })
          } else {
            next()
          }
        } else {
          next() // make sure to always call next()!
        }
      },
    children: [
    
      {
        path: '/admin-notifications',
        name: 'admin-notifications',
        component: AdminNotificationsView
      },
    
      {
        path: '/admin-profile',
        name: 'admin-profile',
        component: AdminProfileView
      },
      {
        path: '/admin-profile-form',
        name: 'admin-profile-form',
        component: AdminProfileForm
      },
      {
        path: '/admin-internships',
        name: 'admin-internships',
        component: AdminInternshipsView
      },
      {
        path: '/admin-internships/:id',
        name: 'admin-internship',
        component: AdminInternshipInfo,
      },
      {
        path: '/admin-applications',
        name: 'admin-applications',
        component: AdminApplicationsView
      },
      {
        path: '/admin-applications/:id',
        name: 'admin-application',
        component: AdminApplicationInfo,
      }
      ,
      {
        path: '/admin-student-profiles',
        name: 'admin-student-profiles',
        component: AdminStudentProfilesView
      }
      ,
      {
        path: '/students-points',
        name: 'students-points',
        component: StudentsPointsView
      },
      {
        path:'/admin-supervisor-profiles',
        name:'/admin-supervisor-profiles',
        component:AdminSupervisorProfilesView
      },
      {
        path: '/student-profile-info/:id',
        name: 'student-profile-info',
        component: StudentProfileForm,
      }
      ,
      {
        path: '/supervisor-profile-info/:id',
        name: 'supervisor-profile-info',
        component: SupervisorProfileForm,
      },
    ]
  },

  
  
  //supervisor

  {
    path: '/supervisor',
    name: 'supervisor',
    component: SupervisorView,
      //allow only authenticated users to access this routes and also its childern
    meta: { requiresAuth: true }, 
    beforeEnter: (to, from, next) => {
      if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
  
        if (!localStorage.getItem('token')) {
          next({
            path: '/',
            query: { redirect: to.fullPath },

          })
        } else {
          next()
        }
      } else {
        next() // make sure to always call next()!
      }
    },
    children: [
    
    
      {
        
        path: '/supervisor-profile',
        name: 'supervisor-profile',
        component: SupervisorProfileView
    },
    
      {
        path: '/supervisor-notifications',
        name: 'supervisor-notifications',
        component: SupervisorNotificationsView
    },
    
      {
        path: '/supervisor-internships',
        name: 'supervisor-internships',
        component: SupervisorInternshipsView
      },
      {
        path: '/new-internship',
        name: 'new-internship',
        component: NewInternshipForm
      },
      {
        path: '/interns',
        name: 'interns',
        component: InternsView
      },
      {
        path: '/supervisor-applications',
        name: 'supervisor-applications',
        component: SupervisorApplicationsView
      },
      {
        path: '/supervisor-applications/:id',
        name: 'supervisor-application',
        component: SupervisorApplicationInfo,
      },
      {
        path: '/interns-attendace/:id',
        name: 'intern-attendace',
        component: AttendanceForm,
      },
      {
        path: '/interns-points/:id',
        name: 'intern-points',
        component: PointForm,
      },
      {
        path: '/certificated-students',
        name: 'certificated-students',
        component: CertificateView,
      },
      {
        path: '/internship-modif/:id',
        name: 'internship-modif',
        component: InternshipModifForm,
      }
    ]
  }
  ,
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
