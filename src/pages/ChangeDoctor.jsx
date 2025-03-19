import { Link, NavLink } from 'react-router-dom';
import '../css/change.doctor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,  faBarsStaggered, faBell,faClock, faHome, faHospitalUser, faHouseMedical, faNotesMedical, faSearch,  faUserDoctor,} from '@fortawesome/free-solid-svg-icons';

const ChangeDoctor = () => {
    return (
        <div>
            <div class="sh-mobile-navbar">
                    <ul>
                        <li><NavLink to='/'><FontAwesomeIcon icon={faHome}/></NavLink></li>
                        <li><NavLink to="/patient-info"> <FontAwesomeIcon icon={faHospitalUser}/></NavLink></li>
                        <li><NavLink to="/appointment-details"><FontAwesomeIcon icon={faNotesMedical}/></NavLink></li>
                        <li><NavLink to="/doctor-time-manage"><FontAwesomeIcon icon={faClock}/></NavLink></li>
                        <li><NavLink to="/doctor-profile"><FontAwesomeIcon icon={faUserDoctor}/></NavLink></li>
                        <li><NavLink to="/change-doctor" style={({ isActive }) => ({color: isActive ? "white" : "black",  backgroundColor: isActive ? "#0065c0" : "transparent", })}><FontAwesomeIcon icon={faSearch}/></NavLink></li>
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
                    <li><NavLink href="/appointment-details.html"><FontAwesomeIcon icon={faNotesMedical}/></NavLink></li>
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
                    <li><NavLink  to="/doctor-profile"><FontAwesomeIcon icon={faUserDoctor}/>ডাক্তারের প্রোফাইল</NavLink></li>
                    <li><NavLink to="/change-doctor" style={({ isActive }) => ({color: isActive ? "white" : "#708090",  backgroundColor: isActive ? "#0065c0" : "transparent", })}><FontAwesomeIcon icon={faSearch}/>ডাক্তার পরিবর্তন</NavLink></li>
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
            {/* <!-- ==== PATIENT INFO AND PAYMENT METHODS ==== --> */}
            <div class="sh-patient-info-payment-methods-section">
                {/* <!-- === PATIENTS INFORMATION === --> */}
                <div class="sh-patient-information-section">
                    <div class="patient-info-text">
                        <h2>ডাক্তার পরিবর্তনের তথ্য দিন </h2>
                    </div>
                    <div class="sh-patient-information-container">
                       {/*  <!-- ==== DIVISION ==== --> */}
                        <div class="sh-info-box">
                            <label for="text">বিভাগ</label>
                            <select name="" id="">
                                <option value="country" name="country">বিভাগ</option>
                                <option value="1" name="country">রংপুর</option>
                                <option value="2" name="country">রাজশাহী</option>
                                <option value="3" name="country">সিলেট</option>
                                <option value="4" name="country">খুলনা</option>
                                <option value="5" name="country">ঢাকা</option>
                                <option value="6" name="country">ময়মনসিংহ</option>
                                <option value="7" name="country">চট্টগ্রাম</option>
                                <option value="7" name="country">বরিশাল</option>
                            </select>
                        </div>
                       {/*  <!-- ==== DISTRICT ==== --> */}
                        <div class="sh-info-box">
                            <label for="text">জেলা</label>
                            <select name="" id="">
                                <option value="country" name="country">জেলা</option>
                                <option value="1" name="country">রংপুর</option>
                                <option value="2" name="country">গাইবান্ধা</option>
                                <option value="3" name="country">কুড়িগ্রাম</option>
                                <option value="4" name="country">নীলফামারী</option>
                                <option value="5" name="country">লালমনিরহাট </option>
                                <option value="6" name="country">দিনাজপুর</option>
                                <option value="7" name="country">ঠাকুরগাঁও</option>
                                <option value="8" name="country">পঞ্চগড় </option>
                                <option value="9" name="country">টাঙ্গাইল</option>
                                <option value="11" name="country">শরীয়তপুর</option>
                                <option value="12" name="country">রাজবাড়ী</option>
                                <option value="13" name="country">নরসিংদী</option>
                                <option value="14" name="country">নারায়ণগঞ্জ</option>
                                <option value="15" name="country">মুন্সীগঞ্জ</option>
                                <option value="16" name="country">মানিকগঞ্জ</option>
                                <option value="17" name="country">মাদারীপুর</option>
                                <option value="18" name="country">কিশোরগঞ্জ</option>
                                <option value="19" name="country">গোপালগঞ্জ</option>
                                <option value="20" name="country">গাজীপুর</option>
                                <option value="21" name="country">ফরিদপুর</option>
                                <option value="22" name="country">ঢাকা</option>
                                <option value="23" name="country">বগুরা </option>
                                <option value="24" name="country">জয়পুরহাট </option>
                                <option value="25" name="country">নওগাঁ </option>
                                <option value="26" name="country">নাটোর </option>
                                <option value="27" name="country">চাঁপাই নওয়াবগঞ্জ</option>
                                <option value="28" name="country">পাবনা</option>
                                <option value="29" name="country">রাজশাহী </option>
                                <option value="30" name="country">সিরাজগঞ্জ</option>
                                <option value="31" name="country">সিলেট</option>
                                <option value="32" name="country">সুনামগঞ্জ</option>
                                <option value="33" name="country">মৌলভীবাজার</option>
                                <option value="34" name="country">হবিগঞ্জ</option>
                                <option value="35" name="country">বাগেরহাট</option>
                                <option value="36" name="country">চুয়াডাঙা</option>
                                <option value="37" name="country">যশোর</option>
                                <option value="38" name="country">ঝিনাইদহ</option>
                                <option value="39" name="country">খুলনা</option>
                                <option value="40" name="country">কুষ্টিয়া</option>
                                <option value="41" name="country">মাগুরা</option>
                                <option value="42" name="country">মেহেরপুর</option>
                                <option value="43" name="country">নড়াইল</option>
                                <option value="44" name="country">সাতক্ষীরা</option>
                                <option value="45" name="country">শেরপুর</option>
                                <option value="46" name="country">নেত্রকোনা </option>
                                <option value="47" name="country">ময়মনসিংহ </option>
                                <option value="48" name="country">জামালপুর</option>
                                <option value="49" name="country">বান্দরবান</option>
                                <option value="50" name="country">ব্রাহ্মনবাড়ীয়া</option>
                                <option value="51" name="country">চাঁদপুর</option>
                                <option value="52" name="country">চট্টগ্রাম</option>
                                <option value="53" name="country">কুমিল্লা</option>
                                <option value="54" name="country">কক্সবাজার</option>
                                <option value="55" name="country">ফেনী</option>
                                <option value="56" name="country">খাগড়াছড়ি</option>
                                <option value="57" name="country">লক্ষীপুর </option>
                                <option value="58" name="country">নোয়াখালী</option>
                                <option value="59" name="country">রাঙ্গামাটি</option>
                                <option value="60" name="country">পিরোজপুর </option>
                                <option value="61" name="country">পটুয়াখালী </option>
                                <option value="62" name="country">ঝালকাঠী</option>
                                <option value="63" name="country">ভোলা</option>
                                <option value="64" name="country">বরিশাল</option>
                                <option value="64" name="country">বরগুনা </option>
                            </select>
                        </div>
                       {/*  <!-- ==== HOSPITAL ==== --> */}
                        <div class="sh-info-box">
                            <label for="text">হাসপাতালের নাম</label>
                            <select name="" id="">
                              {/*   <!-- === Name of the hospital in Rangpur district of Rangpur division === --> */}
                                <option value="country" name="country">এখানে হাসপাতালের নাম লিখুন</option>
                                <option value="1" name="country">রংপুর মেডিকেল কলেজ ও হাসপাতাল</option>
                                <option value="2" name="country">গুড হেলথ হাসপাতাল</option>
                                <option value="3" name="country">ডক্টরস কমিউনিটি হাসপাতাল (প্রা.) লিমিটেড</option>
                                <option value="4" name="country">রংপুর সেন্ট্রাল হাসপাতাল</option>
                                <option value="5" name="country">রংপুর জেনারেল হাসপাতাল</option>
                                <option value="6" name="country">রংপুর হেলথ সিটি স্পেশালাইজড হসপিটাল অ্যান্ড
                                    ডায়াগনস্টিক সেন্টার</option>
                                <option value="7" name="country">ডে-নাইট হসপিটাল</option>
                                <option value="8" name="country">কাসির উদ্দিন মেমোরিয়াল মেডিকেল কলেজ অ্যান্ড হাসপাতাল -
                                    কেএমএমসিএইচ</option>
                                <option value="9" name="country">ইসলামী ব্যাংক কমিউনিটি হসপিটাল</option>
                                <option value="11" name="country">রংপুর কমিউনিটি মেডিকেল কলেজ ও হাসপাতাল</option>
                                <option value="12" name="country">রংপুর মা ও শিশু হাসপাতাল</option>
                                <option value="13" name="country">দ্য কিংস হাসপাতাল রংপুর</option>
                                <option value="14" name="country">সদর হাসপাতাল</option>
                                <option value="15" name="country">নর্দান প্রাইভেট মেডিকেল কলেজ ও হাসপাতাল</option>
                                <option value="16" name="country">হলি কেয়ার হাসপাতাল, রংপুর</option>
                                <option value="17" name="country">উইশ হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="18" name="country">প্রাইম মেডিকেল কলেজ হাসপাতাল</option>
                                <option value="19" name="country">হলি ক্রিসেন্ট হাসপাতাল</option>
                                <option value="20" name="country">অ্যাক্টিভ হাসপাতাল রংপুর</option>
                                <option value="21" name="country">উত্তমসেবা হাসপাতাল</option>
                                <option value="22" name="country">আপডেট ডায়াগনস্টিক রংপুর</option>
                                <option value="23" name="country">রংপুর চক্ষু হাসপাতাল</option>
                                <option value="24" name="country">রংপুর স্পেশালাইজড হাসপাতাল </option>
                                <option value="25" name="country">বিজিএম হাসপাতাল</option>
                                <option value="26" name="country">পপুলার হাসপাতাল</option>
                                <option value="27" name="country">ডেন্টাল ইউনিট, রংপুর মেডিকেল কলেজ হাসপাতাল</option>
                                <option value="28" name="country">ওরিয়ন হাসপাতাল, রংপুর</option>
                                <option value="29" name="country">প্রিন্স হাসপাতাল ও ডায়াগনস্টিক সেন্টার </option>
                                <option value="30" name="country">আশা হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="31" name="country">জয়তুন হাসপাতাল</option>
                                <option value="32" name="country">রংপুর তালুকদার হাসপাতাল প্রাইভেট লিমিটেড</option>
                                <option value="33" name="country">জেনারেল ডায়াগনস্টিক সেন্টার</option>
                                <option value="34" name="country">রংপুর কমিউনিটি মেডিকেল কলেজ</option>
                                <option value="35" name="country">রংপুর সিটি হাসপাতাল</option>
                                <option value="36" name="country">ফাস্ট কিউর স্পেশালাইজড হাসপাতাল ও ট্রমা সেন্টার
                                </option>
                                <option value="37" name="country">নিউ সোনার বাংলা জেনারেল হাসপাতাল</option>
                                <option value="38" name="country">দারুসসালাম জেনারেল হাসপাতাল</option>
                                <option value="39" name="country">আদর্শ জেনারেল হাসপাতাল</option>
                                <option value="40" name="country">র্যাডিসন স্পেশালাইজড হাসপাতাল, রংপুর</option>
                                <option value="41" name="country">রংপুর স্কয়ার হাসপাতাল</option>
                                <option value="42" name="country">রংপুর নবজাতক, শিশু ও মাতৃসেবা হাসপাতাল</option>
                                <option value="43" name="country">নর্থ স্টার হাসপাতাল</option>
                                <option value="44" name="country">স্বাস্থ্যসেবা হাসপাতাল</option>
                                <option value="45" name="country">মেরিয়াম চক্ষু হাসপাতাল, রংপুর</option>
                                <option value="46" name="country">আন্তর্জাতিক হাসপাতাল</option>
                                <option value="47" name="country">নাজমুন নাহার হাসপাতাল</option>
                                <option value="48" name="country">মাউন্ট প্যাসিফিক হাসপাতাল</option>
                                <option value="49" name="country">পপুলার ডায়াগনস্টিক সেন্টার-২</option>
                                <option value="50" name="country">এভারকেয়ার স্পেশালাইজড হাসপাতাল</option>
                                <option value="51" name="country">ভারোশা ডায়াগনস্টিক সার্ভিসেস অ্যান্ড হসপিটাল লিমিটেড
                                </option>
                                <option value="52" name="country">নিউ মাদারল্যান্ড হাসপাতাল</option>
                                <option value="53" name="country">লাইফ লাইন কমিউনিটি হসপিটাল প্রাইভেট লিমিটেড। লিমিটেড
                                </option>
                                <option value="54" name="country">রংপুর আধুনিক হাসপাতাল</option>
                                <option value="55" name="country">রংপুর হোমিওপ্যাথিক মেডিকেল কলেজ ও হাসপাতাল</option>
                                <option value="56" name="country">অ্যাপোলো চক্ষু হাসপাতাল</option>
                                <option value="57" name="country">এলমা জেনারেল হাসপাতাল </option>
                                <option value="58" name="country">মেডিনোভা ক্লিনিক ও নার্সিং হোম</option>
                                <option value="59" name="country">শিশু হাসপাতাল</option>
                                <option value="60" name="country">বাংলাদেশ হাসপাতাল</option>
                                <option value="61" name="country">এশিয়ান জেনারেল হাসপাতাল</option>
                                <option value="62" name="country">সোনার মদিনা হাসপাতাল</option>
                                <option value="63" name="country">আপডেট কেয়ার হাসপাতাল</option>
                                <option value="64" name="country">বন্ধন জেনারেল হাসপাতাল রংপুর</option>
                                <option value="64" name="country">ওয়ান জেনারেল হাসপাতাল </option>
                                <option value="64" name="country">রয়েল ক্লিনিক ও নার্সিং হোম </option>
                                <option value="64" name="country">এভারগ্রিন হাসপাতাল </option>
                                <option value="64" name="country">সাদমান জেনারেল হাসপাতাল </option>
                                <option value="64" name="country">মরিয়ম চক্ষু হাসপাতাল </option>
                                <option value="64" name="country">বেগম রোকেয়া মেডিকেল কলেজ ও হাসপাতাল </option>
                                <option value="64" name="country">ইমপালস কেয়ার হাসপাতাল </option>
                                <option value="64" name="country">তালুকদার হাসপাতাল </option>
                                <option value="64" name="country">সোনার বাংলার জেনারেল হাসপাতাল ও ডায়াগনস্টিক সেন্টার
                                </option>

                              {/*   <!-- === Name of the hospital in gaibndha district of Rangpur division === --> */}
                                <option value="64" name="country">ডিস্ট্রিক্ট গভর্নমেন্ট হাসপাতাল, গাইবান্ধা</option>
                                <option value="64" name="country">এসকেএস হাসপাতাল, মাস্টারপাড়া, গাইবান্ধা</option>
                                <option value="64" name="country">গাইবান্ধা গণস্বাস্থ্য কেন্দ্র হাসপাতাল</option>
                                <option value="64" name="country">গণ উন্নয়ন কেন্দ্র হাসপাতাল</option>
                                <option value="64" name="country">রাবেয়া ক্লিনিক এন্ড নার্সিং হোম হাসপাতাল গাইবান্ধা
                                </option>
                                <option value="64" name="country">ডিজিটাল এক্স-রে সেন্টার, সদর হাসপাতাল ১ম গাইবান্ধা।
                                </option>
                               {/*  <!-- === Name of the hospital in kurigram district of rangpur division --> */}
                                <option value="64" name="country">কুড়িগ্রাম জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">গ্রীন লাইফ জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">পপুলার জেনারেল (পিজি) হাসপাতাল</option>
                                <option value="64" name="country">কুড়িগ্রাম ডায়াবেটিক হাসপাতাল</option>
                                <option value="64" name="country">শেবা ক্লিনিক কুড়িগ্রাম</option>
                                <option value="64" name="country">পপুলার ডায়াগনস্টিক সেন্টার লিঃ (কুড়িগ্রাম)</option>
                                <option value="64" name="country">আদর্শ ক্লিনিক ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">কামারজানি সরকারি হাসপাতাল</option>
                                <option value="64" name="country">সুর্যের হাসি ক্লিনিক</option>
                               {/*  <!-- === Name of the hospital in nilphamari district of rangpur division === --> */}
                                <option value="64" name="country">আধুনিক সদর হাসপাতাল, নীলফামারী</option>
                                <option value="64" name="country">সম্মিলিত সামরিক হাসপাতাল সৈয়দপুর, নীলফামারী</option>
                                <option value="64" name="country">সরকারি কুষ্ঠ হাসপাতাল, নীলফামারী</option>
                                <option value="64" name="country">নীলফামারীর নাগরিক হাসপাতাল</option>
                                <option value="64" name="country">এ আর জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">নীলফামারী মেডিকেল কলেজ</option>
                                <option value="64" name="country">রেলওয়ে হাসপাতাল, সৈয়দপুর, নীলফামারী।</option>
                                <option value="64" name="country">জনতা ক্লিনিক ও ডায়াগনস্টিক সেন্টার, নীলফামারী
                                </option>
                                <option value="64" name="country">নীলফামারী শিশু হাসপাতাল</option>
                                {/* <!-- === Name of the hospital in lalmonirhat district of rangpur division === --> */}
                                <option value="64" name="country">লালমনিরহাট সদর হাসপাতাল</option>
                                {/* <!-- === Name of the hospital in dinajpur district of rangpur division === --> */}
                                <option value="64" name="country">দিনাজপুর জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">ইসলামী ব্যাংক কমিউনিটি হাসপাতাল দিনাজপুর লিমিটেড
                                </option>
                                <option value="64" name="country">সেন্ট ভিনসেন্ট হাসপাতাল দিনাজপুর</option>
                                <option value="64" name="country">দিনাজপুর মেডিকেল কলেজ ও হাসপাতাল</option>
                                <option value="64" name="country">চেকআপ ডায়াগনস্টিকস অ্যান্ড হাসপাতাল</option>
                                <option value="64" name="country">দিনাজপুর ডায়াবেটিস ও স্বস্থসেবা হাসপাতাল</option>
                                <option value="64" name="country">এইচ.কে. মাদার কেয়ার হাসপাতাল</option>
                                <option value="64" name="country">দক্ষিণ দিনাজপুর জেলা হাসপাতাল</option>
                                <option value="64" name="country">জিয়া হার্ট ফাউন্ডেশন হাসপাতাল & রিসার্চ ইনস্টিটিউট
                                </option>
                                <option value="64" name="country">দিনাজপুর মেডিকেল কলেজ</option>
                                <option value="64" name="country">দিনাজপুর সদর হাসপাতাল জরুরি অবস্থা</option>
                                <option value="64" name="country">গাউসুল আজম বিএনএসবি চক্ষু হাসপাতাল, নিউটাউন, দিনাজপুর
                                </option>
                                <option value="64" name="country">অরবিন্দ শিশু হাসপাতাল, দিনাজপুর</option>
                                <option value="64" name="country">হেলথ কেয়ার প্রাইভেট লিমিটেড হাসপাতাল</option>
                                <option value="64" name="country">শহীদ আসাদুল্লাহ আইডিয়াল হাসপাতাল</option>
                                <option value="64" name="country">লাইফ কেয়ার হাসপাতাল</option>
                                <option value="64" name="country">বেস্ট কেয়ার ডায়াগনস্টিক সেন্টার অ্যান্ড হসপিটাল লি.
                                </option>
                                <option value="64" name="country">পলি ক্লিনিক</option>
                                <option value="64" name="country">দিনাজপুর স্পেশালাইজড হসপিটাল</option>
                                <option value="64" name="country">আলোহা স্বাস্থ্য সেবা কেন্দ্র ও হাসপাতাল</option>
                                <option value="64" name="country">দিনাজপুর সেন্ট্রাল মেডিকেল কলেজ ও হাসপাতাল ক্যাম্পাস
                                </option>
                                <option value="64" name="country">Kr দিনাজপুর লায়ন চক্ষু হাসপাতাল</option>
                                <option value="64" name="country">মাতৃসেবা হাসপাতাল দিনাজপুর</option>
                                <option value="64" name="country">জি.সি. মেমোরিয়াল হাসপাতাল</option>
                                <option value="64" name="country">বসুন্ধরা হাসপাতাল</option>
                                <option value="64" name="country">জনতা ক্লিনিক ও নার্সিং হোম</option>
                                <option value="64" name="country">দিনাজপুর সদর হাসপাতাল</option>
                                <option value="64" name="country">লাইট পল্লী লিমিটেড ও হাসপাতাল</option>
                                <option value="64" name="country">দিনাজপুর প্যারালাইসিস ও প্রতিবন্ধী পুনর্বাসন কান্দ্র
                                    হাসপাতাল</option>
                                <option value="64" name="country">অপারেশন থিয়েটার (দিনাজপুর জেনারেল হাসপাতাল)</option>
                                <option value="64" name="country">শহীদ আসাদুল্লাহ হাসপাতাল</option>
                                <option value="64" name="country">মাতৃসেবা হসপিটাল এন্ড ডায়াগনস্টিক</option>
                                <option value="64" name="country">ধানশেরী ক্লিনিক</option>
                                <option value="64" name="country">রশিদপুর গ্রামীণ হাসপাতাল</option>
                                <option value="64" name="country">শহীদ জিয়াউর রহমান রেড ক্রিসেন্ট হাসপাতাল</option>
                               {/*  <!-- === Name of the hospital in Thakurgaoun district of rangpur division === --> */}
                                <option value="64" name="country">ঠাকুরগাঁও স্বাস্থ্যসেবা হাসপাতাল</option>
                                <option value="64" name="country">ঠাকুরগাঁও টিবি হাসপাতাল</option>
                                <option value="64" name="country">পুরাতন সদর হাসপাতাল ঠাকুরগাঁও</option>
                                <option value="64" name="country">ঠাকুরগাঁও কমিউনিটি হাসপাতাল ও ডায়াগনস্টিক সেন্টার
                                </option>
                                <option value="64" name="country">ঠাকুরগাঁও বিজিবি হাসপাতাল</option>
                                <option value="64" name="country">ঠাকুরগাঁও ডায়াবেটিস ও স্বাস্থ্যসেবা হাসপাতাল</option>
                                <option value="64" name="country">নিউ আইডিয়াল হাসপাতাল</option>
                                <option value="64" name="country">ম্যাম হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">নর্দার্ন হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">ফ্রেন্ডস অ্যাপোলো হাসপাতাল</option>
                                <option value="64" name="country">সুরক্ষা হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">নিউ পপুলার হাসপাতাল এবং ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">আদর্শ হাসপাতাল</option>
                                <option value="64" name="country">ইনসাফ জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">এসডিও শিশু ও কমিউনিটি হাসপাতাল</option>
                                <option value="64" name="country">নিউরন হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">প্রাইম হাসপাতাল অ্যান্ড ডায়াগনস্টিক কমপ্লেক্স
                                </option>
                                <option value="64" name="country">নিউ স্কয়ার হাসপাতাল</option>
                                <option value="64" name="country">মাদার তেরেসা হাসপাতাল</option>
                               {/*  <!-- === Name of the hospital in Panchagorh district of rangpur division === --> */}
                                <option value="64" name="country">আধুনিক সদর হাসপাতাল, পঞ্চগড়</option>
                                <option value="64" name="country">পঞ্চগড় ডায়াবেটিক হাসপাতাল</option>
                                <option value="64" name="country">স্বাস্থ্যসেবা বিশেষায়িত হাসপাতাল, পঞ্চগড়।</option>
                                <option value="64" name="country">নিউ আদর্শ হাসপাতাল</option>
                                <option value="64" name="country">নিউ লাইফ ক্লিনিক পঞ্চগড়</option>
                                <option value="64" name="country">পঞ্চগড় সদর হাসপাতাল</option>
                                <option value="64" name="country">কেন্দ্রীয় হাসপাতাল ও ডায়াগনস্টিক</option>
                                <option value="64" name="country">সিটি জেনারেল হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">মেরি স্টোপস মিনি ক্লিনিক</option>
                                <option value="64" name="country">নর্থ পয়েন্ট মেডিকেল কলেজ ও হাসপাতাল</option>
                                <option value="64" name="country">সুরমা জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">দেবীগঞ্জ সদর হাসপাতাল</option>
                                <option value="64" name="country">দেশ ক্লিনিক ও ডায়াগনস্টিক</option>
                                <option value="64" name="country">সুজলী হাসপাতাল</option>
                                <option value="64" name="country">সূর্য হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                {/* <!-- === Name of the hospital in nator district of rajshahi division === --> */}
                                <option value="64" name="country">২৫০ শয্যা বিশিষ্ট জেলা সদর হাসপাতাল, নাটোর</option>
                                <option value="64" name="country">নাটোর জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">নাটোরে ট্রমা সেন্টার & হসপিটাল</option>
                                <option value="64" name="country">নাটোর আধুনিক সদর হাসপাতাল</option>
                                <option value="64" name="country">আল-সান হাসপাতাল</option>
                               {/*  <!-- === Name of hospital in rajshahi district of rajshahi division === --> */}
                                <option value="64" name="country">রাজশাহী মেডিকেল কলেজ হাসপাতাল</option>
                                <option value="64" name="country">টিবি হাসপাতাল, রাজশাহী</option>
                                <option value="64" name="country">রাজশাহী মডেল হাসপাতাল</option>
                                <option value="64" name="country">রাজশাহী শিশু হাসপাতাল</option>
                                <option value="64" name="country">রাজশাহী রয়্যাল হাসপাতল ও ডায়াগনস্টিক সেন্টার (প্রা)
                                    লিঃ</option>
                                <option value="64" name="country">রাজশাহী সেন্ট্রাল হাসপাতাল</option>
                                <option value="64" name="country">রাজশাহী মেট্রোপলিটন হাসপাতাল</option>
                                <option value="64" name="country">রাজশাহী সিটি হাসপাতাল</option>
                                <option value="64" name="country">খ্রিস্টান মিশন হাসপাতাল, রাজশাহী</option>
                                <option value="64" name="country">রাজশাহী ডায়াবেটিক অ্যাসোসিয়েশন জেনারেল হাসপাতাল
                                </option>
                                <option value="64" name="country">ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল, রাজশাহী</option>
                                <option value="64" name="country">রাজশাহী জেনারেল হাসপাতাল ও ডায়াগনস্টিক সেন্টার
                                </option>
                                <option value="64" name="country">রাজশাহী কমফোর্ট হাসপাতাল</option>
                                <option value="64" name="country">জমজম ইসলামী হাসপাতাল</option>
                                <option value="64" name="country">বিভাগীয় পুলিশ হাসপাতাল, রাজশাহী</option>
                                <option value="64" name="country">কমফোর্ট সিটি হাসপাতাল ও ডায়াগনস্টিক সেন্টার। কমফোর্ট
                                    সিটি বিশ্ববিদ্যালয় এন্ড ডায়াগনস্টিক কেন্দ্র</option>
                                <option value="64" name="country">ডেন্টাল হাসপাতাল, রাজশাহী</option>
                                <option value="64" name="country">ওয়ান</option>
                                <option value="64" name="country">আউটডোর, রাজশাহী মেডিকেল কলেজ হাসপাতাল</option>
                                <option value="64" name="country">বামরুনগ্রাদ আন্তর্জাতিক হাসপাতাল প্রতিনিধি অফিস
                                    রাজশাহী বাংলাদেশ</option>
                                <option value="64" name="country">মক্কা চক্ষু হাসপাতাল- রাজশাহী</option>
                                <option value="64" name="country">বাংলাদেশ চক্ষু হাসপাতাল রাজশাহী লিমিটেড</option>
                                <option value="64" name="country">মাতৃভূমি হাসপাতাল</option>
                                <option value="64" name="country">রাজশাহী বিশ্ববিদ্যালয় মেডিকেল সেন্টার ইউনিট ২
                                </option>
                                <option value="64" name="country">কায়সার মেমোরিয়াল হাসপাতাল</option>
                                <option value="64" name="country">রাজশাহী চক্ষু হাসপাতাল (BNSB)</option>
                                <option value="64" name="country">উত্তরবঙ্গ মডেল হাসপাতাল ও ফেয়ার ডায়াগনস্টিক সেন্টার
                                </option>
                                <option value="64" name="country">আমানা হাসপাতাল লিমিটেড</option>
                                <option value="64" name="country">বরেন্দ্র মেডিকেল কলেজ ও হাসপাতাল</option>
                                <option value="64" name="country">ব্রিজ হাসপাতাল</option>
                                <option value="64" name="country">রেলওয়ে হাসপাতাল, রাজশাহী</option>
                                <option value="64" name="country">রাজশাহী পেডিয়াট্রিক হাসপাতাল</option>
                                <option value="64" name="country">রাজশাহী এভারকেয়ার হাসপাতাল</option>
                                <option value="64" name="country">রাজশাহী বক্ষব্যাধি ক্লিনিক</option>
                                <option value="64" name="country">রাফি জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">বরেন্দ্র মেডিকেল ইউনিট-২</option>
                                <option value="64" name="country">মুনজু হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">মেডিপথ জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">বসুন্ধরা হাসপাতাল ও ডায়াগনস্টিক কেন্দ্র</option>
                                <option value="64" name="country">শিশু বিকাশ কেন্দ্র রাজশাহী মেডিকেল কলেজ হাসপাতাল
                                </option>
                                <option value="64" name="country">কেন্দ্রীয় হাসপাতাল</option>
                                <option value="64" name="country">আধুনিক চক্ষু হাসপাতাল, রাজশাহী</option>
                                <option value="64" name="country">ইসলামী ব্যাংক হাসপাতাল, ভবন ০১</option>
                                <option value="64" name="country">রায়শাহী শিশু হাসপাতাল</option>
                                <option value="64" name="country">রাজশাহী জেনারেল হাসপাতাল ও ডায়াগনস্টিক সেন্টার
                                    (এমআরআই ইউনিট)</option>
                                <option value="64" name="country">রুয়েট কেন্দ্রীয় হাসপাতাল</option>
                                <option value="64" name="country">লায়ন্স চক্ষু হাসপাতাল</option>
                                {/* <!-- === Name of hospital in sirajganj district oh rafshahi division === --> */}
                                <option value="64" name="country">জেনারেল হাসপাতাল, সিরাজগঞ্জ</option>
                                <option value="64" name="country">মেডিনোভা হাসপাতাল কমপ্লেক্স, সিরাজগঞ্জ</option>
                                <option value="64" name="country">অ্যাভিসেনা হাসপাতাল</option>
                                <option value="64" name="country">সিরাজগঞ্জ চক্ষু হাসপাতাল</option>
                                <option value="64" name="country">সিরাজগঞ্জ কমিউনিটি হাসপাতাল</option>
                                <option value="64" name="country">লাইলি জেবু হাসপাতাল</option>
                                <option value="64" name="country">শহীদ এম মনসুর আলী মেডিকেল কলেজ হাসপাতাল, সিরাজগঞ্জ
                                </option>
                                <option value="64" name="country">সেবা জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">আরবান হাসপাতাল</option>
                                <option value="64" name="country">উত্তরবঙ্গ মেডিকেল কলেজ ও হাসপাতাল</option>
                                <option value="64" name="country">কেন্দ্রীয় জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">জ্জ্বল স্বাস্থ্য বিশেষায়িত হাসপাতাল</option>
                                <option value="64" name="country">সিটি জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">এসকোয়ায়ার হাসপাতাল</option>
                                <option value="64" name="country">খাজা ইউনুস আলী মেডিকেল কলেজ ও হাসপাতাল</option>
                                <option value="64" name="country">শহীদ এম মনসুর আলী মেডিকেল কলেজ, সিরাজগঞ্জ</option>
                                <option value="64" name="country">সিরাজগঞ্জ কেন্দ্রীয় হাসপাতাল কমপ্লেক্স</option>
                                <option value="64" name="country">দি পপুলার দিয়াগোনিস্টিক সেন্টারে</option>
                                {/* <!-- === Name of hospital in pabna district of rajshahi division === --> */}
                                <option value="64" name="country">পাবনা কেন্দ্রীয় হাসপাতাল</option>
                                <option value="64" name="country">প্যাসিফিক ডায়াগনস্টিক সেন্টার এবং বিশেষায়িত হাসপাতাল
                                </option>
                                <option value="64" name="country">পাবনা ডায়াবেটিক হাসপাতাল</option>
                                <option value="64" name="country">টিবি হাসপাতাল</option>
                                <option value="64" name="country">মেন্টাল হাসপাতাল পাবনা </option>
                                <option value="64" name="country">পাবনা সেবা হাসপাতাল</option>
                                <option value="64" name="country">পাবনা কমিউনিটি হাসপাতাল</option>
                                <option value="64" name="country">ফেয়ার হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">পাবনা মেডিকেল কলেজ</option>
                                <option value="64" name="country">বাংলাদেশ মনোশিক হাসপাতাল (প্রা.)</option>
                                <option value="64" name="country">পাবনা ইসামতি ক্লিনিক</option>
                                <option value="64" name="country">পাবনা চক্ষু হাসপাতাল ও ফাকো সেন্টার</option>
                              {/*   <!-- === Name of hospital in bogura district of rajshahi division === --> */}
                                <option value="64" name="country">250 শয্যা বিশিষ্ট মোহাম্মদ আলী হাসপাতাল সম্প্রসারণ
                                    ভবন, বগুড়া</option>
                                <option value="64" name="country">শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল, বগুড়া
                                </option>
                                <option value="64" name="country">স্বাস্থ্য নগরী বগুড়া</option>
                                <option value="64" name="country">পাবলিক জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">SAIC জেনারেল হাসপাতাল লি.</option>
                                <option value="64" name="country">বগুড়া খ্রিস্টান (মিশন) হাসপাতাল</option>
                                <option value="64" name="country">ইসলামী হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">দেশ হাসপাতাল</option>
                                <option value="64" name="country">ইউনাইটেড জেনারেল হাসপাতাল এবং ডায়াগনস্টিক</option>
                                <option value="64" name="country">রয়েল হাসপাতাল বগুড়া</option>
                                <option value="64" name="country">বনানী জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">সাইক জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">ইনডিপেনডেন্ট জেনারেল হাসপিটাল</option>
                                <option value="64" name="country">টিএমএসএস মেডিকেল কলেজ ও রাফাতুল্লাহ কমিউনিটি হাসপাতাল,
                                    বগুড়া</option>
                                <option value="64" name="country">সোনালী জেনারেল হাসপাতল</option>
                                <option value="64" name="country">জিইউকে চক্ষু হাসপাতাল, বনানী, বগুড়া</option>
                                <option value="64" name="country">টিএমএসএস মেডিকেল কলেজ</option>
                                {/* <!-- === Name of hospital in Chapainawabganj district of rajshahi division === --> */}
                                <option value="64" name="country">আধুনিক সদর হাসপাতাল</option>
                                <option value="64" name="country">ম্যাক্স হাসপাতাল চাঁপাইনবাবগঞ্জ</option>
                                <option value="64" name="country">ল্যাব ওয়ান মেডিকেল সার্ভিসেস</option>
                                <option value="64" name="country">সেবা ক্লিনিক</option>
                                <option value="64" name="country">চাঁপাইনবাবগঞ্জ চক্ষু হাসপাতাল</option>
                                <option value="64" name="country">পদ্মা ক্লিনিক ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">250 শয্যা বিশিষ্ট জেলা হাসপাতাল চাঁপাইনবাবগঞ্জ
                                </option>
                                <option value="64" name="country">মহারাজপুর দীর্ঘদিন</option>
                                <option value="64" name="country">রোজ মেডিকেল সেন্টার</option>
                                <option value="64" name="country">ইসলামী হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">সিটি ক্লিনিক, চাঁপাইনবাবগঞ্জ।</option>
                                <option value="64" name="country">অ্যাপোলো হাসপাতাল তথ্য কেন্দ্র, অ্যাপোলো হাব রাজশাহী
                                </option>
                                <option value="64" name="country">জেনারেল ডায়াগনস্টিক সেন্টার, চাঁপাইনবাবগঞ্জ</option>
                                {/* <!-- === Name of hospital in Naogaon district of rajshahi division === --> */}
                                <option value="64" name="country">প্রসূতি হাসপাতাল নওগাঁ</option>
                                <option value="64" name="country">নওগাঁ মেডিকেল কলেজ ও হাসপাতাল</option>
                                <option value="64" name="country">দি পপুলার হাসপাতাল নওগাঁ</option>
                                <option value="64" name="country">প্রাইম ল্যাব ও হাসপাতাল</option>
                                <option value="64" name="country">নওগাঁ সদর হাসপাতাল</option>
                                <option value="64" name="country">নওগাঁ ওল্ড হাসপাতাল</option>
                                <option value="64" name="country">নওগাঁ স্কয়ার হাসপাতাল</option>
                                <option value="64" name="country">খিদমাহ জেনারেল হাসপাতাল ও ডায়াগনস্টিক সেন্টার, নওগাঁ
                                </option>
                                <option value="64" name="country">নওগাঁ ডিজিটাল শিশু হাসপাতাল</option>
                                <option value="64" name="country">হলি ফ্যামিলি হাসপাতাল</option>
                                <option value="64" name="country">হলি ক্রিসেন্ট হাসপাতাল</option>
                                <option value="64" name="country">গ্রীন লাইফ হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">ল্যাবেইড ডায়াগনস্টিক নওগাঁ</option>
                                <option value="64" name="country">বলাকা ক্লিনিক অ্যান্ড ডায়াগনস্টিক সেন্টার নওগাঁ
                                </option>
                                <option value="64" name="country">নওগাঁ ইবনে সিনা হাসপাতাল ও ডায়াগনস্টিক সেন্টার
                                </option>
                                <option value="64" name="country">ইস্পাহানি ইসলামিয়া আই ইনস্টিটিউট ও হাসপাতাল</option>
                                <option value="64" name="country">সেবা ক্লিনিক</option>
                                <option value="64" name="country">নওগাঁ শিশু হাসপাতাল ও ডায়াগনস্টিক</option>
                                <option value="64" name="country">খিদমাহ জেনারেল হাসপাতাল ও ডায়াগনস্টিক সেন্টার, নওগাঁ
                                </option>
                                <option value="64" name="country">ডায়নামিক ল্যাব এবং হাসপাতাল</option>
                                <option value="64" name="country">স্কয়ার ক্লিনিক</option>
                                <option value="64" name="country">মিরপুর কমিউনিটি ক্লিনিক</option>
                                <option value="64" name="country">বাংলাদেশ বেটার কেয়ার হাসপাতাল ও ল্যাব</option>
                                <option value="64" name="country">সিটি হাসপাতাল ও ডায়াগনস্টিক</option>
                                {/* <!-- === Name of hospital in joypurhat district of rajshahi division === --> */}
                                <option value="64" name="country">জেলা হাসপাতাল, জয়পুরহাট।</option>
                                <option value="64" name="country">ফ্যামিলি কেয়ার ল্যাব ও হাসপাতাল</option>
                                <option value="64" name="country">জয়পুরহাট আধুনিক হাসপাতাল</option>
                                <option value="64" name="country">কাদোয়া কমিউনিটি ক্লিনিক</option>
                                <option value="64" name="country">হাই কেয়ার ক্লিনিক ও নার্সিং হোম</option>
                                <option value="64" name="country">খঞ্জনপুর মিশন চক্ষু হাসপাতাল</option>
                                <option value="64" name="country">সাদমান ক্লিনিক ও হাসপাতাল</option>
                                <option value="64" name="country">ইমু জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">গ্রিন জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">জয়পুরহাট ডায়াবেটিস হাসপাতাল</option>
                                <option value="64" name="country">জয়পুরহাট পুলিশ হাসপাতাল</option>
                                <option value="64" name="country">গ্রাজুয়েট জেনারেল হাসপাতাল </option>
                                <option value="64" name="country">আধুনিক জেনারেল হাসপাতাল ও ডায়াগনস্টিক সেন্টার
                                </option>
                                {/* <!-- ============================================================================== -->

                                <!-- === Name of hospital in sylhet district of sylhet division === --> */}
                                <option value="64" name="country">ইকরা প্রতিবন্ধী শিশু হাসপাতাল</option>
                                <option value="64" name="country">রহমান হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">অ্যালাইড ক্রিটিক্যাল কেয়ার অ্যান্ড জেনারেল হাসপাতাল
                                </option>
                                <option value="64" name="country">আনোয়ার জেনারেল হাসপাতাল ও ল্যাপারোস্কোপিক সার্জারি
                                    সেন্টার</option>
                                <option value="64" name="country">জালালাবাদ ক্লিনিক</option>
                                <option value="64" name="country">খান বাহাদুর আহিয়া জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">পপুলার মেডিকেল সেন্টার লিমিটেড</option>
                                <option value="64" name="country">মিলেনিয়াম হাসপাতাল</option>
                                <option value="64" name="country">ওয়ান</option>
                                <option value="64" name="country">গ্রামীণ হাসপাতাল</option>
                                <option value="64" name="country">সিটি পলি ক্লিনিক ও শিশু হাসপাতাল</option>
                                <option value="64" name="country">নর্থ ইস্ট ক্যান্সার হাসপাতাল, সিলেট</option>
                                <option value="64" name="country">স্বাস্থ্যসেবা হাসপাতাল ও ট্রমা সেন্টার</option>
                                <option value="64" name="country">প্রাইম হাসপাতাল, সিলেট</option>
                                <option value="64" name="country">শেবা পলি ক্লিনিক</option>
                                <option value="64" name="country">আল-রায়ান হাসপাতাল</option>
                                <option value="64" name="country">শাহজালাল হাসপাতাল</option>
                                <option value="64" name="country">ন্যাশনাল হার্ট ফাউন্ডেশন হাসপাতাল</option>
                                <option value="64" name="country">আদর্শ হাসপাতাল ও কার্ডিয়াক সেন্টার</option>
                                <option value="64" name="country">সিলেট ট্রমা সেন্টার ও বিশেষায়িত হাসপাতাল</option>
                                <option value="64" name="country">ফ্রিডম জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">টিবি হাসপাতাল</option>
                                <option value="64" name="country">আল-ফালাহ হাসপাতাল</option>
                                <option value="64" name="country">ভার্ড চক্ষু হাসপাতাল, জটারপুর, সিলেট</option>
                                {/* <!-- ================================================================== -->
                                <!-- === Name of hospital in sunamganj of sylhet division === --> */}
                                <option value="64" name="country">বিশ্বম্ভর পুর হাসপাতাল</option>
                                <option value="64" name="country">আবুল খায়ের হাসপাতাল, ঝিগলী</option>
                                <option value="64" name="country">জনতা চক্ষু হাসপাতাল</option>
                                <option value="64" name="country">ফরচুন জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">বঙ্গবন্ধু হাসপাতাল</option>
                                <option value="64" name="country">সুনামগঞ্জ আধুনিক চক্ষু হাসপাতাল</option>
                                <option value="64" name="country">গোবিন্দগঞ্জ জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">খন্দকার আলকাস ও আমিনা হাসপাতাল</option>
                                <option value="64" name="country">সুনামগঞ্জ মেডিকেল কলেজ, সুনামগঞ্জ</option>
                                <option value="64" name="country">VARD চক্ষু হাসপাতাল</option>
                                <option value="64" name="country">আর অ্যান্ড এম জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">সুনামগঞ্জ আধুনিক চক্কু হাসপাতাল</option>
                                <option value="64" name="country">টিবি হাসপাতাল</option>
                                <option value="64" name="country">সুনামগঞ্জ মেডিকেল কলেজ ও হাসপাতাল</option>
                                <option value="64" name="country">সুনামগঞ্জ মেডিকেল কলেজ, সুনামগঞ্জ</option>
                                <option value="64" name="country">হেলথ কেয়ার পলি ক্লিনিক ও ডায়াগনস্টিক সেন্টার,
                                </option>
                                <option value="64" name="country">সুনামগঞ্জ মডার্ন হাসপাতাল</option>
                                <option value="64" name="country">চক্ষু চিকিৎসা হাসপাতাল সুনামগঞ্জ</option>
                                <option value="64" name="country">সুনামগঞ্জ মেডিকেল কলেজ</option>
                                <option value="64" name="country">সুনামগঞ্জ সদর হাসপাতাল</option>
                               {/*  <!-- ====================================================== -->
                                <!-- === Name of hospital in moulvibazar district of sylhet === --> */}
                                <option value="64" name="country">শাহ জালাল প্রাইভেট হাসপাতাল ও ডায়াগনস্টিক সেন্টার
                                </option>
                                <option value="64" name="country">লাইফ কেয়ার হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">রয়েল প্রাইভেট হাসপাতাল</option>
                                <option value="64" name="country">নুরজাহান (বেসরকারি) হাসপাতাল</option>
                                <option value="64" name="country">মৌলভীবাজার বিএনএসবি চক্ষু হাসপাতাল</option>
                                <option value="64" name="country">মৌলভীবাজার আধুনিক চক্ষু হাসপাতাল</option>
                                <option value="64" name="country">লাইফ লাইন কার্ডিয়াক হাসপাতাল ও ডায়াগনস্টিক সেন্টার
                                </option>
                                <option value="64" name="country">টিবি হাসপাতাল</option>
                                <option value="64" name="country">সৈয়দ আব্দুল মুনিম চক্ষু হাসপাতাল</option>
                                <option value="64" name="country">আল হামরা বেসরকারি হাসপাতাল</option>
                                <option value="64" name="country">বদরুন্নেসা বেসরকারি হাসপাতাল</option>
                                <option value="64" name="country">আশা বেসরকারি হাসপাতাল</option>
                                <option value="64" name="country">মৌলভীবাজার আল ফালাহ হাসপাতাল</option>
                                <option value="64" name="country">জেনারেল প্রাইভেট হাসপাতাল</option>
                                {/* <!-- ========================================================== -->
                                <!-- === Name of hospital in habiganj district of sylhet ==== --> */}
                                <option value="64" name="country">ইউনাইটেড জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">মাদার কেয়ার জেনারেল হাসপাতাল ও ডায়াগনস্টিক সেন্টার
                                </option>
                                <option value="64" name="country">ইসলামী চক্ষু হাসপাতাল</option>
                                <option value="64" name="country">জাসপুস হবিগঞ্জ আধুনিক চক্ষু হাসপাতাল, হবিগঞ্জ</option>
                                <option value="64" name="country">কেন্দ্রীয় হাসপাতাল ও ডায়াগনস্টিক সেন্টার</option>
                                <option value="64" name="country">ফয়েজ জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">মুন জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">হবিগঞ্জ ডায়াবেটিক ও জেনারেল হাসপাতাল</option>
                                <option value="64" name="country">এ কে হাসপাতাল</option>
                                <option value="64" name="country">ল্যাব এইড</option>
                                <option value="64" name="country">হবিগঞ্জ হেলথ কেয়ার হাসপাতাল</option>
                                <option value="64" name="country">চান্দের হাসি হাসপাতাল লিমিটেড।</option>
                                <option value="64" name="country">২৫০ শয্যা বিশিষ্ট জেলা সদর হাসপাতাল, হবিগঞ্জ</option>
                                {/* <!-- ========================================================================== --> */}
                            </select>
                        </div>
                    </div>
                    <div class="sh-patient-information-container">
                       {/*  <!-- ==== DIVISION ==== --> */}
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
                        {/* <!-- ==== DOCTORS NAME ==== --> */}
                        <div class="sh-info-box">
                            <label for="text">ডাক্তারের নাম </label>
                            <input type="text" placeholder="এখানে ডাক্তারের নাম লিখুন"/>
                        </div>
                       {/*  <!-- ==== DISTRICT ==== --> */}
                        <div class="sh-info-box">
                        </div>

                    </div>
                   {/*  <!-- === FIND BUTTON === --> */}
                    <div onclick="doctorProfile()" class="sh-find-btn"><button type="button"
                            name="button">খুঁজুন</button></div>
                </div>
            </div>
            {/* <!-- === SUBMIT BUTTON === --> */}
            <div class="sh-submit-btn"><button type="submit" name="submit">সংরক্ষণ করুন</button></div>
            {/* <!-- === DOCTOR PROFILE SHOWING === --> */}
            <div class="sh-show-doctor-profile-section">
                <div class="sh-doctor-profile-showing-cart">
                    <div class="sh-showing-image"><img src="img/doctor_2785482.png" alt=""/></div>
                    <div class="sh-showing-details">
                        <h3>রিউম্যাটোলজি ও মেডিসিন বিশেষজ্ঞ </h3>
                        <h1>ডাঃ মোঃ সাদিকুল ইসলাম সাদিক </h1>
                        <p>এমবিবিএস, বিসিএস (স্বাস্থ্য)</p>
                        <p>এমডি (রিউম্যাটোলজি), পিজি হাসপাতাল, ঢাকা</p>
                        <p>এফএসিআর (আমেরিকা)</p>
                        <p>ইসিআরডি (সুইজারল্যান্ড)</p>
                        <p>বাত-ব্যথা, কোমর ব্যথা, হাড়ক্ষয়, বাতরোগ ও মেডিসিন বিশেষজ্ঞ </p>
                        <p>রংপুর মেডিকেল কলেজ ও হাসপাতল</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default ChangeDoctor;