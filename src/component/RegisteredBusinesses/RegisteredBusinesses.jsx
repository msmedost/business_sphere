import CountUp from 'react-countup';
import manufacturer from "../../assets//registeredBusiness/image3.png"
import service from "../../assets/registeredBusiness/image2.png"
import retail from "../../assets/registeredBusiness/image5.png"
import professional from "../../assets/registeredBusiness/image1.png"
import others from "../../assets/registeredBusiness/image4.png"
import blood from "../../assets/registeredBusiness/blood.png"
import map from "../../assets/registeredBusiness/map.png"

function RegisteredBusinesses() {
  return (
    <div className=' flex flex-col w-full bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-200 py-6 justify-center'>
      <div className=' my-5'>
        <h1 className=' text-center mb-4 underline text-xl'>Nature of Business</h1>
        <div className=' flex justify-center flex-wrap gap-5 px-4 mb-5'>
          <div className=' w-60 bg-sky-100 h-fit flex justify-center items-center flex-col rounded-md p-4 shadow-xl'>
              <img className=' w-10' src={manufacturer} alt="" />
            <h3 className=' text-lg mt-2'>Manufacturer</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={11} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
          <div className=' w-60 bg-sky-100 h-fit flex justify-center items-center flex-col rounded-md p-4 shadow-xl'>
               <img className=' w-10' src={service} alt="" />
            <h3 className=' text-lg mt-2'>Services</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={10} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
          <div className=' w-60 bg-sky-100 h-fit flex justify-center items-center flex-col rounded-md p-4 shadow-xl'>
               <img className=' w-10' src={retail} alt="" />
            <h3 className=' text-lg mt-2'>Retail</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={3}  duration={5} enableScrollSpy={true} scrollSpyOnce={true} delay={1}></CountUp>+
            </div>
          </div>
          <div className=' w-60 bg-sky-100 h-fit flex justify-center items-center flex-col rounded-md p-4 shadow-xl'>
               <img className=' w-10' src={professional} alt="" />
            <h3 className=' text-lg mt-2'>Professional</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={10} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
          <div className=' w-60 bg-sky-100 h-fit flex justify-center items-center flex-col rounded-md p-4 shadow-xl'>
               <img className=' w-10' src={others} alt="" />
            <h3 className=' text-lg mt-2'>Others</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={3}  duration={5} enableScrollSpy={true} scrollSpyOnce={true} delay={1}></CountUp>+
            </div>
          </div>
        </div>
      </div>



      <div className=' my-5'>
        <h1 className=' text-center  underline text-xl'>Blood Group</h1>
        <div className=' flex justify-center flex-wrap gap-5 px-4 mt-5'>
          <div className=' w-40 bg-sky-100 h-fit flex justify-center items-center flex-col rounded-md p-4 shadow-xl relative'>
              <img className=' w-20 ' src={blood} alt="" />
            <h3 className=' text-3xl mt-2 absolute text-white top-9'>A+</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={3} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
          <div className=' w-40 bg-sky-100 h-fit flex justify-center items-center flex-col rounded-md p-4 shadow-xl relative'>
              <img className=' w-20 ' src={blood} alt="" />
            <h3 className=' text-3xl mt-2 absolute text-white top-9'>A-</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={0} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
          <div className=' w-40 bg-sky-100 h-fit flex justify-center items-center flex-col rounded-md p-4 shadow-xl relative'>
              <img className=' w-20 ' src={blood} alt="" />
            <h3 className=' text-3xl mt-2 absolute text-white top-9'>B+</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={18} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
          <div className=' w-40 bg-sky-100 h-fit flex justify-center items-center flex-col rounded-md p-4 shadow-xl relative'>
              <img className=' w-20 ' src={blood} alt="" />
            <h3 className=' text-3xl mt-2 absolute text-white top-9'>B-</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={0} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
          <div className=' w-40 bg-sky-100 h-fit flex justify-center items-center flex-col rounded-md p-4 shadow-xl relative'>
              <img className=' w-20 ' src={blood} alt="" />
            <h3 className=' text-2xl mt-2 absolute text-white top-9'>AB+</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={6} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
          <div className=' w-40 bg-sky-100 h-fit flex justify-center items-center flex-col rounded-md p-4 shadow-xl relative'>
              <img className=' w-20 ' src={blood} alt="" />
            <h3 className=' text-2xl mt-2 absolute text-white top-9'>AB-</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={0} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
          <div className=' w-40 bg-sky-100 h-fit flex justify-center items-center flex-col rounded-md p-4 shadow-xl relative'>
              <img className=' w-20 ' src={blood} alt="" />
            <h3 className=' text-3xl mt-2 absolute text-white top-9'>0+</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={13} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
          <div className=' w-40 bg-sky-100 h-fit flex justify-center items-center flex-col rounded-md p-4 shadow-xl relative'>
              <img className=' w-20 ' src={blood} alt="" />
            <h3 className=' text-3xl mt-2 absolute text-white top-9'>O-</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={1} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
          
        </div>



      </div>

        <div className=' my-5'>
        <h1 className=' text-center  underline text-xl'>Locality</h1>
        <div className=' flex justify-center flex-wrap gap-5 px-4 mt-5'>

        <div className=' w-48 bg-sky-100 h-fit min-h-44 flex justify-center items-center flex-col rounded-md p-4 shadow-xl'>
               <img className=' w-10' src={map} alt="" />
            <h3 className=' text-lg mt-2 text-center'>South Kolkata <br /> Metro Area</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={12} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
        <div className=' w-48 bg-sky-100 h-fit min-h-44 flex justify-center items-center flex-col rounded-md p-4 shadow-xl'>
               <img className=' w-10' src={map} alt="" />
            <h3 className=' text-lg mt-2 text-center'>North Kolkata <br /> Metro Area</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={2} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
        <div className=' w-48 bg-sky-100 h-fit min-h-44 flex justify-center items-center flex-col rounded-md p-4 shadow-xl'>
               <img className=' w-10' src={map} alt="" />
            <h3 className=' text-lg mt-2 text-center'>North Kolkata <br /> E M Byepass</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={10} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
        <div className=' w-48 bg-sky-100 h-fit min-h-44 flex justify-center items-center flex-col rounded-md p-4 shadow-xl'>
               <img className=' w-10' src={map} alt="" />
            <h3 className=' text-lg mt-2 text-center'>Extended north kolkata</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={1} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
        <div className=' w-48 bg-sky-100 h-fit min-h-44 flex justify-center items-center flex-col rounded-md p-4 shadow-xl'>
               <img className=' w-10' src={map} alt="" />
            <h3 className=' text-lg mt-2 text-center'>Industrial Area <br /> south Kolkata</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={1} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
        <div className=' w-48 bg-sky-100 h-fit min-h-44 flex justify-center items-center flex-col rounded-md p-4 shadow-xl'>
               <img className=' w-10' src={map} alt="" />
            <h3 className=' text-lg mt-2 text-center'>Non Metro Route <br /> Science City</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={0} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
        <div className=' w-48 bg-sky-100 h-fit min-h-44 flex justify-center items-center flex-col rounded-md p-4 shadow-xl'>
               <img className=' w-10' src={map} alt="" />
            <h3 className=' text-lg mt-2 text-center'>Central kolkata</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={10} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
        <div className=' w-48 bg-sky-100 h-fit min-h-44 flex justify-center items-center flex-col rounded-md p-4 shadow-xl'>
               <img className=' w-10' src={map} alt="" />
            <h3 className=' text-lg mt-2 text-center'>Others</h3>
            <div className=' flex text-3xl overflow-hidden gap-1'>
                <CountUp start={0} end={2} duration={5} enableScrollSpy={true} scrollSpyOnce={true}  delay={1}></CountUp>+
            </div>
          </div>
        </div>

</div>
    </div>
  );
}
export default RegisteredBusinesses;
