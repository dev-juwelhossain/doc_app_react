import { NavLink } from 'react-router-dom';
import '../auth_css/login.css'
const LogIn = () => {
    return (
        <div>
            <header className='login-header'>
                <div class="sh-patients-log-in-container">
                    <div class="sh-login-box">
                        <div class="sh-login-details">
                            <label for="text">নাম/ফোন নম্বর অথবা জিমেইল</label>
                            <input type="text" placeholder="নাম/ফোন নম্বর অথবা জিমেইল" />
                        </div>
                    </div>
                    <div class="sh-login-box">
                        <div class="sh-login-details">
                            <label for="text">পাসওয়ার্ড</label>
                            <input type="password" placeholder="পাসওয়ার্ড" />
                        </div>
                    </div>
                    {/*    <!-- === SIGN UP BUTTON === --> */}
                    <div class="sh-login-btn"><button>লগ ইন করুন</button></div>
                    <div onclick="newAccount()" class="sh-new-btn">
                        <button><NavLink to="/signup">নতুন অ্যাকাউন্ট তৈরি করুন</NavLink></button>
                    </div>
                </div>
            </header >
        </div >
    );
};

export default LogIn;