import { AiOutlineCheck, AiOutlineWarning } from 'react-icons/ai/index.js'

interface Props {
  status: "Complete" | "WIP"
}

const ProjectStatus = ({ status }: Props) => 
  <div className={`p-2 flex flex-row gap-1 justify-center items-center rounded-md border-2 ${status === 'Complete' ? 'bg-green-300 border-green-400' : 'bg-yellow-300 border-yellow-400'}`}>
    {status === 'Complete' && <AiOutlineCheck className={'fill-green-800'} />}
    {status === 'WIP' && <AiOutlineWarning className={'fill-yellow-800'} />}
    <p className={`m-0 text-sm ${status === 'Complete' ? 'text-green-800' : 'text-yellow-800'}`}>Status: <span className={'font-semibold'}>{status}</span></p>
  </div>


export default ProjectStatus