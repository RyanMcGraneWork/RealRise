import {card} from '../assets';
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      What we do:<br className="sm:block hidden"/> Real Rise Agency <br className="sm:block hidden"/> process </h2>
    
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At Real Rise Agency, we believe that a successful digital marketing campagign is built on a solid 
        foundation of strategy. We know at Real Rise, that marketing is what creates value for the customers and 
        for the businesses. So everything we do at Real Rise is based on well researched clearly defined processes that ensure 
        quality results and outcomes for our clients. <br/><br/> The inital phase with Real Rise begins with a deep
        understanding of your business goals, target audience and competitive landscapes. We then develop a customized digital marketing 
        plan, focusing on your unique goals and objectives. We then test our strategy with mock add sets, which allows us to fine tune our 
        production add sets which whill be deployed to channels to reach your target audience.
        <br/><br/> Throughout the entire process, we constantly optimize and monitor the digital market campaigns, ensuring they are achieving the desired results.
        Our clients can enjoy weekly reports and be rest assured knowing their digital marketing is in best hands with Real Rise Agency.
      </p>
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]"/>
    </div>
  </section>
  )


export default CardDeal