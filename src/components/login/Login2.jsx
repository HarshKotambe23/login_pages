import React from 'react'

const Login2 = () => {


    return <>
        <div className='h-screen bg-slate-400  flex md:justify-center md:items-center md:gap-0 '>
            <div className='bg-white md:flex-row flex-col-reverse md:h-[95%] md:w-[95%] h-screen rounded-lg flex ga-2 justify-center  items-center '>
                <div className='bg-blue-600 text-white md:h-[95%] md:w-[30%] h-[220px]  w-[95%] rounded-lg flex flex-col items-center  relative'>
                    <div className='m-6 absolute md:top-[-1%] md:left-[-1%] top-[-8%] left-[-2%]'>
                        <button>FLESSO</button>
                    </div>
                    <div className='md:mx-[10%] md:mt-[15%] mt-[6%] mx-[10%] '>
                        <p className='lg:text-5xl md:text-3xl sm:text-2xl font-semibold'>Start your Jurney with us</p>
                        <p className='  md:text-lg text-xs '>Discover the world's best community of freelancers and business owners.
                        </p>
                    </div>
                    <div className='bg-blue-800 text-white md:mt-[40%] mt-2 p-1  md:w-[80%] w-[70%]  md:mx-[10%] rounded-lg'>
                        <div className='text-sm'>
                            <div className='md:p-2'>Simply unbelievable! I am really satisfied with my projects and business. This is Absolutely wonderful!
                            </div>
                            <div className='flex p-2 gap-2'>
                                <div className='' ><img className='rounded-full h-[50px] w-[50px]' src="https://images.unsplash.com/photo-1689357641081-bafacc1edb53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                                <div className='text-xs'>
                                    <p>Harsh Kotambe</p>
                                    <p>Product Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* SECOND */}


                <div className=' md:h-[95%]  md:w-[60%]  h-[65%]  w-[95%]'>
                    <div className='ml-[10%] md:pt-[7%] pt-0 '>
                        <h1 className='font-semibold md:mt-2 md:text-3xl text-xl'>Sign Up</h1>
                        <div className='md:text-lg text-sm'>
                            <span>Have an account? </span><a className='text-primary' href="">Login</a>
                        </div>
                    </div>
                    <div >
                        <p className='mx-[10%] my-[2%]'>Looking for</p>
                        <div className='flex gap-3 mb-2 mx-[10%]'>

                            <div className='flex gap-3 border-2 p-3 rounded-lg w-[80%]'>
                                <input type="radio" name="radio-2" className="radio radio-primary" checked />
                                <label htmlFor="">Projects</label>
                            </div>
                            <div className='flex gap-3 border-2 p-3 rounded-lg w-[80%]'>
                                <input type="radio" name="radio-2" className="radio radio-primary" checked />
                                <label htmlFor="">Projects</label>
                            </div>

                        </div>

                    </div>
                    <div className='flex flex-col md:gap-3 gap-1 items-center  '>

                        <div className='flex flex-col w-[80%] '>
                            <label htmlFor="">Email</label>
                            <input type="text" className='border-2 border-slate-200 p-3  rounded-lg' />
                        </div>
                        <div className='flex flex-col w-[80%] '>
                            <label htmlFor="">Password</label>
                            <input type="text" className=' border-2 border-slate-200 p-3  rounded-lg' />
                        </div>
                        <div className='flex flex-col w-[80%] '>
                            <label htmlFor="selectSkills">Select Skills</label>
                            <select className="select select-primary md:w-full md:max-w-xs">
                                <option disabled selected>Pick your favorite language</option>
                                <option>Java</option>
                                <option>Go</option>
                                <option>C</option>
                                <option>C#</option>
                                <option>C++</option>
                                <option>Rust</option>
                                <option>JavaScript</option>
                                <option>Python</option>
                            </select>
                        </div>

                    </div>
                    <div className='mx-[10%] md:mt-[5%] my-2'>
                        <button className="btn btn-primary btn-outline sm:btn-wide ">Wide</button>
                    </div>
                </div>

            </div>
        </div>



    </>
}

export default Login2