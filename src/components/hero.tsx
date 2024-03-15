import { FaLink } from 'react-icons/fa6'
import { FaArrowDown } from 'react-icons/fa'
import { SparklesCore } from './ui/sparkles'

const hero = () => {
    return (
        <>
            {/* TODO : ADD : Tech Stack */}
            {/* TODO : FIX : Button Links */}
            <div className="relative top-20 flex h-[50rem] w-full flex-col justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 h-screen w-full">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={50}
                        className="h-full w-full"
                        particleColor="#FFFFFF"
                    />
                </div>
                <div className="-translate-y-28">
                    <h1 className=" text-center text-5xl font-bold text-white md:text-7xl lg:text-7xl">
                        Hello There!👋
                        <h2 className="mt-5 px-5 text-xl font-normal">
                            I am Parveen Rawat, an aspiring developer based in
                            India.
                        </h2>
                        <h2 className="mt-5 px-5 text-xl font-normal">
                            I like programming and game development.
                        </h2>
                    </h1>
                    <div className="col-span-2 -mb-28 mt-12 flex justify-center gap-10 p-3 text-2xl text-white sm:gap-20 lg:mb-0">
                        <button className=" group relative inline-block w-40 cursor-pointer rounded-lg bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline  shadow-2xl shadow-zinc-900">
                            <span className=" absolute inset-0 overflow-hidden rounded-lg">
                                <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                            </span>
                            <div className="relative z-10 flex h-8 items-center space-x-2 rounded-lg bg-zinc-950 px-4 py-0.5 text-lg ring-1 ring-white/10 ">
                                <span className="ml-5 font-normal">{`Resume`}</span>
                                <span className="pt-1 font-normal">
                                    <FaArrowDown size={12} />
                                </span>
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                        </button>
                        <button className="group relative inline-block cursor-pointer rounded-lg bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline  shadow-2xl shadow-zinc-900">
                            <span className="absolute inset-0 overflow-hidden rounded-lg">
                                <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                            </span>
                            <div className="relative z-10 flex h-8 items-center space-x-2 rounded-lg bg-zinc-950 px-4 py-0.5 text-lg ring-1 ring-white/10 ">
                                <span className="font-normal">{`Contact Me`}</span>
                                <span className="font-normal">
                                    <FaLink rotate={45} size={14} />
                                </span>
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default hero
