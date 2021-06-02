import React,{useContext} from 'react'
import GitHubContext from '../../ context/github/GitHubContext'

const Alert = () => {
  const gitHubcontext = useContext(GitHubContext)
  return (
    gitHubcontext.alert !== null && (
        <div className={`alert alert-${gitHubcontext.alertType}`}>
          <i className='fas fa-info-circle'/> {gitHubcontext.alert}
        </div>
      )
  )
}

export default Alert