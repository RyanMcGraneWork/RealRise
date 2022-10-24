import React from 'react'
import {apple, bill, google} from '../assets'
import styles, {layout} from '../style'


const Billing = () =>  (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>

        {/* Gradient starts */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"/>
        {/* Gradient ends */}

      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Get weekly reports<br className="sm:block hidden"/> Regular calls <br className="sm:block hidden"/> Rich customer insights.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          In the onboarding call we will set you up with everything required to start running advertisements on your 
          Facebook Business Manager account. You will then receive weekly reports and stats on the performance of the add sets. 
          You will receive rich customer insights on your customers who are enganging with the campagins as well as customers who 
          are viewing, clicking and time spent on your website. You will also receive a lot more details both technical and business enabling your business to scale and reach new heights.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple_store" className="w-[128px] h-[42px] mr-5 object-contain cursor-pointer" /> 
          <img src={google} alt="google_play" className="w-[144px] h-[43px] object-contain cursor-pointer" /> 
        </div>
      </div>
    </section>
  )


export default Billing