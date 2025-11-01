import { Separator } from '@/components/ui/separator'
import gradpic from '../assets/gradpic.jpg'
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { Button } from '@/components/ui/button'

const About = () => {
  return (
    <div className='flex h-full w-full'>
      <div className='flex flex-col border border-yellow-600 p-10'>
        <div className="w-80 aspect-square overflow-hidden rounded-full m-5">
          <img className="w-full h-full object-cover object-top" src={gradpic} alt="Jaycy's Graduation Picture" />
        </div>
        <div className='flex flex-col mt-4 items-center justify-center font-medium'>
          <span className='text-xl'>Jaycy Ivan Bañaga</span>
          <span className='text-lg'>Bachelor of Science in Computer Engineering</span>
        </div>
        <Separator className='bg-gray-500 my-5' orientation='horizontal'/>
        <div className='flex gap-5'>
          <Button
            className='inline-flex items-center gap-2 bg-white hover:bg-white p-0 m-0 border border-black '
            size='icon'
            onClick={() => window.open('https://www.linkedin.com/in/jaycybanaga', '_blank')}
          >
            <FaLinkedin className='size-9 text-blue-500' aria-hidden="true" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button
            className='inline-flex items-center gap-2 bg-white hover:bg-white p-0 m-0 border border-black '
            size='icon'
            onClick={() => window.open('https://github.com/latocchi', '_blank')}
          >
            <FaGithub className='size-9 text-black' aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            className='inline-flex items-center gap-2 bg-white hover:bg-white p-0 m-0 border border-black '
            size='icon'
            onClick={() => window.open('https://www.facebook.com/jaycyivan31', '_blank')}
          >
            <FaFacebook className='size-9 text-blue-600' aria-hidden="true" />
            <span className="sr-only">Facebook</span>
          </Button>
        </div>
      </div>
      <div>
        <h1 className='text-4xl font-bold mb-4'>About Me</h1>
      </div>
    </div>
  )
}

export default About