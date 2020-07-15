import { useHistory } from 'react-router-dom'

export default function useRouterHistory() {
  const history = useHistory()

  const goto = (path: string) => {
    history.push(path)
  }

  return goto
}
