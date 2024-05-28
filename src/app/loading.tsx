import { CgSpinnerTwoAlt } from "react-icons/cg";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="text-center flex justify-center items-center gap-2">
        <CgSpinnerTwoAlt className="animate-spin h-16 w-16 text-gray-800" />
        <p className="text-gray-800 text-xl ">Loading Blogs...</p>
      </div>
    </div>
  )
}

export default Loading