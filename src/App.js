
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import headerimg from './Assets/english teacher.png'
import Screenshot from './Assets/Screenshot.png'
import youngst from './Assets/young-female-st.png'
import englishteacher from './Assets/english-teacher.png'
import circularcomp from './Assets/Circular-comp.png'
import works from './Assets/works.png'
import child from './Assets/online-learning.png'
import Composite from './Assets/CompositeLayer1.png'
import manage from './Assets/CompositeLayer.png'


function App() {
  return (
   <>
   <div className='px-6 max-w-6xl mx-auto'>
    <Header className=''/>

      {/* Hero section */}
      <div className='relative'>
        <img className='' src={headerimg} alt="" />
        <div className='max-w-sm  sm:absolute top-0 right-0  bottom-0 flex flex-col gap-3  justify-center p-3 text-start bg-white bg-opacity-60 '>
          <h2 className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicin.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          <div className='text-center'>
          <button className='bg-[#92C350]  px-4 py-2 text-white hover:brightness-75 rounded-md'>Get Started</button>
          </div>
        </div>
      </div>

     <div className='grid sm:grid-flow-col gap-5 sm:gap-0 sm:grid-cols-2 items-center my-12 sm:my-20'>
        <div className='p-5'>
          <h1 className='text-2xl text-[#286222] font-bold mb-2'>Our Platform Your Sucess</h1>
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum natus odit nobis molestias iusto aspernatur nihil ipsa, exercitationem, quibusdam, cum quasi soluta accusantium aliquam error? Cumque aspernatur ipsum sunt fugit.</div>
          </div>
      <div><img src={Screenshot} alt="" /></div>
     </div>


      <section className='grid sm:grid-cols-2 sm:grid-flow-col items-center'>
        <div>
          <img src={englishteacher} alt="" />
        </div>
        <div className='text-center p-5 grid gap-3 '>
         <h2 className='text-2xl font-bold'>Create Your School</h2>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero aut dignissimos voluptate voluptates reprehenderit culpa quia numquam non molestiae facere vitae soluta </p>
         <div className='text-center'>
          <button className='bg-[#92C350]  px-4 py-2 text-white hover:brightness-75 rounded-md'>Try for free</button>
          </div>
        </div>
      </section>


      <section className='grid gap-1 sm:gap-5 md:translate-x-36 md:-translate-y-12'>
      <div className='grid grid-flow-col grid-cols-2 gap-1 sm:gap-5 max-w-4xl '>
          <div className='px-5 py-12  mx-auto bg-[#F2F9F0] grid items-center rounded-lg'>
            <h2 className='text-2xl border-b-2 border-black text-center '>Trust Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo unde eligendi velit a alias numquam commodi? Repellat illo voluptates doloremque, perferendis, commodi sapiente blanditiis error sint molestias dolor neque eos?</p>
          </div>
          <div className='px-5 py-12  mx-auto bg-[#F2F9F0] grid items-center rounded-lg '>
            <h2 className='text-2xl border-b-2 border-black text-center'>Make Batter Cources</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo unde eligendi velit a alias numquam commodi? Repellat illo voluptates doloremque, perferendis, commodi sapiente blanditiis error sint molestias dolor neque eos?</p>
          </div>
      </div>
      <div className='grid grid-flow-col grid-cols-2 gap-1 sm:gap-5 max-w-4xl '>
          <div className='px-5 py-12  mx-auto bg-[#F2F9F0] grid items-center rounded-lg'>
            <h2 className='text-2xl border-b-2 border-black text-center '>Make Money Faster</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo unde eligendi velit a alias numquam commodi? Repellat illo voluptates doloremque, perferendis, commodi sapiente blanditiis error sint molestias dolor neque eos?</p>
          </div>
          <div className='px-5 py-12  mx-auto bg-[#F2F9F0] grid items-center rounded-lg '>
            <h2 className='text-2xl border-b-2 border-black text-center'>Easy Integration</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo unde eligendi velit a alias numquam commodi? Repellat illo voluptates doloremque, perferendis, commodi sapiente blanditiis error sint molestias dolor neque eos?</p>
          </div>
      </div>
      </section>

      
      <div className='grid grid-cols-2 my-20 relative'>
      <img className='py-4' src={youngst} alt="" />
      <div className='flex justify-center items-center -translate-x-9 text-center bg-[#286222] relative -z-10 w-[104%] rounded-r-lg box-shadow'>
      <h2 className='text-lg text-white ml-8 sm:ml-0'>"Insert Quote"</h2>
      </div>
      </div>
      
            <section className='grid sm:grid-flow-col sm:grid-cols-2 gap-5 items-center max-w-5xl mx-auto'>
              <img src={circularcomp} alt="" />
              <div className='p-5 max-w-sm mx-auto space-y-3 text-center sm:text-start '>
                <h1 className='font-bold text-2xl'>Customization Tool</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsum facere atque voluptates ut molestias deleniti, voluptatem doloribus nesciunt nisi </p>
              </div>
            </section>


           <section className='grid sm:grid-flow-col sm:grid-cols-2 items-center rounded-md my-20  sm:rounded-r-full bg-[#F2FAEF]'>
            <div className=' max-w-md mx-auto  py-16  '>
              <h1 className='text-2xl font-bold space-y-3 '>Support When You Need It</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eos quo facere molestiae id aperiam tenetur praesentium dolorum. Et neque, veritatis error recusandae totam repellendus cupiditate eligendi reiciendis dicta eveniet?</p>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore voluptates odio cumque!</p>
            </div>
            <div className=' flex justify-end'>
               <img className='w-[83%] text-end' src={works} alt="" />
            </div>
           </section>


           <div className='grid grid-cols-2 my-20 relative'>
           <div className='flex justify-center items-center bg-[#286222] w-[112%] box-shadows '>
           <h2 className='text-lg text-white'>"Insert Quote"</h2>
           </div>
           <img className='py-4' src={child} alt="" />
      </div>

      <section className='grid sm:grid-flow-col sm:grid-cols-2 items-center my-20'>
       <img src={Composite} alt="" />
       <div className='max-w-md mx-auto space-y-3 text-center sm:text-start'>
        <h2 className='text-2xl font-bold '>Grow Your Business</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio sit odio veritatis aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi debitis, explicabo, perspiciatis incidunt distinctio eaque aliquid vel quisquam aspernatur velit ipsa officia sint, repellendus atque maiores? Repellat facilis doloremque a!</p>
       </div>
      </section>


      <section className='grid sm:grid-flow-col sm:grid-cols-2 max-w-5xl mx-auto my-20'>
       <div className='max-w-md mx-auto p-5 space-y-3 text-center sm:text-start'>
       <h2 className='text-2xl font-bold'>Manage</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum eligendi neque iure fugiat amet! Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci mollitia hic. Atque labore similique veniam, eum a nobis, magni quasi reprehenderit assumenda, nesciunt cupiditate tenetur sit harum laborum unde.</p>
       </div>
       <img src={manage} alt="" />
      </section>
      
    </div>
    <Footer/>
   </>
    
  );
}

export default App;
