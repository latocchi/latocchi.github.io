import { Separator } from '@/components/ui/separator'
import gradpic from '../assets/gradpic.jpg'
import gmailIcon from '../assets/gmail.svg'
import { FaWhatsappSquare, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import toast, { Toaster } from 'react-hot-toast';
import { FaFilePdf } from "react-icons/fa6";
import cIcon from '../assets/icons8-c-programming.svg'

const About = () => {
  const myEmail = 'jaycybanaga@gmail.com'
  const myWhatsApp = '+639104620968'

  const handleCopyToClipboard = async (text: string) => {
    if (!navigator.clipboard) {
      throw new Error('Clipboard API not available')
    }
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      throw err
    }
  }

  return (
    <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
      <Toaster position='top-right' />
      {/* Profile Column */}
      <aside className='flex flex-col items-center gap-2 p-2 md:col-span-2 md:top-6 lg:col-span-1'>
        <div className="w-60 md:w-70 lg:w-80 aspect-square overflow-hidden rounded-full m-5">
          <img className="w-full h-full object-cover object-top" src={gradpic} alt="Jaycy's Graduation Picture" />
        </div>
        <div className='flex flex-col mt-4 items-center justify-center font-medium'>
          <span className='text-3xl md:text-3xl lg:text-3xl'>Jaycy Ivan Bañaga</span>
          <span className='text-xl md:text-xl lg:text-2xl text-center'>Bachelor of Science in Computer Engineering</span>
        </div>
        <Separator className='bg-gray-500 my-5' orientation='horizontal'/>
        <div className='flex gap-3 md:gap-8 lg:gap-6 flex-wrap justify-center'>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0'
                size='icon'
                onClick={() => window.open('https://www.linkedin.com/in/jaycybanaga', '_blank')}
              >
                <span className="inline-flex items-center justify-center w-7 h-7 bg-white">
                  <FaLinkedin className='size-9 text-blue-500' aria-hidden="true" />
                </span>
                <span className="sr-only">LinkedIn</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>My LinkedIn Profile</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0'
                size='icon'
                onClick={() => window.open('https://github.com/latocchi', '_blank')}
              >
                <span className="inline-flex items-center justify-center w-9 h-9 bg-white rounded-full">
                  <FaGithub className='size-9 text-black' aria-hidden="true" />
                </span>
                <span className="sr-only">GitHub</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>My GitHub Profile</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0'
                size='icon'
                onClick={() => window.open('https://www.facebook.com/jaycyivan31', '_blank')}
              >
                <span className="inline-flex items-center justify-center w-9 h-9 bg-white rounded-full">
                  <FaFacebook className='size-9 text-blue-600' aria-hidden="true" />
                </span>
                <span className="sr-only">Facebook</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>My Facebook Profile</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0'
                size='icon' 
                onClick={async () => {
                  try {
                    await handleCopyToClipboard(myEmail)
                    toast.success('Email copied to clipboard')
                  } catch {
                    toast.error('Unable to copy. Please copy manually: ' + myEmail)
                  }
                }}         
              >
                <img src={gmailIcon} className='size-9' aria-hidden="true" />
                <span className="sr-only">Gmail</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>My Gmail Address</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0'
                size='icon'
                onClick={async () => {
                  try {
                    await handleCopyToClipboard(myWhatsApp)
                    toast.success('WhatsApp number copied to clipboard')
                  } catch {
                    toast.error('Unable to copy. Please copy manually: ' + myWhatsApp)
                  }
                }}
              >
                <span className="inline-flex items-center justify-center w-7 h-7 bg-white">
                  <FaWhatsappSquare className='size-9 text-green-500' aria-hidden="true" />
                </span>
                <span className="sr-only">WhatsApp</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>My WhatsApp Number</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0'
                size='icon'
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <FaFilePdf className='size-9 text-red-500' aria-hidden="true" />
                <span className="sr-only">My resume</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>My Resume</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </aside>
      <main className='md:col-span-2'>
        <div className='m-2 mt-10'>
          <h1 className='text-2xl md:text-2xl lg:text-4xl font-bold'>About Me</h1>
          <div className='mt-5 font-normal text-sm lg:text-lg md:text-md'>
            <p>
              Hi, I am Jaycy Ivan Bañaga, a Computer Engineering graduate from the Rizal Technological University
              with a strong interest in <span className='font-bold'>software development</span>, <span className='font-bold'>embedded systems</span>, 
              and <span className='font-bold'>IoT technologies</span>. I enjoy creating designing and developing solutions that connect hardware and software,
              from microcontroller programming to building web applications and command line tools. My interests includes <span className='font-bold'>embedded systems</span>,
              <span className='font-bold'> backend development</span>, and <span className='font-bold'>automation</span>. I'm always exploring ways to make technology
              simpler and more accessible. My expertise includes programming languages such as <span className='font-bold'>C</span>, <span className='font-bold'>Python</span>,
              and <span className='font-bold'>JavaScript/TypeScript</span>, and I'm currently expanding my skills in <span className='font-bold'>Go</span> and modern
              web frameworks.
            </p>
          </div>
          <div className='mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
              <div>
                <h2 className='text-xl md:text-2xl lg:text-2xl font-bold'>Languages</h2>
                <div className='flex flex-wrap gap-2'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://www.c-language.org/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src={cIcon} alt="" />
                        <span className="sr-only">C language</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>C language</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://www.python.org/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                        <span className="sr-only">Python</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Python</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://html.spec.whatwg.org/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                        <span className="sr-only">HTML5</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>HTML5</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://www.w3.org/Style/CSS/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                        <span className="sr-only">CSS3</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>CSS3</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                        <span className="sr-only">Javascript</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Javascript</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://www.typescriptlang.org/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                        <span className="sr-only">Typescript</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Typescript</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <div>
                <h2 className='text-xl md:text-2xl lg:text-2xl font-bold'>I'm currently learning</h2>
                <div className='flex gap-2'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://go.dev/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" />
                        <span className="sr-only">Go language</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Go language</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <div>
                <h2 className='text-xl md:text-2xl lg:text-2xl font-bold'>Frameworks</h2>
                <div className='flex flex-wrap gap-2'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://fastapi.tiangolo.com/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />
                        <span className="sr-only">FastAPI</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>FastAPI</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://react.dev/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                        <span className="sr-only">React</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>React</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://vuejs.org/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />
                        <span className="sr-only">Vue.js</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Vue.js</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://tailwindcss.com/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                        <span className="sr-only">Tailwind CSS</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tailwind CSS</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.htmlw', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/espressif.svg" />
                        <span className="sr-only">ESP-IDF</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>ESP-IDF</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <div>
                <h2 className='text-xl md:text-2xl lg:text-2xl font-bold'>Database</h2>
                <div className='flex flex-wrap gap-2'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://www.postgresql.org/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                        <span className="sr-only">PostgreSQL</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>PostgreSQL</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://www.mysql.com/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                        <span className="sr-only">MySQL</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>MySQL</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <div>
                <h2 className='text-xl md:text-2xl lg:text-2xl font-bold'>Tools & Platforms</h2>
                <div className='flex flex-wrap gap-2'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://git-scm.com/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                        <span className="sr-only">Git</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Git</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://www.docker.com/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                        <span className="sr-only">Docker</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Docker</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://www.kicad.org/', '_blank')}
                      >
                        <img className='w-full h-full object-cover transform scale-190 transition-transform' src="https://community.aisler.net/uploads/default/original/1X/bd76c59d8985e3e96370e5054eefa3a62f9be00f.png" />
                        <span className="sr-only">KiCAD</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>KiCAD</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://www.microsoft.com/en-us/windows?r=1', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/microsoft-windows.svg" />
                        <span className="sr-only">Windows</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Windows</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://www.linux.org/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/linux.svg" />
                        <span className="sr-only">Linux</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Linux</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className='inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-10 md:size-14 lg:size-16'
                        onClick={() => window.open('https://www.fedoraproject.org/', '_blank')}
                      >
                        <img className='size-10 md:size-14 lg:size-16' src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/fedora.svg" />
                        <span className="sr-only">Fedora</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Fedora</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About