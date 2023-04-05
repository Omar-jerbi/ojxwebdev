import './LinkButton.scss'

interface props {
  width:string
  children: React.ReactElement
}

export default function LinkButton(props: props) {
  return (
    <div className="linkbutton">
      <div className="wrapper" style={{width:props.width}}>
        {props.children}        
      </div>
    </div>
  )
}
