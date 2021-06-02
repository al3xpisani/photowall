import React,{Fragment} from 'react'
import spinner from '../../../spinner.gif'

const Spinner = ()=> <Fragment>
  <img src={spinner} alt="loading..." style={styles}/>
</Fragment>

const styles={
  width:'200px',
  margin: 'auto',
  display: 'block'
}

export default Spinner