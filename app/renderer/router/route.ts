import Root from '@r/container/root'
import Resume from '@r/container/resume'

export interface RouterType {
  path: string
  exact?: boolean
  name: string
  component: (props: any) => JSX.Element
  children?: RouterType[]
}

const routes: RouterType[] = [
  {
    path: '/',
    name: 'root',
    exact: true,
    component: Root
  },
  {
    path: '/resume',
    name: 'resume',
    exact: true,
    component: Resume
  }
]

export default routes
