import '../styles/home.css';
import HeadingParaComponent from '../components/HeadingParaComponent';
import TextRotator from '../components/TextRotator';
import ReviewComponents from '../components/ReviewComponents';
import Typewriter from '../components/Typewriter';
import { InstagramOutlined, LinkedinOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons';


export default function Home() {
    return (
        <>
            <div className="rounded-lg bg-cover bg-no-repeat p-12 text-center gifStyle1 hg w-3/4 mx-auto mt-12 mb-12">
                <h2 className="text-white mt-30">
                    For the founders. The innovators. The unafraid. The brands shaping tomorrow, today.
                </h2>
            </div>
            <div className="flex flex-wrap w-full md:flex">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center left-images relative">
                    <img src="https://static.showit.co/200/tVmdg0KjSp-mfrtNTSpbgw/shared/icon_white.png" alt="ZEITGEIST Labs Icon" />
                    <img className="globeLeft absolute left-0 bottom-0 hidden md:block lg:block" src="https://static.showit.co/file/Yzkk5eJwT9KS5OShpNqIVg/shared/untitled_design_1.gif" alt="globe" />
                </div>
                <div className="right w-full md:w-1/2 p-8 text-white">
                    <div className="flex">
                        <h1>ZEITGEIST labs—<br />Marketing,<br />strategy &<br />Creative Agency</h1>
                        <img className="globeRight -rotate-45 sm:hidden md:block" src="https://static.showit.co/file/Yzkk5eJwT9KS5OShpNqIVg/shared/untitled_design_1.gif" alt="globe" />
                    </div>
                    <i>/zeiit-geiist/ (n): The defining spirit or mood of a particular period of history as shown by the ideas and beliefs of the time.</i>
                    <p>You bring the ideas, ZEITGEIST Labs brings the strategy.</p>
                    <p>Together, we future-proof and expand your brand’s digital presence so you can stay ahead of the curve and continue forging new frontiers.</p>
                    <p>ZEITGEIST Labs fuses our experience and deep understanding of social media, digital marketing, and media with our forward-thinking strategies and highly-personalized services.</p>
                    <button>LEARN MORE</button>
                </div>
                <div className="sm:block md:hidden lg:hidden">
                <img className="globeLeft  left-0 bottom-0" src="https://static.showit.co/file/Yzkk5eJwT9KS5OShpNqIVg/shared/untitled_design_1.gif" alt="globe" />
                </div>
            </div>
            <div className="h-auto">
                <h1 className="text-amber-400 m-1 text-8xl w-4/5 font-bold max-w-screen-md ml-8 md:ml-24 mt-10" >ZEITGEIST Labs Does Marketing Differently</h1>
                <h2 className="text-3xl text-indigo-600 mt-10 ml-8 md:ml-24 ">WE’LL TAKE IT FROM HERE</h2>
                <img className="w-1/3 h-20 -ml-8 md:-ml-10 lg:-ml-14 " src="https://static.showit.co/1200/SpyA3knwT9qUqOT4kPLpkQ/shared/untitled_design.png" alt="line" />
                <TextRotator />
                <button className="ml-8 md:ml-24 mb-24 mt-10 text-white bg-indigo-600 pl-7 pr-7 pt-2 pb-2 rounded"> VIEW OUR SERVICES </button>
            </div>
            <div className="text-right">
                <h1 className="text-amber-400 m-1 text-7xl font-bold mr-9">
                    Founded On and <br />Dedicated To
                </h1>
            </div>
            <div className="flex flex-wrap justify-center w-full p-10">
                <div className="sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 ">
                    <HeadingParaComponent heading="EXPANDING THE EXPECTED —" paragraph="The meta is always changing, therefore, so must our strategies & standards" />
                </div>
                <div className="sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <HeadingParaComponent heading="BREAKING BOUNDARIES -" paragraph="Sometimes you have to break down walls to build back up, we’re not afraid to start from scratch" />
                </div>
                <div className="sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3"></div>
                <div className="sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <HeadingParaComponent heading="LEADING WITH INTEGRITY —" paragraph="We’ll treat your business like it’s our own, and always put transparency & honesty at the forefront" />
                </div>
                <div className="sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <HeadingParaComponent heading="GOING ABOVE & BEYOND —" paragraph="Over-promise & over-deliver, there is no other option" />
                </div>
                <div className="sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <HeadingParaComponent heading="HUMAN FIRST APPROACH —" paragraph="We see the people behind the brand and always lead with empathy" />
                </div>
            </div>
            <div className="hidden sm:flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat h-full relative">
                <div className="w-full text-amber-400 text-6xl font-bold text-center mb-4 flex flex-col space-evenly m-10 ">
                    <div className="flex flex-row items-center justify-around leading-4 ">
                        <div>W</div>
                        <div>H</div>
                        <div>O</div>
                    </div>
                    <div className="flex flex-row items-center justify-around relative leading-4 top-[18vh] z-[1]">
                        <div>W</div>
                        <div>E</div>
                        <div className="sm:hidden lg:block md:block w-12"></div>
                    </div>
                    <div className="flex flex-row items-center justify-around relative leading-4 top-[36vh] z-[1]">
                        <div>A</div>
                        <div>R</div>
                        <div>E</div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 sm:max-w-full relative">
                    <img className="w-full" src="https://static.showit.co/800/1HBkXOwMREiElPfsXo56dQ/shared/adam-neumann-vzeevwugtmi-unsplash.jpg" alt="Background" />
                </div>
                <div className="absolute bottom-0 right-0 z-[-1]">
                    <img className="w-2/5 float-right h-auto z-[-1]" src="https://static.showit.co/file/lSCaiBePRvi7ZFTje7c3PA/shared/untitled_design_3.gif" alt="Small GIF" />
                </div>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row ml-12 mr-12 mt-4 mb-4'>
                <div className="text-amber-400 sm:w-full md:w-1/2 lg:w-1/2 m-1 text-5xl font-bold mb-12">
                    THE PEOPLE BEHIND <br />ZEITGEIST LABS
                </div>
                <div className="flex flex-col sm:w-full md:w-1/2 lg:w-1/2 text-white text-xl">
                    <p className="mb-8">
                        We are clued up and plugged in. By humans, for humans. Breaking new ground and seizing untouched opportunities.
                    </p>
                    <p>
                        We are marketing experts immersed in Web3. Engrossed in tech. Driven by experience. Dedicated to results. Radical innovators unafraid to take risks.
                    </p>
                </div>
                <div>
                    <button className="md:hidden lg:hidden sm:block ml-2 mb-24 mt-10 text-white bg-indigo-600 pl-7 pr-7 pt-2 pb-2 rounded "> LEARN MORE </button>
                </div>
            </div>
            <div className="sm:hidden md:hidden lg:block">
                <div className="text-center text-amber-400 text-5xl font-bold m-10 ">
                    FROM OUR CLIENTS
                </div>
                <div className="flex flex-row space-between">
                    <ReviewComponents
                        heading="SENIOR ACCOUNT MANAGER OF NFL RIVALS"
                        paragraph="ZEITGEIST Labs’ immense knowledge of the web3 space has proved invaluable and always has been packaged with a smile and willingness to problem solve. I could not recommend working with them enough."
                    />
                    <ReviewComponents
                        heading="CHIEF DERUGGER OF CYBER FROGS"
                        paragraph="ZEITGEIST Labs has been an indispensable asset. They have helped formalize the workflow process, have delivered key marketing advancements and above all have been a pleasure to work with. They have a keen understanding of the marketing culture and excel at establishing consistent and effective marketing campaigns."
                    />
                    <ReviewComponents
                        heading="CO-FOUNDER OF RUSSELL TOBIN"
                        paragraph="ZEITGEIST Labs has consistently created great work, so we are greatly thankful for their continued efforts and superb results!"
                    />
                </div>
                <div className="text-center text-white text-5xl font-bold m-10">
                    <Typewriter />
                </div>
            </div>
            <div className="w-full sm:hidden md:block lg:block">
                <img
                    className="mx-auto w-full max-w-xl"
                    src="https://static.showit.co/file/kSQhEhYDSle0PCqjJ3CQdg/shared/untitled_design.gif"
                    alt="Responsive Image"
                />
                <div className="text-white w-full mx-auto text-center text-4xl mt-0">FOR TODAY'S<br />
                    FORWARD-THINKING BRANDS
                </div>
                <p className="w-full mx-auto text-center text-amber-400 m-4">Keeping you with the ZEITGEIST by bringing you innovation, insights, and solutions</p>
                <p className="w-full mx-auto text-center text-amber-400">The future is already here<br />
                    — can your brand keep up?</p>
            </div>

            <div className="m-8 ml-12 ">
                <img src="https://static.showit.co/200/tVmdg0KjSp-mfrtNTSpbgw/shared/icon_white.png" alt="ZEITGEIST Labs Icon" />
            </div>
            <div className="w-full flex space-between space-between m-8 mx-12 sm:flex-col md:flex-row ">
                <div className="text-gray-500 text-sm sm:w-full md:w-1/3 lg:w-1/3 text-lg">Future-proof marketing for the brands of tomorrow © 2022
                </div>

                <div className="flex sm:left md:justify-center mx-auto space-x-4 mt-4 sm:w-full md:w-1/3 lg:w-1/3 ">
                    <InstagramOutlined className="text-amber-400 text-lg" />
                    <LinkedinOutlined className="text-indigo-600 text-lg" />
                    <TwitterOutlined className="text-amber-400 text-lg" />
                    <MailOutlined className="text-indigo-600 text-lg" />
                </div>

                <div className="flex flex-row mt-4 sm:w-full md:w-1/3 lg:w-1/3">
                    <div className="flex flex-col mr-4">
                        <a href="#" className="text-white">Home</a>
                        <a href="#" className="text-white">About</a>
                        <a href="#" className="text-white">Service</a>
                        <a href="#" className="text-white">Contact</a>
                    </div>

                    <div className="flex flex-col ml-4">
                        <a href="#" className="text-white">HELLO@ZEITGEISTLABS.COM</a>
                        <a href="#" className="text-white">FAQ</a>
                        <a href="#" className="text-white">Privacy Policy</a>
                        <a href="#" className="text-white">Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </>
    );
}