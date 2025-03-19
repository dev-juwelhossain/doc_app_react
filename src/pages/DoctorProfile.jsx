import { faArrowRight, faBarsStaggered, faBell, faClock, faHome, faHospitalUser, faHouseMedical, faNotesMedical, faSearch,  faUserDoctor} from '@fortawesome/free-solid-svg-icons'
import '../css/doctor-profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink,  Link } from 'react-router-dom'
const DoctorProfile = () => {
    return (
        <div>
             <div class="sh-mobile-navbar">
                    <ul>
                        <li><NavLink to='/'><FontAwesomeIcon icon={faHome}/></NavLink></li>
                        <li><NavLink to="/patientInfo"> <FontAwesomeIcon icon={faHospitalUser}/></NavLink></li>
                        <li><NavLink to="/appointment-details"><FontAwesomeIcon icon={faNotesMedical}/></NavLink></li>
                        <li><NavLink to="/doctor-time-manage"><FontAwesomeIcon icon={faClock}/></NavLink></li>
                        <li><NavLink to="/doctor-profile"><FontAwesomeIcon icon={faUserDoctor}/></NavLink></li>
                        <li><NavLink to="/change-doctor"><FontAwesomeIcon icon={faSearch}/></NavLink></li>
                    </ul>
        </div>
  {/*   <!-- ==== LEFT AND TOP ITEMS ==== --> */}
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
                    <li><NavLink to="/doctor-time-manage"><FontAwesomeIcon icon={faClock}/>ডাক্তারের সময়সূচী</NavLink></li>
                    <li><NavLink  to="/doctor-profile" style={({ isActive }) => ({ color: isActive ? "white" : "black",  backgroundColor: isActive ? "#0065c0" : "transparent", })}><FontAwesomeIcon icon={faUserDoctor}/>ডাক্তারের প্রোফাইল</NavLink></li>
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
        {/*   <!-- ==== PATIENT INFO AND PAYMENT METHODS ==== -->*/} 
              <div class="sh-patient-info-payment-methods-section">
              {/*   <!-- === PATIENTS INFORMATION === --> */}
                <div class="sh-patient-information-section">
                    <div class="patient-info-text">
                        <h2>ডাক্তারের তথ্য</h2>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-info-box-image">
                            <img src="img/doctor_2785482.png" alt=""/>
                        </div>
                        <div class="sh-info-box">
                            <label for="text">ডাক্তারের নাম</label>
                            <input type="text" placeholder="এখানে ডাক্তারের নাম লিখুন" name="" id=""/>
                        </div>
                        <div class="sh-info-box">
                            <label for="text">বিশেষজ্ঞ</label>
                            <select name="" id="">
                                <option value="1" name="department">ইন্টারনাল মেডিসিন</option>
                                <option value="1" name="department">ডার্মাটোলজি</option>
                                <option value="1" name="department">ফরেনসিক প্যাথলজি</option>
                                <option value="1" name="department">বিওকেমিস্ট্রি</option>
                                <option value="1" name="department">ডেন্টিস্ট্রি</option>
                                <option value="1" name="department">মাইক্রোবায়োলজি</option>
                                <option value="1" name="department">অবস্টেট্রিক্স এন্ড গয়নাইকোলোজি</option>
                                <option value="1" name="department">প্যাথলজি</option>
                                <option value="1" name="department">পেডিয়াট্রিক্স</option>
                                <option value="1" name="department">সাইকিয়াট্রি</option>
                                <option value="1" name="department">ট্রান্সফিউশন মেডিসিন</option>
                                <option value="1" name="department">এন্ডোক্রিনোলজি & মেটাবলিসম</option>
                                <option value="1" name="department">ফার্মাসিউটিক্যালস</option>
                                <option value="1" name="department">ফিজিক্যাল মেডিসিন</option>
                                <option value="1" name="department">রেডিওথেরাপি</option>
                            </select>
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
                        <div class="sh-info-box">
                            <label for="text">ডাক্তারের নাম</label>
                            <input type="text" placeholder="এখানে ডাক্তারের নাম লিখুন" name="" id=""/>
                        </div>
                        <div class="sh-info-box">
                            <label for="text">বিশেষজ্ঞ</label>
                            <select name="" id="">
                                <option value="1" name="department">ইন্টারনাল মেডিসিন</option>
                                <option value="1" name="department">ডার্মাটোলজি</option>
                                <option value="1" name="department">ফরেনসিক প্যাথলজি</option>
                                <option value="1" name="department">বিওকেমিস্ট্রি</option>
                                <option value="1" name="department">ডেন্টিস্ট্রি</option>
                                <option value="1" name="department">মাইক্রোবায়োলজি</option>
                                <option value="1" name="department">অবস্টেট্রিক্স এন্ড গয়নাইকোলোজি</option>
                                <option value="1" name="department">প্যাথলজি</option>
                                <option value="1" name="department">পেডিয়াট্রিক্স</option>
                                <option value="1" name="department">সাইকিয়াট্রি</option>
                                <option value="1" name="department">ট্রান্সফিউশন মেডিসিন</option>
                                <option value="1" name="department">এন্ডোক্রিনোলজি & মেটাবলিসম</option>
                                <option value="1" name="department">ফার্মাসিউটিক্যালস</option>
                                <option value="1" name="department">ফিজিক্যাল মেডিসিন</option>
                                <option value="1" name="department">রেডিওথেরাপি</option>
                            </select>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-info-box">
                            <label for="text">কর্মরত স্থান</label>
                            <select name="" id="">
                                <option value="1" name="study">রংপুর কমিউনিটি মেডিকেল কলেজ ও হাসপাতাল</option>
                            </select>
                        </div>
                        <div class="sh-info-box">
                            <label for="text">ডিগ্রি</label>
                            <select name="" id=""></select>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-info-box">
                            <label for="text">কলেজ</label>
                            <select name="" id="">
                                <option value="1" name="study">রংপুর কমিউনিটি মেডিকেল কলেজ ও হাসপাতাল</option>
                            </select>
                        </div>
                        <div class="sh-info-box">
                        </div>
                    </div>
                </div>
            </div>
           {/*  <!-- === SUBMIT BUTTON === --> */}
            <div class="sh-submit-btn"><button type="submit" name="submit">সংরক্ষণ করুন</button></div>
            {/* <!-- ==== PATIENT INFO AND PAYMENT METHODS ==== --> */}
            <div class="sh-patient-info-payment-methods-section">
               {/*  <!-- === PATIENTS INFORMATION === --> */}
                <div class="sh-patient-information-section">
                    <div class="patient-info-text">
                        <h2>ডাক্তারের কর্মদিবস</h2>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">দিন</label>
                                <label for="text">শুক্রবার</label>
                            </div>
                            <div class="sh-info-box">
                                <label for="text">তারিখ</label>
                                <input type="date" placeholder="" name="" id=""/>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <label for="text">সময়</label>
                                <input type="time" placeholder="" name="" id=""/>
                            </div>
                            <div class="sh-info-box">
                                <label for="text">কক্ষ</label>
                                <input type="text" placeholder="৩০৩"/>
                            </div>
                        </div>
                        <div class="sh-info-add">
                            <label for="text">স্থান</label>
                            <input type="text"
                                placeholder="Address: 77/1, Road No-1, Dhap, Jail Road, Rangpur. · Hotline: 09666 787813·"
                                name="" id="" value=""/>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">শনিবার</label>
                            </div>
                            <div class="sh-info-box">
                                <input type="date" placeholder="" name="" id=""/>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <input type="time" placeholder="" name="" id=""/>
                            </div>
                            <div class="sh-info-box">
                                <input type="text" placeholder="৩০৩" name="" id=""/>
                            </div>
                        </div>
                        <div class="sh-info-add">
                            <input type="text"
                                placeholder="Address: 77/1, Road No-1, Dhap, Jail Road, Rangpur. · Hotline: 09666 787813·"
                                name="" id="" value=""/>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">রবিবার</label>
                            </div>
                            <div class="sh-info-box">
                                <input type="date" placeholder="" name="" id=""/>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <input type="time" placeholder="" name="" id=""/>
                            </div>
                            <div class="sh-info-box">
                                <input type="text" placeholder="৩০৩" name="" id=""/>
                            </div>
                        </div>
                        <div class="sh-info-add">
                            <input type="text"
                                placeholder="Address: 77/1, Road No-1, Dhap, Jail Road, Rangpur. · Hotline: 09666 787813·"
                                name="" id="" value=""/>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">সোমবার</label>
                            </div>
                            <div class="sh-info-box">
                                <input type="date" placeholder="" name="" id=""/>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <input type="time" placeholder="" name="" id=""/>
                            </div>
                            <div class="sh-info-box">
                                <input type="text" placeholder="৩০৩" name="" id=""/>
                            </div>
                        </div>
                        <div class="sh-info-add">
                            <input type="text"
                                placeholder="Address: 77/1, Road No-1, Dhap, Jail Road, Rangpur. · Hotline: 09666 787813·"
                                name="" id="" value=""/>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">মঙ্গলবার</label>
                            </div>
                            <div class="sh-info-box">
                                <input type="date" placeholder="" name="" id=""/>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <input type="time" placeholder="" name="" id=""/>
                            </div>
                            <div class="sh-info-box">
                                <input type="text" placeholder="৩০৩" name="" id=""/>
                            </div>
                        </div>
                        <div class="sh-info-add">
                            <input type="text"
                                placeholder="Address: 77/1, Road No-1, Dhap, Jail Road, Rangpur. · Hotline: 09666 787813·"
                                name="" id="" value=""/>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">বুধবার</label>
                            </div>
                            <div class="sh-info-box">
                                <input type="date" placeholder="" name="" id=""/>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <input type="time" placeholder="" name="" id=""/>
                            </div>
                            <div class="sh-info-box">
                                <input type="text" placeholder="৩০৩" name="" id=""/>
                            </div>
                        </div>
                        <div class="sh-info-add">
                            <input type="text"
                                placeholder="Address: 77/1, Road No-1, Dhap, Jail Road, Rangpur. · Hotline: 09666 787813·"
                                name="" id="" value=""/>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box-day">
                                <label for="text">বৃহস্পতিবার</label>
                            </div>
                            <div class="sh-info-box">
                                <input type="date" placeholder="" name="" id=""/>
                            </div>
                        </div>
                        <div class="sh-this-container-for-mobile">
                            <div class="sh-info-box">
                                <input type="time" placeholder="" name="" id=""/>
                            </div>
                            <div class="sh-info-box">
                                <input type="text" placeholder="৩০৩" name="" id=""/>
                            </div>
                        </div>
                        <div class="sh-info-add">
                            <input type="text"
                                placeholder="Address: 77/1, Road No-1, Dhap, Jail Road, Rangpur. · Hotline: 09666 787813·"
                                name="" id="" value=""/>
                        </div>
                    </div>
                </div>
            </div>
           {/*  <!-- === SUBMIT BUTTON === --> */}
            <div class="sh-submit-btn"><button type="submit" name="submit">সংরক্ষণ করুন</button></div>
        </div>
    </div>
        </div>
    );
};

export default DoctorProfile;