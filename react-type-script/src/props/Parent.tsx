import {Child} from './Child'

const clickingButton = () => console.log('clicked')

const Parent = () => {
  return (<Child color='red' click={clickingButton}>
    <div>children...</div>
    <i>teste</i>
  </Child>)
}

export default Parent