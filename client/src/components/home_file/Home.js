import React from 'react'
import { Button } from 'react-bootstrap';
import  './home.css'

function Home() {
  return (
    <>
    <header>
        <div className='buttons'>
            <Button variant="light">تسجيل</Button> 
            <Button variant="light">اللغة</Button> 
            <Button variant="light">نسخة المدرسة</Button> 
            <Button variant="light">ابدا</Button> 
            <Button variant="light">لوغو نادي الطباعة</Button> 
                    
        </div>
    </header>
    <div className="section1">
    <div className="column1">
      <h2>ما هو نادي الطباعة؟</h2>
      <h1><strong>نادي الطباعة هو اكثر الطرق فعالية في تعلم الطباعة السريعة</strong> </h1>
      <h2>موقع الكتروني مصمم خصيصا ليكون فعال جدا لتعليم الطباعة السريعة . نادي الطباعة مجاني و سيبقى مجاني للافراد و للمدارس و هناك أيضا خيار مدفوع للمدارس </h2>
    </div>
    <div className="column2">
      <h1>صورة ليد ارشاد الطباعة</h1>
    </div>
    </div>

    <div className="section2"></div>
    <div className="section3">
      <div className="c1">
        <h1><strong>كيف استعمل هذا الموقع ؟</strong></h1>
        <h2>استمر في التمرن على كل درس حتى تصل الى خمس نجوم . لن يكلفك الامر الا التدرب بضعة دقائق يوميا مدة اسبوع واحد الى اسبوعين و تصبح محترف</h2>

      </div>
      <div className="c2">
        <h1><strong>هل احتاج لانشاء حساب ؟</strong></h1>
        <h2>لا تحتاج الى حساب لكن يمكنك ان تنشأ حساب اختياري لتتمكن من حفظ التقدم الذي تصل اليه</h2>
        </div>
    </div>
    <div className="section4">
      
    <h3>اشترك لكي تصلك التحديثات </h3>
        
        <span class="subscribe" >
            <div>بريدك الالكتروني</div>
            <button  type="button"> اشترك </button>
        </span>
    </div>

    <div className="section5">

    </div>


    <footer>
      <div class="section8-grid-container">
      
          
          
          
      <div class="grid-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="32" height="32" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03c0 1.403.724 2.64 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z"></path></svg>
      </div>
      
    <div class="grid-item">
        <div>سياسة الخصوصية</div>
        <div>شروط الاستخدام</div>
        <div>نسخة المدرسة</div>
        <div>جد مدرستك</div>
        <div>نسخة الفرد الاساسية</div>
        <div>عنا</div>
        <div></div></div>

  <div class="grid-item">
      <div>للتواصل</div>
  <div>( بريد الموقع )</div>
  <div>xxxx-xxx-xxx : رقم الهاتف</div>
  <div>xxxx-xxx-xxx : رقم الفاكس</div>

      </div>

  <div class="grid-item">
    <div>© nadi-altib3a  - 2020-2025</div>
    <div></div>
    <div>الامارات -أبو ظبي</div>
    <div></div>
    <div>_______________________</div>
    <div>اذا كان عندك اي استفسارات عن البرنامج يمكنك الوصول الينا (بريد الموقع)</div>
    <div></div>
    <div></div></div>
      
  </div>
    </footer>
    </>
  )
}

export default Home