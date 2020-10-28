interface Props {
  content: any
}

const ContidionalComponent: React.FC<Props> = ({ children, content }) =>
  content ?? false ? <>{children}</> : <></>

export default ContidionalComponent
