import React from 'react'

const Login3 = () => {
    return <div className='  h-screen flex justify-center items-center p-10'>
        <div className='bg-gray-200 pt-16  md:pt-0   md:h-full   sm:w-full   flex justify-center items-start flex-wrap'>


            <div className=' bg-[url("https://images.unsplash.com/photo-1690035938446-935f02e34024?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHxpVUlzblZ0akIwWXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60")] border-[15px]   flex justify-between items-center text-green-900 flex-1 bg-no-repeat bg-cover  h-full' >
                <div className=' w-full rounded-lg mt-9'>
                    <div className='sm:ml-[5%]   mx-4'>
                        <h1 className='font-semibold  sm:text-3xl text-2xl'>Get started</h1>
                        <p>Create your Account Now</p>
                    </div>
                    <div className='w-full  '>
                        <div className=' p-[5%]'>

                            <input placeholder='Enter Email' type="text" className='w-full border-2 opacity-70 border-slate-200 p-3 rounded-lg' />
                        </div >
                        <div className=' p-[5%]'>

                            <input placeholder='Enter Password' type="text" className='w-full border-2 opacity-70 border-slate-200 p-3 rounded-lg' />
                        </div >


                        <p className='mx-4 my-2'><a className='text-red-600' href="">Forgot Password?</a></p>
                        <div className='mx-4 my-2 flex justify-center'>
                            <button className="btn btn-warning  btn-outline sm:btn-wide font-bold text-2xl ">Sign in</button>
                        </div>
                        <div className='mx-4 my-2'>
                            <span>Dont Have an account? </span><a className='text-primary' href="">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 justify-center items-center flex h-full'>
                <div className='h-[250px] w-[400px] bg-white rounded-xl flex justify-center items-center gap-2 p-5 m-[10%]'>
                    <div className='p-2'>
                        <img className='rounded-2xl' src="https://images.unsplash.com/photo-1626362814904-d27009a10da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" height={200} width={200} alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Fundamentals of Python Programming</h1>
                        <p>5/10 Lessons</p>
                        <button className="btn btn-outline btn-primary">Primary</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    return <>
        <div className='flex justify-center items-center h-screen'>
            <div className='h-[90%] bg-slate-200'>


                <div className='sm:flex-row  flex-col flex m-[2.5%] bg-green-300  h-full   '>
                    {/* LOGIN */}
                    <div className=' h-[80%] border-solid border-4 border-white bg-red-600 rounded-b-lg mx-[10%] columns-6 bg-[url("https://images.unsplash.com/photo-1691147019097-9bf892ad9814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60")] bg-no-repeat  order-1 sm:order-1 '>

                        <input type="text" className='w-full' />
                    </div>
                    {/* <h1>helloooo</h1> */}

                    {/* IMAGE */}
                    <div className=' columns-6 bg-blue-300 flex-1 order-2 sm:order-2 '>asdasd</div>

                </div>
            </div>
        </div>




    </>
}

export default Login3