import Navbar from '../components/Navbar'
import Image from "next/image"
import BlogA from '../pages/imgs/Design 1.png'
import BlogB from '../pages/imgs/Design 3.png'
import BlogC from '../pages/imgs//Development 4.png'
import BlogD from '../pages/imgs/Photography.png'

export default function BlogSingle() {
    return (
        <main>
            <Navbar />
            <div className='mx-auto max-w-7xl md:mt-28 mb-4'>
                <div className='flex justify-center'>
                    <Image className='' src={BlogA} alt='blog pics' />
                </div>
                <div className="flex justify-between mt-4">
                    <div>
                        <span className="text-blue-500">Web Development</span>
                    </div>
                    <div>
                        <span className="text-gray-500">May 27, 2023</span>
                    </div>


                </div>
                <div>
                    <div className='my-5'>
                        <div>
                            <h2 className='text-3xl font-bold'>Mastering Front-End Development: Essential HTML, CSS, and <br /> JavaScript Skills</h2>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4 items-center">
                        <div>
                            <span className='text-xs'>By Jenny Wilson</span>
                        </div>
                        <div>
                            <button className=' py-2 rounded-xl px-5 border text-sm'>Share Blog</button>
                        </div>
                    </div>
                </div>
                <hr />

                <div className='my-4'>
                    <div>
                        <p className='text-lg mb-9'>
                            <span className='text-xl font-bold block text-slate-800 mb-3'>Introduction</span>

                            Front-end development is the process of creating the user interface for a website or web application. It involves the use of HTML, CSS, and JavaScript to create a visually appealing and functional website.
                        </p>
                        <p className='text-lg mb-9'>
                            <span className='text-xl font-bold block text-slate-800 mb-3'>Essential Front-End Development Skills</span>
                            Front-end development is the process of creating the user interface for a website or web application. It involves the use of HTML, CSS, and JavaScript to create a visually appealing and functional website.

                        </p>
                        <p className='text-lg mb-9'>
                            <span className='text-xl font-bold block text-slate-800 mb-3'>Front-End Development Best Practices</span>
                            n addition to the essential skills, there are a number of best practices that front-end developers should follow. These best practices will help to create high-quality, user-friendly websites.

                            Write clean and maintainable code: Code should be well-organized and easy to read. It should also be commented so that other developers can understand what it does.
                            Use performance optimization techniques: This will help to make websites load faster, which will improve the user experience.
                            Ensure cross-browser compatibility: Websites should look the same in all major browsers.
                            Make websites accessible to all users: This includes users with disabilities and users who are using mobile devices.

                        </p>
                        <p className='text-lg mb-9'>
                            <span className='text-xl font-bold block text-slate-800 mb-3'>Exploring Front-End Development Tools</span>
                            There are a number of tools that can be used to help with front-end development. These tools can help to make the development process easier and more efficient.

                            Code editors and IDEs: Code editors and IDEs (integrated development environments) are used to write and edit code. They provide features such as syntax highlighting, auto-completion, and debugging tools.
                            Browser developer tools: Browser developer tools are used to inspect the HTML, CSS, and JavaScript of a web page. They can be used to troubleshoot problems and to make changes to the code.
                            Build tools and task runners: Build tools and task runners are used to automate the process of building and deploying websites. They can help to save time and to ensure that websites are built correctly.

                        </p>
                        <p className='text-lg mb-9'>
                            <span className='text-xl font-bold block text-slate-800 mb-3'>Keeping Up with Front-End Trends and Resources</span>
                            The field of front-end development is constantly evolving. There are new technologies and trends emerging all the time. It is important for front-end developers to stay up-to-date on the latest trends and technologies.
                            There are a number of resources that can help front-end developers stay up-to-date. These resources include online blogs and newsletters, online courses and tutorials, and conferences and meetups.

                        </p>
                        <p className='text-lg mb-9'>
                            <span className='text-xl font-bold block text-slate-800 mb-3'>Conclusion</span>
                            Front-end development is a challenging but rewarding field. By mastering the essential skills and following best practices, front-end developers can create high-quality, user-friendly websites.

                        </p>
                        <p className='text-lg mb-9'>
                            I hope this blog content was helpful.
                            <span className='block'>Do you want to learn more about front-end development? <span className='text-blue-600'>Click here to sign up</span> for the course!</span>
                        </p>
                    </div>
                </div>

                <div className='mt-9'>
                    <div>
                        <h3 className="text-2xl font-bold">
                            Related Blogs
                        </h3>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  mx-auto  gap-6 mt-8'>


                        <div class="bg-white shadow-md items-center  rounded-lg max-w-xs ">
                            <a href="#" className='h-[200px] overflow-hidden'>
                                <Image class="rounded-t-lg bg-cover" src={BlogA} alt="product image" />
                            </a>
                            <div class="px-2 py-5">
                                <div className="flex justify-between">
                                    <div>
                                        <span className="text-blue-500">Web Development</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">May 27, 2023</span>
                                    </div>


                                </div>
                                <div className="mt-4">
                                    <a href="#">
                                        <h3 class=" font-semibold text-[21px] tracking-tight text-black">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
                                    </a>


                                    <div class="flex items-center justify-between mt-5">
                                        <span class="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
                                        <a href="#"
                                            class="text-blue-600  text-sm font-bold">Read post</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white shadow-md items-center  rounded-lg max-w-xs ">
                            <a href="#" className='h-[200px] overflow-hidden'>
                                <Image class="rounded-t-lg bg-cover" src={BlogB} alt="product image" />
                            </a>
                            <div class="px-2 py-5">
                                <div className="flex justify-between">
                                    <div>
                                        <span className="text-blue-500">Web Development</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">May 27, 2023</span>
                                    </div>


                                </div>
                                <div className="mt-4">
                                    <a href="#">
                                        <h3 class=" font-semibold text-[21px] tracking-tight text-black">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
                                    </a>


                                    <div class="flex items-center justify-between mt-5">
                                        <span class="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
                                        <a href="#"
                                            class="text-blue-600  text-sm font-bold">Read post</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white shadow-md  rounded-lg max-w-xs ">
                            <a href="#" className='h-[200px] overflow-hidden'>
                                <Image class="rounded-t-lg bg-cover" src={BlogC} alt="product image" />
                            </a>
                            <div class="px-2 py-5">
                                <div className="flex justify-between">
                                    <div>
                                        <span className="text-blue-500">Web Development</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">May 27, 2023</span>
                                    </div>


                                </div>
                                <div className="mt-4">
                                    <a href="#">
                                        <h3 class=" font-semibold text-[21px] tracking-tight text-black">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
                                    </a>


                                    <div class="flex items-center justify-between mt-5">
                                        <span class="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
                                        <a href="#"
                                            class="text-blue-600  text-sm font-bold">Read post</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white shadow-md  rounded-lg max-w-xs ">
                            <a href="#" className='h-[200px] overflow-hidden'>
                                <Image class="rounded-t-lg bg-cover" src={BlogD} alt="product image" />
                            </a>
                            <div class="px-2 py-5">
                                <div className="flex justify-between">
                                    <div>
                                        <span className="text-blue-500">Web Development</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">May 27, 2023</span>
                                    </div>


                                </div>
                                <div className="mt-4">
                                    <a href="#">
                                        <h3 class=" font-semibold text-[21px] tracking-tight text-black">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
                                    </a>


                                    <div class="flex items-center justify-between mt-5">
                                        <span class="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
                                        <a href="#"
                                            class="text-blue-600  text-sm font-bold">Read post</a>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>


            </div>

        </main>
    )
}