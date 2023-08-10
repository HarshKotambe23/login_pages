import React from 'react'

const Login1 = () => {



    return <>
        <div className=' h-screen bg-slate-400 flex justify-center items-center'>
            <div className='bg-white md:h-[90%] md:w-[95%] h-screen md:py-0 py-2 rounded-lg  flex-col-reverse md:flex-row flex justify-center items-center '>
                <div className='bg-slate-200 md:h-[90%] relative md:w-[48%] h-[50%] w-[95%] rounded-lg flex flex-col items-center'>
                    <div className='md:m-6 m-0  flex '>
                        <button><i class="bi bi-circle-fill absolute left-5 top-3 text-white p-1 rounded-md bg-primary"></i></button>
                    </div>
                    <div className='text-center py-1'>
                        <p className='lg:text-5xl md:text-3xl sm:text-2xl font-bold'>Lert us help you run your freelance business.</p>
                        <p className='mt-8 md:text-2xl text-1xl '>Our registration process is quick and easy, taking no more than 10 minutes to complete</p>
                    </div>

                    <div className='bg-slate-900 text-white  md:w-[80%] md:h-[50%]  md:m-16 m-5 rounded-lg'>
                        <div className=''>
                            <div className='md:m-5 m-4 md:pt-2 pt-1'>I'm immpressed with the results i've seen since starting to use this product, i am being receiving clients and projects in the first week.</div>
                            <div className='flex p-3 gap-4'>
                                <div className='' ><img className='rounded-full h-[80px] w-[80px]' src="https://images.unsplash.com/photo-1689357641081-bafacc1edb53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                                <div>
                                    <p>Harsh Kotambe</p>
                                    <p>Product Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* SECOND */}

                <div className=' md:h-[90%]  md:w-[48%] h-[50%] w-[90%] '>
                    <div className='ml-[10%] md:py-[7%]'>
                        <h1 className='font-semibold md:my-2 text-3xl'>Get started</h1>
                        <p>Create your Account Now</p>
                    </div>
                    <div className='flex flex-col md:gap-5 gap-1 items-center  '>
                        <div className='flex flex-col w-[80%] '>
                            <label htmlFor="">Full Name</label>
                            <input type="text" className='  border-2 border-slate-200 p-3 rounded-lg' />
                        </div>
                        <div className='flex flex-col w-[80%] '>
                            <label htmlFor="">Email</label>
                            <input type="text" className='border-2 border-slate-200 p-3 rounded-lg' />
                        </div>
                        <div className='flex flex-col w-[80%] '>
                            <label htmlFor="">Password</label>
                            <input type="text" className=' border-2 border-slate-200 p-3 rounded-lg' />
                        </div>

                        <div className='flex flex-row md:flex-col gap-5 justify-center items-center'>
                            <button className="btn btn-primary btn-outline sm:btn-wide ">Wide</button>
                            <span>Have an account? </span><a className='text-primary' href="">Login</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </>
}

export default Login1