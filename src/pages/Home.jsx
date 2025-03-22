import { faArrowRight, faBangladeshiTakaSign, faBarsStaggered, faBell, faCheck, faClock, faHome, faHospitalUser, faHouseMedical, faNotesMedical, faSearch, faTrash, faUserDoctor, faUsers, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink,  Link } from 'react-router-dom'
function hidemenu(){
    document.querySelector('.sh-left-side-menu-container').style.display = 'none';
    document.querySelector('.sh-menu-hover').style.display = 'none';
    document.querySelector('.sh-left-side-menu-container-icon').style.display = 'block';
    document.querySelector('.show-short-menu').style.display = 'block';
}
function showSidemenu(){
    document.querySelector('.sh-left-side-menu-container').style.display = 'block';
    document.querySelector('.sh-menu-hover').style.display = 'block';
    document.querySelector('.sh-left-side-menu-container-icon').style.display = 'none';
    document.querySelector('.show-short-menu').style.display = 'none';
}
const Home = () => {
  return (
    <div>
      {/* mobile responsive */}
      <div class="sh-mobile-navbar">
        <ul>
            <li><NavLink to='/' style={({ isActive }) => ({color: isActive ? "white" : "black",  backgroundColor: isActive ? "#0065c0" : "transparent", })}><FontAwesomeIcon icon={faHome}/></NavLink></li>
            <li><NavLink to="/patient-info"> <FontAwesomeIcon icon={faHospitalUser}/></NavLink></li>
            <li><NavLink to="/appointment-details"><FontAwesomeIcon icon={faNotesMedical}/></NavLink></li>
            <li><NavLink to="/doctor-time-manage"><FontAwesomeIcon icon={faClock}/></NavLink></li>
            <li><NavLink to="/doctor-profile"><FontAwesomeIcon icon={faUserDoctor}/></NavLink></li>
            <li><NavLink to="/change-doctor"><FontAwesomeIcon icon={faSearch}/></NavLink></li>
        </ul>
        </div>
      <div class="sh-left-and-top-items-section">
       {/*  <!-- === LEFT SIDE MENU ITEMS ICONS === --> */}
        <div class="sh-left-side-menu-container-icon">
            <div class="sh-brand-logo-icons">
                <Link to="/"><FontAwesomeIcon icon={faHouseMedical}/></Link>
            </div>

            <div class="sh-left-side-menu-items-icons">
                <ul>
                    <li><NavLink to='/'><FontAwesomeIcon icon={faHome}/></NavLink></li>
                    <li><NavLink to="/patient-info"><FontAwesomeIcon icon={faHospitalUser}/></NavLink></li>
                    <li><NavLink to="/appointment-details"><FontAwesomeIcon icon={faNotesMedical}/></NavLink></li>
                    <li><NavLink to="/doctor-time-manage"><FontAwesomeIcon icon={faClock}/></NavLink></li>
                    <li><NavLink to="/doctor-profile"><FontAwesomeIcon icon={faUserDoctor}/></NavLink></li>
                    <li><NavLink to="/change-doctor"><FontAwesomeIcon icon={faSearch}/></NavLink></li>
                </ul>
            </div>
        </div>
        {/* <!-- ================================ --> */}
        <div class="sh-left-side-menu-container sh-close">
            <div class="sh-brand-logo">
                <Link to="/"><FontAwesomeIcon icon={faHouseMedical}/> HOUSE MEDICAL</Link>
            </div>

            <div class="sh-left-side-menu-items">
                <ul>
                    <li>
                        <NavLink to="/" style={({ isActive }) => ({color: isActive ? "white" : "black",  backgroundColor: isActive ? "#0065c0" : "transparent", })}>
                        <FontAwesomeIcon icon={faHome}/>
                        <p>হোম</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to='/patient-info'>
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
        {/* <!-- === RIGHT ITEM DETAILS SECTION === --> */}
        <div class="sh-right-item-details-section">
           {/*  <!-- === TOP NAV ITEMS === --> */}
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
            {/* <!-- === FILLTER === --> */}
            <div class="sh-fillter">
                <input type="text" placeholder="তারিখ বা সময় " name="" id=""/>
                {/* <!-- === Please include here real time and date === --> */}
            </div>
            {/* <!-- === REVENUE SECTION === --> */}
            <div class="sh-revenue-section">
                <div class="sh-revenue-container sh-revenue-container-one-bg">
                    <h3>আজকের মোট আয়</h3>
                    <p><FontAwesomeIcon icon={faBangladeshiTakaSign}/>০.০০০</p>
                </div>
                <div class="sh-revenue-container sh-revenue-container-two-bg">
                    <h3>আজকের মোট পরিদর্শিত রোগী</h3>
                    <p><FontAwesomeIcon icon={faUsers}/>৩০০</p>
                </div>
                <div class="sh-revenue-container sh-revenue-container-three-bg">
                    <h3>মোট সাক্ষাৎকার</h3>
                    <p><FontAwesomeIcon icon={faUsers}/>৪০০</p>
                </div>
                <div class="sh-revenue-container sh-revenue-container-four-bg">
                    <h3>মোট আয়</h3>
                    <p><FontAwesomeIcon icon={faBangladeshiTakaSign}/>0.000</p>
                </div>
            </div>
            {/* <!-- === PATIENTS SECTION === --> */}
            <div class="sh-new-patients">
                <h1>সাক্ষাৎকার রোগী</h1>
                <input type="search" placeholder="অনুসন্ধান"/>
            </div>
            <div class="sh-patients-section">
                <table>
                    <thead>
                        <th class="sh-patients-name">রোগীর নাম</th>
                        <th class="sh-patients-address">রোগীর ঠিকানা</th>
                        <th class="sh-patients-phone">যোগাযোগ নম্বর</th>
                        <th class="sh-time">সময়</th>
                        <th class="sh-date">তারিখ</th>
                        <th class="sh-patient-status">রোগীর অবস্থা</th>
                        <th class="sh-visit-fee">পরিদর্শন ফি</th>
                        <th class="sh-inspection">পরিদর্শন</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>মোঃ আবির হোসেন</td>
                            <td>মডার্ণ মোড় রংপুর।</td>
                            <td class="sh-text-center"> ০১৩১৫-২৯১২৯৩</td>
                            <td class="sh-text-center">সন্ধ্যা ৭.০০ টা</td>
                            <td class="sh-text-center">০৩/১১/২০২৫</td>
                            <td class="sh-text-center">নতুন রোগী</td>
                            <td class="sh-text-center">১,০০০ <FontAwesomeIcon icon={faBangladeshiTakaSign}/></td>
                            <td class="sh-action-btns">
                                <button type="button" name="button" class="sh-action-btn-style sh-check-btn"><FontAwesomeIcon icon={faCheck}/></button>
                                <button type="button" name="button" class="sh-action-btn-style sh-delete-btn"><FontAwesomeIcon icon={faXmark}/></button>
                                <button type="button" name="button" class="sh-action-btn-style sh-delete-btn"><FontAwesomeIcon icon={faTrash}/></button>
                            </td>
                        </tr>
                        <tr>
                            <td>মোঃ আবির হোসেন</td>
                            <td>মডার্ণ মোড় রংপুর।</td>
                            <td class="sh-text-center"> ০১৩১৫-২৯১২৯৩</td>
                            <td class="sh-text-center">সন্ধ্যা ৭.০০ টা</td>
                            <td class="sh-text-center">০৩/১১/২০২৫</td>
                            <td class="sh-text-center">নতুন রোগী</td>
                            <td class="sh-text-center">১,০০০ <FontAwesomeIcon icon={faBangladeshiTakaSign}/></td>
                            <td class="sh-action-btns">
                                <button type="button" name="button" class="sh-action-btn-style sh-check-btn"><FontAwesomeIcon icon={faCheck}/></button>
                                <button type="button" name="button" class="sh-action-btn-style sh-delete-btn"><FontAwesomeIcon icon={faXmark}/></button>
                                <button type="button" name="button" class="sh-action-btn-style sh-delete-btn"><FontAwesomeIcon icon={faTrash}/></button>
                            </td>
                        </tr>
                      
                        
                    </tbody>
                </table>
            </div>
           {/*  <!-- === PAGINATION === --> */}
            <div class="sh-pagination">
                <button class="sh-pagination-previous" type="button" name="button">পূর্ববর্তী</button>
                <p>০১</p>
                <button class="sh-pagination-next" type="button" name="button">পরবর্তী</button>
            </div>
            <div class="sh-new-patients">
                <h1>পরিদর্শিত রোগী</h1>
                <input type="search" placeholder="অনুসন্ধান"/>
            </div>
            {/* <!-- === PATIENTS SECTION === --> */}
            <div class="sh-patients-section">
                <table>
                    <thead>
                        <th class="sh-patients-name">রোগীর নাম</th>
                        <th class="sh-patients-address">রোগীর ঠিকানা</th>
                        <th class="sh-patients-phone">যোগাযোগ নম্বর</th>
                        <th class="sh-time">সময়</th>
                        <th class="sh-date">তারিখ</th>
                        <th class="sh-patient-status">রোগীর অবস্থা</th>
                        <th class="sh-visit-fee">পরিদর্শন ফি</th>
                        <th class="sh-inspection">পরিদর্শন</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>মোঃ আবির হোসেন</td>
                            <td>মডার্ণ মোড় রংপুর।</td>
                            <td class="sh-text-center"> ০১৩১৫-২৯১২৯৩</td>
                            <td class="sh-text-center">সন্ধ্যা ৭.০০ টা</td>
                            <td class="sh-text-center">০৩/১১/২০২৫</td>
                            <td class="sh-text-center">নতুন রোগী</td>
                            <td class="sh-text-center">১,০০০ <FontAwesomeIcon icon={faBangladeshiTakaSign}/></td>
                            <td class="sh-action-btns">
                                <p>পরিদর্শিত হয়েছে </p>
                            </td>
                        </tr>
                        <tr>
                            <td>মোঃ আবির হোসেন</td>
                            <td>মডার্ণ মোড় রংপুর।</td>
                            <td class="sh-text-center"> ০১৩১৫-২৯১২৯৩</td>
                            <td class="sh-text-center">সন্ধ্যা ৭.০০ টা</td>
                            <td class="sh-text-center">০৩/১১/২০২৫</td>
                            <td class="sh-text-center">নতুন রোগী</td>
                            <td class="sh-text-center">১,০০০ <FontAwesomeIcon icon={faBangladeshiTakaSign}/></td>
                            <td class="sh-action-btns">
                                <p>পরিদর্শিত হয়েছে </p>
                            </td>
                        </tr>
                        <tr>
                            <td>মোঃ আবির হোসেন</td>
                            <td>মডার্ণ মোড় রংপুর।</td>
                            <td class="sh-text-center"> ০১৩১৫-২৯১২৯৩</td>
                            <td class="sh-text-center">সন্ধ্যা ৭.০০ টা</td>
                            <td class="sh-text-center">০৩/১১/২০২৫</td>
                            <td class="sh-text-center">নতুন রোগী</td>
                            <td class="sh-text-center">১,০০০ <FontAwesomeIcon icon={faBangladeshiTakaSign}/></td>
                            <td class="sh-action-btns">
                                <p>পরিদর্শিত হয়েছে </p>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            {/* <!-- === PAGINATION === --> */}
            <div class="sh-pagination-two">
                <button class="sh-pagination-previous" type="button" name="button">পূর্ববর্তী</button>
                <p>০১</p>
                <button class="sh-pagination-next" type="button" name="button">পরবর্তী</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
