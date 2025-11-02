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
    <div className='flex h-full w-full'>
      <Toaster position='top-right' />
      <div className='flex flex-col items-center justify-center gap-2 p-5 border border-black'>
        <div className="w-80 aspect-square overflow-hidden rounded-full m-5">
          <img className="w-full h-full object-cover object-top" src={gradpic} alt="Jaycy's Graduation Picture" />
        </div>
        <div className='flex flex-col mt-4 items-center justify-center font-medium'>
          <span className='text-xl'>Jaycy Ivan Bañaga</span>
          <span className='text-lg'>Bachelor of Science in Computer Engineering</span>
        </div>
        <Separator className='bg-gray-500 my-5' orientation='horizontal'/>
        <div className='flex gap-10 justify-center'>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className='inline-flex items-center gap-2 bg-white hover:bg-white p-0 m-0'
                size='icon'
                onClick={() => window.open('https://www.linkedin.com/in/jaycybanaga', '_blank')}
              >
                <FaLinkedin className='size-9 text-blue-500' aria-hidden="true" />
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
                className='inline-flex items-center gap-2 bg-white hover:bg-white p-0 m-0'
                size='icon'
                onClick={() => window.open('https://github.com/latocchi', '_blank')}
              >
                <FaGithub className='size-9 text-black' aria-hidden="true" />
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
                className='inline-flex items-center gap-2 bg-white hover:bg-white p-0 m-0'
                size='icon'
                onClick={() => window.open('https://www.facebook.com/jaycyivan31', '_blank')}
              >
                <FaFacebook className='size-9 text-blue-600' aria-hidden="true" />
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
                className='inline-flex items-center gap-2 bg-white hover:bg-white p-0 m-0'
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
                className='inline-flex items-center gap-2 bg-white hover:bg-white p-0 m-0'
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
                <FaWhatsappSquare className='size-9 text-green-500' aria-hidden="true" />
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
                className='inline-flex items-center gap-2 bg-white hover:bg-white p-0 m-0'
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
      </div>
      <div>
        <h1 className='text-4xl font-bold mb-4'>About Me</h1>
      </div>
    </div>
  )
}

export default About