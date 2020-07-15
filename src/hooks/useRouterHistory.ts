import { useHistory } from 'react-router-dom'

export default function useRouterHistory() {
  const history = useHistory()

  const goto = (path: string) => {
    history.push(`/sge-thai-template${path}`)
  }

  return goto
}
