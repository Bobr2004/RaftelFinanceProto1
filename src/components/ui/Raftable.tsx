 
type RaftableType = {
   children?: React.ReactNode;
}


function Raftable({children}: RaftableType) {
  return (
    <div className="C-borderBox border rounded-lg p-4 w-full h-36 C-bgBox">{children}</div>
  )
}

export {Raftable}