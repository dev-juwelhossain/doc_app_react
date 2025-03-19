import { Link, NavLink } from 'react-router-dom';
import '../css/doctor-time-manage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,  faBarsStaggered, faBell,faClock,  faHome, faHospitalUser, faHouseMedical, faNotesMedical, faSearch,  faUserDoctor,} from '@fortawesome/free-solid-svg-icons';
const DocTimeManage = () => {
    return (
        <div>
            <div class="sh-mobile-navbar">
                    <ul>
                        <li><NavLink to='/'><FontAwesomeIcon icon={faHome}/></NavLink></li>
                        <li><NavLink to="/patientInfo"> <FontAwesomeIcon icon={faHospitalUser}/></NavLink></li>
                        <li><NavLink to="/appointment-details"><FontAwesomeIcon icon={faNotesMedical}/></NavLink></li>
                        <li><NavLink to="/doctor-time-manage" style={({ isActive }) => ({color: isActive ? "white" : "black",  backgroundColor: isActive ? "#0065c0" : "transparent", })}><FontAwesomeIcon icon={faClock}/></NavLink></li>
                        <li><NavLink to="/doctor-profile"><FontAwesomeIcon icon={faUserDoctor}/></NavLink></li>
                        <li><NavLink to="/change-doctor"><FontAwesomeIcon icon={faSearch}/></NavLink></li>
                    </ul>
            </div>
 {/*    <!-- ==== LEFT AND TOP ITEMS ==== --> */}
 <div class="sh-left-and-top-items-section">
     {/*    <!-- === LEFT SIDE MENU ITEMS ICONS === --> */}
     <div class="sh-left-side-menu-container-icon">
            <div class="sh-brand-logo-icons">
                <NavLink to="/"><FontAwesomeIcon icon={faHouseMedical}/></NavLink>
            </div>

            <div class="sh-left-side-menu-items-icons">
                <ul>
                    <li><NavLink to='/'><FontAwesomeIcon icon={faHome}/></NavLink></li>
                    <li><NavLink to="/patientInfo"><FontAwesomeIcon icon={faHospitalUser}/></NavLink></li>
                    <li><NavLink href="appointment-details.html"><FontAwesomeIcon icon={faNotesMedical}/></NavLink></li>
                    <li><NavLink to="/doctor-time-manage"><FontAwesomeIcon icon={faClock}/></NavLink></li>
                    <li><NavLink to="/doctor-profile"><FontAwesomeIcon icon={faUserDoctor}/></NavLink></li>
                    <li><NavLink to="/change-doctor"><FontAwesomeIcon icon={faSearch}/></NavLink></li>
                </ul>
            </div>
        </div>
       {/*  <!-- ================================ --> */}
       <div class="sh-left-side-menu-container sh-close">
            <div class="sh-brand-logo">
                <Link to="/"><FontAwesomeIcon icon={faHouseMedical}/> HOUSE MEDICAL</Link>
            </div>

            <div class="sh-left-side-menu-items">
                <ul>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faHome}/>
                            <p>হোম</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to='/patient-info' >
                    <FontAwesomeIcon icon={faHospitalUser}/> রোগীর
                            তথ্য</NavLink>
                    </li>
                    <li><NavLink to="/appointment-details"><FontAwesomeIcon icon={faNotesMedical}/>
                     অ্যাপয়েন্টমেন্টের
                            বিবরণ</NavLink></li>
                    <li><NavLink to="/doctor-time-manage" style={({ isActive }) => ({color: isActive ? "white" : "#708090",  backgroundColor: isActive ? "#0065c0" : "transparent", })}><FontAwesomeIcon icon={faClock}/>ডাক্তারের সময়সূচী</NavLink></li>
                    <li><NavLink  to="/doctor-profile"><FontAwesomeIcon icon={faUserDoctor}/>ডাক্তারের প্রোফাইল</NavLink></li>
                    <li><NavLink to="/change-doctor"><FontAwesomeIcon icon={faSearch}/>ডাক্তার পরিবর্তন</NavLink></li>
                </ul>
            </div>
        </div>
       {/*  <!-- === RIGHT ITEM DETAILS SECTION === --> */}
        <div class="sh-right-item-details-section">
          {/*   <!-- === TOP NAV ITEMS === --> */}
          <div class="sh-doctor-nav-section">
                    <div class="sh-doctor-nav-left-container">
                        <ul>
                            <li onclick="hidemenu()" class="sh-menu-hover"><FontAwesomeIcon icon={faBarsStaggered}/></li>
                            <li onclick="showSidemenu()" class="show-short-menu"><FontAwesomeIcon icon={faArrowRight}/>
                            </li>
                            <li class="appointment-btn"><a href="patient-info.html">সাক্ষাৎকার</a></li>
                        </ul>
                    </div>
                    <div class="sh-doctor-nav-right-container">
                        
                        <div class="sh-notificatio-icon"><FontAwesomeIcon icon={faBell}/></div>
                        <div class="sh-doctor-profile">
                            <div class="sh-doctor-name">
                                <h4>Dr.Abir Hossain</h4>
                                <p>Admin</p>
                            </div>
                            <div class="sh-doctor-image">
                                <img src="img/doctor_2785482.png" alt="DOC"/>
                            </div>
                        </div>
                    </div>
                </div>
           {/*  <!-- ==== PATIENT INFO AND PAYMENT METHODS ==== --> */}
            <div class="sh-patient-info-payment-methods-section">
               {/*  <!-- === PATIENTS INFORMATION === --> */}
                <div class="sh-patient-information-section">
                    <div class="patient-info-text">
                        <h2>ডাক্তারের তথ্য</h2>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-info-box-image">
                            <img src="img/doctor_2785482.png" alt=""/>
                        </div>
                       {/*  <!-- ==== DOCTOR INFO ==== --> */}
                        <div class="sh-doctor-info-profile">
                            <p><b>ডাক্তারের নাম: </b>মোঃ আবির হোসেন</p>
                            <p><b>বিশেষজ্ঞ: </b>ঔষধ বিশেষজ্ঞ</p>
                            <p><b>ডিগ্রি: </b>এমবিবিএস, এমডি (মেডিসিন), সিসিডি (বারডেম),</p>
                            <p><b>কলেজ: </b>রংপুর কমিউনিটি মেডিকেল কলেজ ও হাসপাতাল</p>
                            <p><b>কর্মরত স্থান: </b>রংপুর কমিউনিটি মেডিকেল কলেজ ও হাসপাতাল</p>
                        </div>
                    </div>
                </div>
            </div>
        {/*     <!-- ==== PATIENT INFO AND PAYMENT METHODS ==== --> */}
            <div class="sh-patient-info-payment-methods-section">
               {/*  <!-- === PATIENTS INFORMATION === --> */}
                <div class="sh-patient-information-section">
                    <div class="patient-info-text">
                        <h2>ডাক্তারের কর্মদিবস </h2>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">দিন</label>
                                <label for="text">শুক্রবার</label>
                            </div>
                            <div class="sh-info-box">
                                <label for="text">তারিখ</label>
                                <p>১২/০৩/২০২৫</p>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <label for="text">সময়</label>
                                <p>বিকাল ০৩:০০ টা</p>
                            </div>
                            <div class="sh-info-box">
                                <label for="text">কক্ষ</label>
                                <p>৩০৩</p>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-add">
                                <label for="text">স্থান</label>
                                <p>রংপুর কমিউনিটি মেডিকেল কলেজ ও হাসপাতাল, চতুর্থ তলা, ৪০৪ কক্ষ। ৭৭/১, রোড নং-১, ধাপ, জেল
                                    রোড, রংপুর।</p>
                            </div>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">শনিবার</label>
                            </div>
                            <div class="sh-info-box">
                                <p>১২/০৩/২০২৫</p>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <p>বিকাল ০৩:০০ টা</p>
                            </div>
                            <div class="sh-info-box">
                                <p>৩০৩</p>
                            </div>
                        </div>
                        <div class="sh-info-add">
                            <p>রংপুর কমিউনিটি মেডিকেল কলেজ ও হাসপাতাল, চতুর্থ তলা, ৪০৪ কক্ষ। ৭৭/১, রোড নং-১, ধাপ, জেল
                                রোড, রংপুর।</p>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">রবিবার</label>
                            </div>
                            <div class="sh-info-box">
                                <p>১২/০৩/২০২৫</p>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <p>বিকাল ০৩:০০ টা</p>
                            </div>
                            <div class="sh-info-box">
                                <p>৩০৩</p>
                            </div>
                        </div>
                        <div class="sh-info-add">
                            <p>রংপুর কমিউনিটি মেডিকেল কলেজ ও হাসপাতাল, চতুর্থ তলা, ৪০৪ কক্ষ। ৭৭/১, রোড নং-১, ধাপ, জেল
                                রোড, রংপুর।</p>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">সোমবার</label>
                            </div>
                            <div class="sh-info-box">
                                <p>১২/০৩/২০২৫</p>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <p>বিকাল ০৩:০০ টা</p>
                            </div>
                            <div class="sh-info-box">
                                <p>৩০৩</p>
                            </div>
                        </div>
                        <div class="sh-info-add">
                            <p>রংপুর কমিউনিটি মেডিকেল কলেজ ও হাসপাতাল, চতুর্থ তলা, ৪০৪ কক্ষ। ৭৭/১, রোড নং-১, ধাপ, জেল
                                রোড, রংপুর।</p>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">মঙ্গলবার</label>
                            </div>
                            <div class="sh-info-box">
                                <p>১২/০৩/২০২৫</p>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <p>বিকাল ০৩:০০ টা</p>
                            </div>
                            <div class="sh-info-box">
                                <p>৩০৩</p>
                            </div>
                        </div>
                        <div class="sh-info-add">
                            <p>রংপুর কমিউনিটি মেডিকেল কলেজ ও হাসপাতাল, চতুর্থ তলা, ৪০৪ কক্ষ। ৭৭/১, রোড নং-১, ধাপ, জেল
                                রোড, রংপুর।</p>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">বুধবার</label>
                            </div>
                            <div class="sh-info-box">
                                <p>১২/০৩/২০২৫</p>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <p>বিকাল ০৩:০০ টা</p>
                            </div>
                            <div class="sh-info-box">
                                <p>৩০৩</p>
                            </div>
                        </div>
                        <div class="sh-info-add">
                            <p>রংপুর কমিউনিটি মেডিকেল কলেজ ও হাসপাতাল, চতুর্থ তলা, ৪০৪ কক্ষ। ৭৭/১, রোড নং-১, ধাপ, জেল
                                রোড, রংপুর।</p>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">বৃহস্পতিবার</label>
                            </div>
                            <div class="sh-info-box">
                                <p>১২/০৩/২০২৫</p>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <p>বিকাল ০৩:০০ টা</p>
                            </div>
                            <div class="sh-info-box">
                                <p>৩০৩</p>
                            </div>
                        </div>
                        <div class="sh-info-add">
                            <p>রংপুর কমিউনিটি মেডিকেল কলেজ ও হাসপাতাল, চতুর্থ তলা, ৪০৪ কক্ষ। ৭৭/১, রোড নং-১, ধাপ, জেল
                                রোড, রংপুর।</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default DocTimeManage;