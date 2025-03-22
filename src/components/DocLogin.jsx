

const Login = () => {
    function haveAccount(){
        document.querySelector(".sh-patients-log-in-container").style.display = 'block';
        document.querySelector(".sh-patients-sign-up-container").style.display = 'none';
    }
    function newAccount(){
        document.querySelector(".sh-patients-log-in-container").style.display = 'none';
        document.querySelector(".sh-patients-sign-up-container").style.display = 'block';
    }
    return (
        <div>
            <div class="sh-doctor-sign-up-container">
        <div class="sh-account-text">
            <p>অ্যাকাউন্ট তৈরি করুন</p>
        </div>
        <div class="sh-sign-up-box">
            <div class="sh-sign-up-details">
                <label for="text">নাম</label>
                <input type="text" placeholder="এখানে আপনার নাম লিখুন"/>
            </div>
            <div class="sh-sign-up-details">
                <label for="text">বিশেষজ্ঞ/অভিজ্ঞতা</label>
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
        <div class="sh-sign-up-box">
            <div class="sh-sign-up-details">
                <label for="text">ডিগ্রি</label>
                <select name="" id="">
                    <option value="" name=""></option>
                    <option value="" name=""></option>
                    <option value="" name=""></option>
                </select>
            </div>
            <div class="sh-sign-up-details">
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
        </div>
        <div class="sh-sign-up-box">
            <div class="sh-sign-up-details">
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
            <div class="sh-sign-up-details">
                <label for="text">হাসপাতালের নাম</label>
                <select name="" id="">
                    <option value="country" name="country">হাসপাতালের নাম</option>
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
        </div>
        {/* <!-- === SIGN UP BUTTON === --> */}
        <div class="sh-sign-up-btn"><button>সাইন আপ করুন</button></div>
    </div>
   {/*  <!-- === PATIENT SIGN UP PAGE === --> */}
    <div class="sh-patients-sign-up-container">
        <div class="sh-account-text">
            <p>অ্যাকাউন্ট তৈরি করুন</p>
        </div>
        <div class="sh-sign-up-box">
            <div class="sh-sign-up-details">
                <label for="text">নাম</label>
                <input type="text" placeholder="এখানে আপনার নাম লিখুন"/>
            </div>
            <div class="sh-sign-up-details">
                <label for="text">বয়স </label>
                <input type="number" placeholder="বয়স "/>
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
                <input type="number" placeholder="+880 1000000000"/>
            </div>
        </div>
        <div class="sh-sign-up-box">
            <div class="sh-sign-up-details">
                <label for="text">জিমেইল</label>
                <input type="email" placeholder="@gmail.com"/>
            </div>
            <div class="sh-sign-up-details">
                <label for="text">ঠিকানা</label>
                <input type="text" placeholder="ঠিকানা"/>
            </div>
        </div>
        <div class="sh-sign-up-box">
            <div class="sh-sign-up-details">
                <label for="text">পাসওয়ার্ড</label>
                <input type="password" placeholder="পাসওয়ার্ড"/>
            </div>
            <div class="sh-sign-up-details">
                <label for="text">পাসওয়ার্ড নিশ্চিত করুন</label>
                <input type="password" placeholder="পাসওয়ার্ড নিশ্চিত করুন"/>
            </div>
        </div>
        {/* <!-- === SIGN UP BUTTON === --> */}
        <div class="sh-sign-up-btn"><button>সাইন আপ করুন</button></div>
        <div onclick="haveAccount()" class="sh-allready-account"><button>আমার একটি অ্যাকাউন্ট আছে</button></div>
    </div>
  {/*   <!-- === PATIENT LOG IN PAGE === --> */}
    <div class="sh-patients-log-in-container">
        <div class="sh-sign-up-box">
            <div class="sh-sign-up-details">
                <label for="text">নাম/ফোন নম্বর অথবা জিমেইল</label>
                <input type="text" placeholder="নাম/ফোন নম্বর অথবা জিমেইল"/>
            </div>
        </div>
        <div class="sh-sign-up-box">
            <div class="sh-sign-up-details">
                <label for="text">পাসওয়ার্ড</label>
                <input type="password" placeholder="পাসওয়ার্ড"/>
            </div>
        </div>
        {/* <!-- === SIGN UP BUTTON === --> */}
        <div class="sh-sign-up-btn"><button>লগ ইন করুন</button></div>
        <div onclick="newAccount()" class="sh-new-btn"><button>নতুন অ্যাকাউন্ট তৈরি করুন</button></div>
    </div>
        </div>
    );
};

export default Login;