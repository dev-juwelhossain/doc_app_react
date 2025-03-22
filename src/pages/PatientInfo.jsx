import { Link, NavLink } from 'react-router-dom';
import '../css/patient-info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,  faBarsStaggered, faBell,faClock, faFilePdf, faHome, faHospitalUser, faHouseMedical, faNotesMedical, faSearch,  faUserDoctor,} from '@fortawesome/free-solid-svg-icons';
const PatientInfo = () => {
    return (
        <div>
            <div class="sh-mobile-navbar">
                    <ul>
                        <li><NavLink to='/'><FontAwesomeIcon icon={faHome}/></NavLink></li>
                        <li><NavLink to="/patient-info" style={({ isActive }) => ({color: isActive ? "white" : "black",  backgroundColor: isActive ? "#0065c0" : "transparent", })}> <FontAwesomeIcon icon={faHospitalUser}/></NavLink></li>
                        <li><NavLink to="/appointment-details"><FontAwesomeIcon icon={faNotesMedical}/></NavLink></li>
                        <li><NavLink to="/doctor-time-manage"><FontAwesomeIcon icon={faClock}/></NavLink></li>
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
                    <li><NavLink to="/patient-info"><FontAwesomeIcon icon={faHospitalUser}/></NavLink></li>
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
                    <NavLink to='/patient-info' style={({ isActive }) => ({color: isActive ? "white" : "#708090",  backgroundColor: isActive ? "#0065c0" : "transparent", })}>
                    <FontAwesomeIcon icon={faHospitalUser}/> রোগীর
                            তথ্য</NavLink>
                    </li>
                    <li><NavLink to="/appointment-details"><FontAwesomeIcon icon={faNotesMedical}/>
                     অ্যাপয়েন্টমেন্টের
                            বিবরণ</NavLink></li>
                    <li><NavLink to="/doctor-time-manage"><FontAwesomeIcon icon={faClock}/>ডাক্তারের সময়সূচী</NavLink></li>
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
                            <li class="appointment-btn"><NavLink to="/patient-info">সাক্ষাৎকার</NavLink></li>
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
            {/* <!-- ==== PATIENT INFO AND PAYMENT METHODS ==== --> */}
            <div class="sh-patient-info-payment-methods-section">
               {/*  <!-- === PATIENTS INFORMATION === --> */}
                <div class="sh-patient-information-section">
                    <div class="patient-info-text">
                        <h2>রোগীর তথ্য</h2>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-info-box">
                            <label for="text">রোগীর প্রথম নাম</label>
                            <input type="text" placeholder="মোঃ আবির" name="" id=""/>
                        </div>
                        <div class="sh-info-box">
                            <label for="text">রোগীর পদবি</label>
                            <input type="text" placeholder="হোসেন" name="" id=""/>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-info-box">
                            <label for="text">রোগীর ঠিকানা</label>
                            <input type="text" name="" placeholder="মডার্ন মোড় রংপুর " id=""/>
                        </div>
                        <div class="sh-info-box">
                            <label for="text">ইমেইল</label>
                            <input type="text" name="" placeholder="abir@gmail.com" id=""/>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-info-box">
                            <label for="text">রোগীর বয়স </label>
                            <input type="text" name="" placeholder="20 বছর " id=""/>
                        </div>
                        <div class="sh-info-box">
                            <label for="text">লিঙ্গ</label>
                            <select name="" id="">
                                <option value="" name="">পুরুষ</option>
                                <option value="" name="">মহিলা</option>
                            </select>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-info-box">
                            <label for="text">রোগীর ওজন </label>
                            <input type="text" name="" placeholder="৬০ কেজি (ঐচ্ছিক) " id=""/>
                        </div>
                        <div class="sh-info-box">
                            <label for="text">রক্তের গ্রুপ</label>
                            <select name="" id="">
                                <option value="" name="">A+ (VE)</option>
                                <option value="" name="">A- (VE)</option>
                                <option value="" name="">B+ (VE)</option>
                                <option value="" name="">O+ (VE)</option>
                            </select>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-info-box">
                            <label for="text">রোগীর অবস্থা</label>
                            <select name="" id="">
                                <option value="" name="">নতুন রোগী</option>
                                <option value="" name="">পুরাতন রোগী</option>
                            </select>
                        </div>
                        <div class="sh-info-box">
                            <label for="text">পরিদর্শন ফি </label>
                            <select name="" id="">
                                <option value="" name="">১০০০ টাকা</option>
                                <option value="" name="">৭০০ টাকা</option>
                            </select>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-info-box">
                            <label for="text">বৈবাহিক অবস্থা</label>
                            <select name="" id="">
                                <option value="" name="">বিবাহিত</option>
                                <option value="" name="">অবিবাহিত</option>
                            </select>
                        </div>
                        <div class="sh-info-box">
                            <label for="text">যোগাযোগ নম্বর</label>
                            <input type="text" name="" placeholder="01315-291293" id=""/>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-info-box">
                            <label for="text">যোগাযোগের মাধ্যম</label>
                            <select name="" id="">
                                <option value="" name="">সরাসরি</option>
                                <option value="" name="">ভিডিও কল</option>
                            </select>
                        </div>
                        <div class="sh-info-box">
                        </div>
                    </div>
                </div>

                <div class="sh-payment-contact-section">
                   {/*  <!-- === PAYMENT METHODS === --> */}
                    <div class="sh-payment-methods-section">
                        <div class="patient-info-text">
                            <h2>যোগাযোগের মাধ্যম</h2>
                        </div>
                        <div class="sh-payment-container">
                            <h3 class="sh-live-contact">সরাসরি</h3>
                        </div>
                        <div class="sh-payment-container">
                            <h3 class="sh-messenger-bg"> <i class="fa-brands fa-facebook-messenger"></i> ভিডিও কল
                            </h3>
                            <h3 class="sh-whatsapp-bg"> <i class="fa-brands fa-whatsapp "></i> ভিডিও কল</h3>
                        </div>
                    </div>
                   {/*  <!-- === PAYMENT METHODS === --> */}
                    <div class="sh-payment-methods-section">
                        <div class="patient-info-text">
                            <h2>পরিদর্শন ফি</h2>
                        </div>
                        <div class="sh-payment-container">
                            <button type="button" name="button" class="sh-payment-btn-style sh-payment-btn-bg-cash">নগদ
                                অর্থ
                                প্রদান</button>
                            <div class="sh-nagad-bksh">
                                <button type="button" name="button"
                                    class="sh-payment-btn-style sh-payment-btn-bg-bkash"><img src="img/bkash logo.png"
                                        alt=""/></button>
                                <button type="button" name="button"
                                    class="sh-payment-btn-style sh-payment-btn-bg-bkash"><img src="img/nagad.png"
                                        alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- === SUBMIT BUTTON === --> */}
            <div class="sh-submit-btn-pt"><button type="submit" name="submit">জমা করুন </button></div>
          {/*   <!-- === PDF FILE ===  --> */}
            <div class="sh-pdf-section">
                <div class="sh-pdf-details">
                    <div class="sh-pdf-doc-container">
                        <h3>রিউম্যাটোলজি ও মেডিসিন বিশেষজ্ঞ </h3>
                        <h1>ডাঃ মোঃ সাদিকুল ইসলাম সাদিক </h1>
                        <p>এমবিবিএস, বিসিএস (স্বাস্থ্য)</p>
                        <p>এমডি (রিউম্যাটোলজি), পিজি হাসপাতাল, ঢাকা</p>
                        <p>এফএসিআর (আমেরিকা)</p>
                        <p>ইসিআরডি (সুইজারল্যান্ড)</p>
                        <p>বাত-ব্যথা, কোমর ব্যথা, হাড়ক্ষয়, বাতরোগ ও মেডিসিন বিশেষজ্ঞ </p>
                        <p>রংপুর মেডিকেল কলেজ ও হাসপাতল</p>
                    </div>
                    <div class="sh-pdf-patient-info">
                        <div class="sh-pdf-patient-info-box">
                            <div class="sh-pdf">
                                <label for="text">রোগীর নাম</label>
                                <p>মোঃ আবির হোসেন</p>
                            </div>
                            <div class="sh-pdf">
                                <label for="text">রোগীর বয়স</label>
                                <p>২০ বছর</p>
                            </div>
                            <div class="sh-pdf">
                                <label for="text">লিঙ্গ</label>
                                <p>পুরুষ</p>
                            </div>
                        </div>
                        <div class="sh-pdf-patient-info-box">
                            <div class="sh-pdf">
                                <label for="text">রোগীর ওজন</label>
                                <p>৬০ কেজি</p>
                            </div>
                            <div class="sh-pdf">
                                <label for="text">রক্তের গ্রুপ</label>
                                <p>B+ (VE)</p>
                            </div>
                            <div class="sh-pdf">
                                <label for="text">বৈবাহিক অবস্থা</label>
                                <p>অবিবাহিত</p>
                            </div>
                        </div>
                        <div class="sh-pdf-patient-info-box">
                            <div class="sh-pdf">
                                <label for="text">রোগীর ঠিকানা</label>
                                <p>মডার্ন মোড় </p>
                            </div>
                            <div class="sh-pdf">
                                <label for="text">যোগাযোগ নম্বর</label>
                                <p>+৮৮০ ১৩১৫-২৯১২৯৩</p>
                            </div>
                            <div class="sh-pdf">
                                <label for="text">রোগীর অবস্থা</label>
                                <p>নতুন</p>
                            </div>
                        </div>
                        <div class="sh-pdf-patient-info-box">
                            <div class="sh-pdf">
                                <label for="text">পরিদর্শন ফি</label>
                                <p>১০০০ টাকা</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sh-pdf-download">
                   <FontAwesomeIcon icon={faFilePdf} className='download'/>
                </div>
            </div>
          
        </div>
    </div>

        </div>
    );
};

export default PatientInfo;