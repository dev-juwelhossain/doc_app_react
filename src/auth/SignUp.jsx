import { NavLink } from 'react-router-dom';
import '../auth_css/signup.css'
const SignUp = () => {
    return (
        <div className='signup-header'>
            <div class="sh-patients-sign-up-container">
                <div class="sh-account-text">
                    <p>অ্যাকাউন্ট তৈরি করুন</p>
                </div>
                <div class="sh-sign-up-box">
                    <div class="sh-sign-up-details">
                        <label for="text">নাম</label>
                        <input type="text" placeholder="এখানে আপনার নাম লিখুন" />
                    </div>
                    <div class="sh-sign-up-details">
                        <label for="text">বয়স </label>
                        <input type="number" placeholder="বয়স " />
                    </div>
                </div>
                <div class="sh-sign-up-box">
                    <div class="sh-sign-up-details">
                        <label for="text">লিঙ্গ</label>
                        <select name="" id="">
                            <option value="" name="">পুরুষ</option>
                            <option value="" name="">মহিলা</option>
                        </select>
                    </div>
                    <div class="sh-sign-up-details">
                        <label for="text">যোগযোগ নম্বর</label>
                        <input type="number" placeholder="+880 1000000000" />
                    </div>
                </div>
                <div class="sh-sign-up-box">
                    <div class="sh-sign-up-details">
                        <label for="text">জিমেইল</label>
                        <input type="email" placeholder="@gmail.com" />
                    </div>
                    <div class="sh-sign-up-details">
                        <label for="text">ঠিকানা</label>
                        <input type="text" placeholder="ঠিকানা" />
                    </div>
                </div>
                <div class="sh-sign-up-box">
                    <div class="sh-sign-up-details">
                        <label for="text">পাসওয়ার্ড</label>
                        <input type="password" placeholder="পাসওয়ার্ড" />
                    </div>
                    <div class="sh-sign-up-details">
                        <label htmlFor="">পাসওয়ার্ড নিশ্চিত করুন</label>

                        <input type="password" placeholder="পাসওয়ার্ড নিশ্চিত করুন" />
                    </div>
                </div>
                {/*    <!-- === SIGN UP BUTTON === --> */}
                <div class="sh-sign-up-btn"><button>সাইন আপ করুন</button></div>
                <div onclick="haveAccount()" class="sh-allready-account">
                    <button>
                        <NavLink to="/login">আমার একটি অ্যাকাউন্ট আছে</NavLink>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default SignUp;